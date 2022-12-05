import create from 'zustand'
import { nanoid } from 'nanoid'

//local storage array helpers
const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const useStore = create((set) => ({
    //set default texture
    texture:'dirt',
    cubes: getLocalStorage('cubes') || [],
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
    setTexture: (texture) => {
        //set texture based off of digit pressed
        set(() => ({
            texture
        }))
    },
    //using localstorage to save a world
    saveWorld: () => {
		set((prev) => {
			setLocalStorage('cubes', prev.cubes)
            return prev
		})
	},
	resetWorld: () => {
		set(() => ({
			cubes: []
		}))
	}
}))