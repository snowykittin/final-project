import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'
//import ALL textures to make life easy 
import * as TEXTURE from './images'

//Create textures from images imported in
const dirtTexture = new TextureLoader().load(TEXTURE.dirtImg)
const grassTexture = new TextureLoader().load(TEXTURE.grassImg)
const glassTexture = new TextureLoader().load(TEXTURE.glassImg)
const groundTexture = new TextureLoader().load(TEXTURE.grassImg)

//load wood textures
const oakLogTexture = new TextureLoader().load(TEXTURE.oakLogImg)
const oakWoodTexture = new TextureLoader().load(TEXTURE.oakPlankImg)
const birchLogTexture = new TextureLoader().load(TEXTURE.birchLogImg)
const birchWoodTexture = new TextureLoader().load(TEXTURE.birchPlankImg)
const acaciaLogTexture = new TextureLoader().load(TEXTURE.acaciaLogImg)
const acaciaWoodTexture = new TextureLoader().load(TEXTURE.acaciaPlankImg)
const spruceLogTexture = new TextureLoader().load(TEXTURE.spruceLogImg)
const spruceWoodTexture = new TextureLoader().load(TEXTURE.sprucePlankImg)
const jungleLogTexture = new TextureLoader().load(TEXTURE.jungleLogImg)
const jungleWoodTexture = new TextureLoader().load(TEXTURE.junglePlankImg)

//remove smearing
dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;

//remove smearing of wood
oakLogTexture.magFilter = NearestFilter;
oakWoodTexture.magFilter = NearestFilter;
birchLogTexture.magFilter = NearestFilter;
birchWoodTexture.magFilter = NearestFilter;
acaciaLogTexture.magFilter = NearestFilter;
acaciaWoodTexture.magFilter = NearestFilter;
spruceLogTexture.magFilter = NearestFilter;
spruceWoodTexture.magFilter = NearestFilter;
jungleLogTexture.magFilter = NearestFilter;
jungleWoodTexture.magFilter = NearestFilter;


//let ground repeat without smearing
groundTexture.magFilter = NearestFilter
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

//export all textures for use
export{
    dirtTexture, grassTexture, glassTexture, groundTexture,
    oakLogTexture, oakWoodTexture, birchLogTexture, birchWoodTexture,
    acaciaLogTexture, acaciaWoodTexture, spruceLogTexture, spruceWoodTexture,
    jungleLogTexture, jungleWoodTexture
}