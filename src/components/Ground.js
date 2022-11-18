import { usePlane } from "@react-three/cannon"
import { groundTexture } from "../images/textures"

export const Ground = () => {
    const [ref] = usePlane(() => ({
        //rotate the default to be visible
        rotation: [(-Math.PI / 2), 0, 0], position: [0,0,0]
    }))

    //set size of ground
    groundTexture.repeat.set(100,100)    

    return (
        <mesh ref={ref}>
            <planeGeometry attach='geometry' args={[100,100]} />
            <meshStandardMaterial attach='material' map={groundTexture}  />
        </mesh>
    )
}