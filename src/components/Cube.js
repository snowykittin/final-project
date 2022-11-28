import { useBox } from "@react-three/cannon"
import { useStore } from "../hooks/useStore"
import * as textures from "../images/textures"

export const Cube = ({position, texture}) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))
    //get the texture for adding/removing blocks
    const activeTexture = textures[texture + 'Texture']
    //grab the const from useStore for removing and adding cubes
    const[addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube])

    return (
        <mesh 
            onClick={(e) => {
                e.stopPropagation()
                //figure out which face of the cube is clicked
                const clickedFace = Math.floor(e.faceIndex / 2)
                //get the x y z of a click
                const {x,y,z} = ref.current.position;

                //if shift, then remove the cube
                if(e.shiftKey){
                    removeCube(x,y,z)
                    return
                }

                //handle adding cubes
                if(clickedFace === 0){
                    addCube(x + 1, y, z)
                    return
                }else if(clickedFace === 1){
                    addCube(x - 1, y, z)
                    return
                }else if(clickedFace === 2){
                    addCube(x, y + 1, z)
                    return
                }else if(clickedFace === 3){
                    addCube(x, y - 1, z)
                    return
                }else if(clickedFace === 4){
                    addCube(x, y, z + 1)
                    return
                }else if(clickedFace === 5){
                    addCube(x, y, z - 1)
                    return
                }
            }}
            ref={ref}
        >
            <boxGeometry attach="geometry" />
            <meshStandardMaterial map={activeTexture} attach="material" />
        </mesh>
    )
}