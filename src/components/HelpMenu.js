import React, {useState, useEffect} from "react"

export const HelpMenu = () => {
    const [isActive, setActive] = useState(false);
    const toggleActive = () => {
        setActive(!isActive)
    }
  
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
            <p>[W], [A], [S], [D] : Move</p>
            <p>[Space] : Jump</p>
            <p>Hold [Space] : 'Fly'</p>
            <p>Click : Place Block</p>
            <p>[Shift] + Click : Remove Block</p>
        </div>
    )
}