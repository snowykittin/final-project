import { useCallback, useEffect, useState } from "react"

function actionByKey(key){
    const keyActionMap = {
        KeyW: 'moveForward',
        KeyS: 'moveBackward',
        KeyA: 'moveLeft',
        KeyD: 'moveRight',
        Space: 'jump',
        Digit1: 'dirt',
        Digit2: 'grass',
        Digit3: 'glass',
        Digit4: 'oakWood',
        Digit5: 'oakLog',
    }
    return keyActionMap[key]
}

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        grass: false,
        glass: false,
        oakWood: false,
        oakLog: false,
    })

    const handleKeyDown = useCallback((e) => {
        const action = actionByKey(e.code)
        if(action){
            setActions((prev) => {
                return ({
                    ...prev, [action]: true
                })
            })
        }
    }, [])

    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code)
        if(action){
            setActions((prev) => {
                return ({
                    ...prev, [action]: false
                })
            })
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
    },[handleKeyDown, handleKeyUp])

    return actions
}