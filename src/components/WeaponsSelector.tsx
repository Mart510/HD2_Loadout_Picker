import { weaponPrimary, weaponSecondary, grenade } from "../assets/types";
import Weapon from "./weapon";

import { primaryWeapons } from "../assets/weapons/primaryWeapons";
import { secondaryWeapons } from "../assets/weapons/secondaryWeapons";
import { grenades } from "../assets/weapons/grenades";

const WeaponsSelector = (): JSX.Element => {
    return (
        <div className="flex flex-row gap-6 h-24 md:h-44">
        {/* Primary Weapon */}
        <Weapon weaponArray={primaryWeapons} />
        {/* Secondary Weapon */}
        <Weapon weaponArray={secondaryWeapons}/>
        {/* Grenade option */}
        <Weapon weaponArray={grenades}/>
        </div>
    )
}

export {WeaponsSelector}