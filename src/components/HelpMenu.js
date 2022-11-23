import React, {useState, useEffect} from "react"

export const HelpMenu = () => {
    const [isActive, setActive] = useState(false);
  
    useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 72) {
            if(isActive){
                setActive(false)
            }else{
                setActive(true)
            }
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
        // eslint-disable-next-line 
      }, []);

    return(
        <div className={isActive ? "keys visible" : "hide"}>
            <p>[W], [A], [S], [D] : Move</p>
            <p>[Space] : Jump</p>
            <p>Hold [Space] : 'Fly'</p>
            <p>Click : Place Block</p>
            <p>[Shift] + Click : Remove Block</p>
        </div>
    )
}