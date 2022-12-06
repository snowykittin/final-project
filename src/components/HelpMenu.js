import React, {useState, useEffect} from "react"
import Controls from "../data/Controls.json"

export const HelpMenu = () => {
    const [isActive, setActive] = useState(false);
    const toggleActive = () => {
        setActive((prevValue) => !prevValue)
    }

    //set up json help menu
    let arrControls = [];
    //set array of textures into a new textureNames array, looping through each entry
    Controls.inputs.forEach(input => {
        //empty texture 'object' to go into the array
        let newInput = {};

        newInput[input.action] = input.key

        arrControls.push(newInput)
    });

    //construct output from arrControls
    let menuOutput = []
    arrControls.forEach(control => {
      for(const input in control){
        menuOutput.push(<p>{input}: {control[input]}</p>)
      }

    });

    useEffect(() => {
        /*
         * When H is pressed, toggle the active state
         */
        const handleH = (event) => {
           if (event.keyCode === 72) {
            toggleActive()
          }
        };
        window.addEventListener('keydown', handleH);
    
        return () => {
          window.removeEventListener('keydown', handleH);
        };
        // eslint-disable-next-line 
      }, []);

    return(
        //check if the class is active or not, set classes accordingly
        <div className={isActive ? "keys visible" : "hide"}>
          {menuOutput}
        </div>
    )
}