import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'
//import ALL textures to make life easy 
import * as TEXTURE from './images'

//Create textures from images imported in
const dirtTexture = new TextureLoader().load(TEXTURE.dirtImg)
const grassTexture = new TextureLoader().load(TEXTURE.grassImg)
const glassTexture = new TextureLoader().load(TEXTURE.glassImg)
const groundTexture = new TextureLoader().load(TEXTURE.grassImg)

const oakLogTexture = new TextureLoader().load(TEXTURE.oakLogImg)
const oakWoodTexture = new TextureLoader().load(TEXTURE.oakPlankImg)

dirtTexture.magFilter = NearestFilter;
oakLogTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
oakWoodTexture.magFilter = NearestFilter;
//let ground repeat without smearing
groundTexture.magFilter = NearestFilter
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

//export all textures for use
export{
    dirtTexture, oakLogTexture, grassTexture, glassTexture, oakWoodTexture, groundTexture
}