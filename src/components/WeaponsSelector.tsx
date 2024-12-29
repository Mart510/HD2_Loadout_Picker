import { WeaponContainer } from "./Weapon";

import { primaryWeapons } from "../assets/weapons/primaryWeapons";
import { secondaryWeapons } from "../assets/weapons/secondaryWeapons";
import { grenades } from "../assets/weapons/grenades";

const WeaponsSelector = (): JSX.Element => {
    return (
        <div className="flex flex-row gap-6 justify-evenly h-min border-2 m-6 rounded-md w-full">
            {/* Primary Weapon */}
            <WeaponContainer weaponArray={primaryWeapons} cardTitle="Primary" />
            {/* Secondary Weapon */}
            <WeaponContainer weaponArray={secondaryWeapons} cardTitle="Secondary"/>
            {/* Grenade option */}
            <WeaponContainer weaponArray={grenades} cardTitle="Grenade"/>
        </div>
    )
}

export {WeaponsSelector}