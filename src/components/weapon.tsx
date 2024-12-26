// import type
import { grenade, weaponPrimary, weaponSecondary } from "../assets/types";
import { useState } from "react";

type WeaponProps = {
    weaponArray: (weaponPrimary[] | weaponSecondary[] | grenade[])
    cardTitle: string
}

const Weapon = ({weaponArray, cardTitle}: WeaponProps): JSX.Element => {

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
        <div className="flex flex-col justify-between gap-1 h-full p-2 md:p-4" >
            <h3 className="text-base md:text-xl xl:text-4xl">{cardTitle}</h3>
            <img className="justify-start object-contain h-4/6 hover:cursor-pointer" src={currentWeapon.imagePath} alt={currentWeapon.name} onClick={handleReRoll}/>
            <p className=" text-xs md:text-base xl:text-2xl text-center">{currentWeapon.name}</p>
        </div>
    )
}

export default Weapon