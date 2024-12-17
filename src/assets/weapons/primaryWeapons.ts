import type { weaponPrimary } from "../types"

const assaultRifles: weaponPrimary[] = [
    {
        name: 'Liberator',  
        type: 'Assault Rifles',
        imagePath:'./src/assets/weapons/images/AR_23_Liberator.webp',
    },
    {
        name: 'Liberator Penetrator',  
        type: 'Assault Rifles',
        imagePath: './src/assets/weapons/images/primary/AR-23P_Liberator_Penetrator.webp',
    }, 
    {
        name: 'Liberator Concussive',  
        type: 'Assault Rifles',
        imagePath: './src/assets/weapons/images/primary/AR-23C_Liberator_Concussive.webp',
    }  ,
    {
        name: 'Adjudicator',
        type: 'Assault Rifles',
        imagePath: './src/assets/weapons/images/primary/BR-14_Adjucator.webp',
    }
]

const submachineGuns: weaponPrimary[] = [
    {
        name: 'Knight',
        type: 'Submachine Guns',
        imagePath: './src/assets/weapons/images/primary/MP-98_Knight_29.webp',
    },
    {
        name: 'Defender',
        type: 'Submachine Guns',
        imagePath: './src/assets/weapons/images/primary/SMG-37_Defender.webp',
    },
    {
        name: 'Pummeler',
        type: 'Submachine Guns',
        imagePath: './src/assets/weapons/images/primary/Pummelertemp.webp',
    }
]

const shotguns: weaponPrimary[] = [
    {
        name: 'Punisher',
        type: 'Shotguns',
        imagePath: './src/assets/weapons/images/primary/SG-8_Punisher_29.webp',
    },
    {
        name: 'Slugger',
        type: 'Shotguns',
        imagePath: './src/assets/weapons/images/primary/SG-8S_Slugger.webp',
    },
    {
        name: 'Breaker',
        type: 'Shotguns',
        imagePath: './src/assets/weapons/images/primary/SG-225_Breaker_29.webp',
    },
    {
        name: 'Breaker Incendiary',
        type: 'Shotguns',
        imagePath: './src/assets/weapons/images/primary/SG-225IE_Breaker_Incendiary_29.webp',
    },
    {
        name: 'Breaker Spray & Pray',
        type: 'Shotguns',
        imagePath: './src/assets/weapons/images/primary/SG-225SP_Breaker_Spray28Helldivers_2%29.webp',
    }
]

const marksmanRifles: weaponPrimary[] = [
    {
        name: 'Diligence',
        type: 'Marksman Rifles',
        imagePath: './src/assets/weapons/images/primary/R-63_Diligence_29.webp',
    },
    {
        name: 'Diligence Counter Sniper',
        type: 'Marksman Rifles',
        imagePath: './src/assets/weapons/images/primary/R-63CS_Diligence_Counter_Sniper_29.webp',
    }
]

const energyWeapons: weaponPrimary[] = [
    {
        name: 'Scythe',
        type: 'Energy Weapons',
        imagePath: './src/assets/weapons/images/primary/LAS-5_Scythe_29_II.webp',
    },
    {
        name: 'Sickle',
        type: 'Energy Weapons',
        imagePath: './src/assets/weapons/images/primary/LAS-16_Sickle_29_II.webp',
    },
    {
        name: 'Scorcher',
        type: 'Energy Weapons',
        imagePath: './src/assets/weapons/images/primary/PLAS-1_Scorcher_29_II.webp',
    },
    {
        name: 'Punisher Plasma',
        type: 'Energy Weapons',
        imagePath: './src/assets/weapons/images/primary/SG-8P_Punisher_Plasma_29.webp',
    },
    {
        name: 'Blitzer',
        type: 'Energy Weapons',
        imagePath: './src/assets/weapons/images/primary/ARC-12_Blitzer_Render.webp',
    }
]

const explosive: weaponPrimary[] = [
    {
        name: 'Dominator',
        type: 'Explosive',
        imagePath: './src/assets/weapons/images/primary/JAR-5_Dominator.webp',
    },
    {
        name: 'Eruptor',
        type: 'Explosive',
        imagePath: './src/assets/weapons/images/primary/R-36_Eruptor_Render.webp',
    },
    {
        name: 'Exploding Crossbow',
        type: 'Explosive',
        imagePath: './src/assets/weapons/images/primary/CB-9_Crossbow.webp',
    }
]

const primaryWeapons: weaponPrimary[] = [...assaultRifles, ...submachineGuns, ...shotguns, ...marksmanRifles, ...energyWeapons, ...explosive]

export {primaryWeapons}