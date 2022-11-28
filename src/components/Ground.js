import { usePlane } from "@react-three/cannon"
import { groundTexture } from "../images/textures"
import { useStore } from "../hooks/useStore"

export const Ground = () => {
    const [ref] = usePlane(() => ({
        //rotate the default to be visible
        rotation: [(-Math.PI / 2), 0, 0], position: [0,-0.5,0]
    }))

    /* This is a hook that is used to access the state of the store. */
    const[addCube] = useStore((state) => [state.addCube])

    //set size of ground
    groundTexture.repeat.set(100,100)    

    return (
        <mesh 
            //onClick to handle adding a cube
            onClick={(e) => {
                //stop propogation allows us to not go through the floor
                e.stopPropagation();
                /* Taking the values of the click and
                assigning them to the variables x, y, and z. */
                const [x,y,z] = Object.values(e.point).map(val => Math.ceil(val))
                addCube(x,y,z)
            }}
            ref={ref}
        >
            {/* creating a plane geometry and applying a material to it. */}
            <planeGeometry attach='geometry' args={[100,100]} />
            <meshStandardMaterial attach='material' map={groundTexture}  />
        </mesh>
    )
}