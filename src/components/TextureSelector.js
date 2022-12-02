import { useEffect, useState } from "react"
import { useKeyboard } from "../hooks/useKeyboard"
import { useStore } from "../hooks/useStore"
import * as BLOCKS from '../images/images'

const images = {
    dirt: BLOCKS.dirtImg,
    grass: BLOCKS.grassImg,
    glass: BLOCKS.glassImg,
    oakWood: BLOCKS.oakPlankImg,
    oakLog: BLOCKS.oakLogImg,
    birchWood: BLOCKS.birchPlankImg,
    birchLog: BLOCKS.birchLogImg
}

export const TextureSelector = () => {
    //determine visibility
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {dirt,glass,grass,oakWood,oakLog,birchWood,birchLog} = useKeyboard()
    const textures = {dirt,glass,grass,oakWood,oakLog,birchWood,birchLog}

    useEffect(() => {
        const pressedTexture = Object.entries(textures).find(([k,v]) => v)
        if(pressedTexture){
            setTexture(pressedTexture[0])
        }

        // eslint-disable-next-line
    }, [setTexture, dirt,glass,grass,oakWood,oakLog,birchWood,birchLog])

    useEffect(() => {
        //if active texture changes, make the selector visible

        //after five seconds, make it invisible
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)
        setVisible(true)

        //clear visibility timeout
        return () => {
            clearTimeout(visibilityTimeout)
        }

    },[activeTexture])

    return visible && (
        <div className='selector'>
            {Object.entries(images).map(([k, src]) => {
                return <img key={k} src={src} alt={k} className={`${k === activeTexture ? 'active' : ''}`} />
            })}
        </div>
    )
}