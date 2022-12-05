import { PointerLockControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export const FPV = () => {
    const {camera, gl} = useThree()

    return(
        // lock the pointer where the camera is, and use the global document element as the reference
        <PointerLockControls args={[camera, gl.domElement]} />
    )
}