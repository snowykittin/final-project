import { useBox } from "@react-three/cannon"
import { useState } from "react"
import { useStore } from "../hooks/useStore"
import * as textures from "../images/textures"
// import { arrTexture } from "../images/textures"

export const Cube = ({position, texture}) => {
    //use states for showing whether or not a cube has been hovered
    const [isHovered, setIsHovered] = useState(false)
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
            onPointerMove={(e) => {
                e.stopPropagation()
                setIsHovered(true)
            }}
            onPointerOut={(e) => {
                e.stopPropagation()
                setIsHovered(false)
            }}
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
            {/* Create a cube where clicked, and check whether or not a cube is hovered over to potentially darken the texture - also set an opacity for glass */}
            <boxGeometry attach="geometry" />
            <meshStandardMaterial color={isHovered ? 'grey' : 'white'} map={activeTexture} transparent={true} opacity={texture === 'glass' ? '0.8' : 1} attach="material" />
        </mesh>
    )
}