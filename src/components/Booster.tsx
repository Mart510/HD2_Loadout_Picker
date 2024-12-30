import { useState } from "react";
import type { booster } from "../assets/types";
import { boosters } from "../assets/booster";

const BoosterContainer = (): JSX.Element => {

    const boosterArray: booster[] = boosters
    
    // state for current booster
    const [currentBooster, setCurrentBooster] = useState(() =>
        boosterArray[Math.floor(Math.random() * boosterArray.length)] 
    );

    // re-roll booster
    const handleReRoll = (): void => {
        const currentBoosterName = currentBooster.name

        if (!currentBoosterName) {
            return
        };

        const arrayWithoutCurrentBooster = boosterArray.filter((boosterItem) => boosterItem.name !== currentBoosterName)

        const newBooster = arrayWithoutCurrentBooster[Math.floor(Math.random() * arrayWithoutCurrentBooster.length)];

        setCurrentBooster(newBooster)
    }

    return (
        <div className="flex flex-col gap-1 h-min p-2 md:p-4 max-w-20 md:max-w-48" >
            <img className="justify-start object-contain h-12 sm:h-32 lg:h-40 hover:cursor-pointer" src={currentBooster.imagePath} alt={currentBooster.name} onClick={handleReRoll}/>
            <p className=" text-xs md:text-base text-center">{currentBooster.name}</p>
        </div>
    )
}

export {BoosterContainer}