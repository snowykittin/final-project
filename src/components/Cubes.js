import { useStore } from "../hooks/useStore";
import { Cube } from "./Cube"

export const Cubes = () => {
    const [cubes] = useStore((state) => [
        state.cubes
    ])
    
    //console.log(cubes)
    return cubes.map(({key, pos, texture}) => {
        /* Returning a Cube component with the key, position, and texture props. */
        return (
            <Cube key={key} position={pos} texture={texture} />
        )
    })
}