import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'
import { dirtImg, logImg, grassImg, glassImg, woodImg } from './images'

//Create textures from images imported in
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const groundTexture = new TextureLoader().load(grassImg)

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
//let ground repeat without smearing
groundTexture.magFilter = NearestFilter
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

//export all textures for use
export{
    dirtTexture, logTexture, grassTexture, glassTexture, woodTexture, groundTexture
}