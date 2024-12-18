// import type

import { weaponPrimary, weaponSecondary } from "../assets/types";

const Weapon = (weaponObj: weaponPrimary | weaponSecondary): JSX.Element => {
    return (
        <div>
            <img src={weaponObj.imagePath} alt={weaponObj.name} />
            <p>{weaponObj.name}</p>
        </div>
    )
}

export default Weapon