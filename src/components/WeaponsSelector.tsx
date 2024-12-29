import Weapon from "./weapon";

import { primaryWeapons } from "../assets/weapons/primaryWeapons";
import { secondaryWeapons } from "../assets/weapons/secondaryWeapons";
import { grenades } from "../assets/weapons/grenades";

const WeaponsSelector = (): JSX.Element => {
    return (
        <div className="flex flex-row gap-6 justify-evenly h-min border-2 m-6 rounded-md w-full">
            {/* Primary Weapon */}
            <Weapon weaponArray={primaryWeapons} cardTitle="Primary" />
            {/* Secondary Weapon */}
            <Weapon weaponArray={secondaryWeapons} cardTitle="Secondary"/>
            {/* Grenade option */}
            <Weapon weaponArray={grenades} cardTitle="Grenade"/>
        </div>
    )
}

export {WeaponsSelector}