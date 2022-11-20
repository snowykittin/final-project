import { useFrame, useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon/"
import { Vector3 } from "three"
import { useEffect, useRef } from "react"
import { useKeyboard } from "../hooks/useKeyboard"

const JUMP_FORCE = 4;
const SPEED = 4;

export const Player = () => {
    // const actions = useKeyboard()
    const {moveBackward, moveForward, moveLeft, moveRight, jump} = useKeyboard()

    const {camera} = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0,1,0]
    }))

    //movement time!
    const vel = useRef([0,0,0])
    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v)
    }, [api.velocity])

    //set position constant
    const pos = useRef([0,0,0])
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    //run the camera change on every frame
    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))

        /* This is the code that is responsible for the movement of the player. */
        const direction = new Vector3()
        const frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        )
        const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
            0,
            0
        )

        /* Setting the direction of the player. */
        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation)

        api.velocity.set(direction.x, vel.current[1], direction.z)
        
        //if space is hit, jump
        if(jump && Math.abs(vel.current[1] < 0.00005)){
            api.velocity.set(pos.current[0], JUMP_FORCE, pos.current[2])
        }
    })

    return(
        <mesh ref={ref}>

        </mesh>
    )
}