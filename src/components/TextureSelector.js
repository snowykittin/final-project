import { useEffect, useState } from "react"
import { useKeyboard } from "../hooks/useKeyboard"
import { useStore } from "../hooks/useStore"
import * as BLOCKS from '../images/images'

const images = {
    dirt: BLOCKS.dirtImg,
    glass: BLOCKS.glassImg,
    oakWood: BLOCKS.oakPlankImg,
    oakLog: BLOCKS.oakLogImg,
    birchWood: BLOCKS.birchPlankImg,
    birchLog: BLOCKS.birchLogImg,
    spruceWood: BLOCKS.sprucePlankImg,
    spruceLog: BLOCKS.spruceLogImg,
    jungleWood: BLOCKS.junglePlankImg,
    jungleLog: BLOCKS.jungleLogImg,
    blackWool: BLOCKS.blackWoolImg,
    greyWool: BLOCKS.greyWoolImg,
    whiteWool: BLOCKS.whiteWoolImg,
    redWool: BLOCKS.redWoolImg,
    yellowWool: BLOCKS.yellowWoolImg,
    orangeWool: BLOCKS.orangeWoolImg,
    greenWool: BLOCKS.greenWoolImg,
    blueWool: BLOCKS.blueWoolImg,
    purpleWool: BLOCKS.purpleWoolImg,
    pinkWool: BLOCKS.pinkWoolImg,
}

export const TextureSelector = () => {

    //determine visibility
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {dirt,glass,oakWood,oakLog,birchWood,birchLog,spruceWood,spruceLog,jungleWood,jungleLog,blackWool,greyWool,whiteWool,redWool,yellowWool,orangeWool,greenWool,blueWool,purpleWool,pinkWool} = useKeyboard()
    const textures = {dirt,glass,oakWood,oakLog,birchWood,birchLog,spruceWood,spruceLog,jungleWood,jungleLog,blackWool,greyWool,whiteWool,redWool,yellowWool,orangeWool,greenWool,blueWool,purpleWool,pinkWool}

    useEffect(() => {
        const pressedTexture = Object.entries(textures).find(([k,v]) => v)
        if(pressedTexture){
            setTexture(pressedTexture[0])
        }

        // eslint-disable-next-line
    }, [setTexture, dirt,glass,oakWood,oakLog,birchWood,birchLog,spruceWood,spruceLog,jungleWood,jungleLog, blackWool,greyWool,whiteWool,redWool,yellowWool,orangeWool,greenWool,blueWool,purpleWool,pinkWool])

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