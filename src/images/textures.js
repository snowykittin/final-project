import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'
//import ALL textures to make life easy 
import * as TEXTURE from './images'

import Textures from './images.json'

//CONVERSION TO JSON
//array of texture names
export let arrTexture = [];

//set array of textures into a new textureNames array, looping through each entry
Textures.texture.forEach(t => {
    //empty texture 'object' to go into the array
    let newTexture = {};
    //create texture name and set it to the key for the new texture
    let newName = t.name + "Texture"

    //create a texture based off of the name and image
    newTexture[newName] = new TextureLoader().load(t.image)
    // //remove smearing on new texture
    newTexture[newName].magFilter = NearestFilter;


    arrTexture.push(newTexture)
});
console.log(arrTexture)

const dirtTexture = new TextureLoader().load(TEXTURE.dirtImg)
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

//load wool textures
const blackWoolTexture = new TextureLoader().load(TEXTURE.blackWoolImg)
const whiteWoolTexture = new TextureLoader().load(TEXTURE.whiteWoolImg)
const greyWoolTexture = new TextureLoader().load(TEXTURE.greyWoolImg)
const redWoolTexture = new TextureLoader().load(TEXTURE.redWoolImg)
const yellowWoolTexture = new TextureLoader().load(TEXTURE.yellowWoolImg)
const orangeWoolTexture = new TextureLoader().load(TEXTURE.orangeWoolImg)
const greenWoolTexture = new TextureLoader().load(TEXTURE.greenWoolImg)
const blueWoolTexture = new TextureLoader().load(TEXTURE.blueWoolImg)
const purpleWoolTexture = new TextureLoader().load(TEXTURE.purpleWoolImg)
const pinkWoolTexture = new TextureLoader().load(TEXTURE.pinkWoolImg)

//remove smearing
dirtTexture.magFilter = NearestFilter;
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

//remove smearing of wool
blackWoolTexture.magFilter = NearestFilter;
whiteWoolTexture.magFilter = NearestFilter;
greyWoolTexture.magFilter = NearestFilter;
redWoolTexture.magFilter = NearestFilter;
yellowWoolTexture.magFilter = NearestFilter;
greenWoolTexture.magFilter = NearestFilter;
orangeWoolTexture.magFilter = NearestFilter;
blueWoolTexture.magFilter = NearestFilter;
purpleWoolTexture.magFilter = NearestFilter;
pinkWoolTexture.magFilter = NearestFilter;


//let ground repeat without smearing
groundTexture.magFilter = NearestFilter
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

//export all textures for use
export{
    dirtTexture, glassTexture, groundTexture,
    oakLogTexture, oakWoodTexture, birchLogTexture, birchWoodTexture,
    acaciaLogTexture, acaciaWoodTexture, spruceLogTexture, spruceWoodTexture,
    jungleLogTexture, jungleWoodTexture, blackWoolTexture, whiteWoolTexture, greyWoolTexture, redWoolTexture, yellowWoolTexture, orangeWoolTexture, greenWoolTexture, blueWoolTexture, purpleWoolTexture, pinkWoolTexture
}