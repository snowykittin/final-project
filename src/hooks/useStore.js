import create from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
    texture:'dirt',
    cubes: [],
    //array used for all cubes that exist, set them visible
    addCube: (x,y,z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x,y,z],
                    texture: prev.texture
                }
            ]
        }))
    },
    //array used to note all cubes that exist, and filter/remove the one that is clicked
    removeCube: (x,y,z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes.filter(cube => {
                    const [X,Y,Z] = cube.pos
                    return X !== x || Y !== y || Z !== z
                })
            ]
        }))
    },
    //used to set the texture that is selected by the player
    setTexture: () => {},
    //using localstorage to save a world
    saveWorld: () => {},
    //using localstorage to reset the world
    resetWorld: () => {}
}))