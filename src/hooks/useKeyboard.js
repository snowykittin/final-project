import { useCallback, useEffect, useState } from "react"

function actionByKey(key){
    const keyActionMap = {
        KeyW: 'moveForward',
        KeyS: 'moveBackward',
        KeyA: 'moveLeft',
        KeyD: 'moveRight',
        Space: 'jump',
        Digit1: 'dirt',
        Digit2: 'glass',
        Digit3: 'oakWood',
        Digit4: 'oakLog',
        Digit5: 'birchWood',
        Digit6: 'birchLog',
        Digit7: 'spruceWood',
        Digit8: 'spruceLog',
        Digit9: 'jungleWood',
        Digit0: 'jungleLog',
        Numpad0: 'blackWool',
        Numpad1: 'greyWool',
        Numpad2: 'whiteWool',
        Numpad3: 'redWool',
        Numpad4: 'yellowWool',
        Numpad5: 'orangeWool',
        Numpad6: 'greenWool',
        Numpad7: 'blueWool',
        Numpad8: 'purpleWool',
        Numpad9: 'pinkWool',
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
        glass: false,
        oakWood: false,
        oakLog: false,
        birchWood: false,
        birchLog: false,
        spruceWood: false,
        spruceLog: false,
        jungleWood: false,
        jungleLog: false,
        blackWool: false,
        greyWool: false,
        whiteWool: false,
        redWool: false,
        yellowWool: false,
        orangeWool: false,
        greenWool: false,
        blueWool: false,
        purpleWool: false,
        pinkWool: false,
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