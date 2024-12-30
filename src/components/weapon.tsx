// import type
import { grenade, weaponPrimary, weaponSecondary } from "../assets/types";
import { useState } from "react";

type WeaponProps = {
    weaponArray: (weaponPrimary[] | weaponSecondary[] | grenade[])
    cardTitle: string
}

const WeaponContainer = ({weaponArray, cardTitle}: WeaponProps): JSX.Element => {

    // state for current weapon
    const [currentWeapon, setCurrentWeapon] = useState(() =>
        weaponArray[Math.floor(Math.random() * weaponArray.length)] // intial value for currentWeapon
    );

    // re-roll the weapon
    const handleReRoll = (): void => {
        const currentWeaponName = currentWeapon.name;

        if (!currentWeaponName) {
            return
        };

        const arrayWithoutCurrentWeapon = weaponArray.filter((weapon) => weapon.name !== currentWeaponName);
        
        const newWeapon = arrayWithoutCurrentWeapon[Math.floor(Math.random() * arrayWithoutCurrentWeapon.length)]; // get a new one from the array

        setCurrentWeapon(newWeapon); // update the state
    };



    return (
        <div className="flex flex-col gap-1 h-min p-2 md:p-4 max-w-24 md:max-w-48 lg:max-w-96 font-plexMono">
            <h3 className="text-base md:text-xl">{cardTitle}</h3>
            <img className="justify-start object-contain h-12 sm:h-32 lg:h-40 hover:cursor-pointer" src={currentWeapon.imagePath} alt={currentWeapon.name} onClick={handleReRoll}/>
            <p className=" text-xs md:text-base text-center">{currentWeapon.name}</p>
        </div>
    )
}

export {WeaponContainer}