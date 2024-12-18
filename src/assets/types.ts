interface booster {
    name: string;
    imagePath: string;
    effect: string;
    attributeLink: string;
}

interface grenade {
    name: string;
    imagePath: string;
    attributeLink: string;
}

interface weaponPrimary {
        name: string;
        type: 'Assault Rifles' | 'Submachine Guns' | 'Shotguns' |'Marksman Rifles' | 'Energy Weapons' | 'Explosive' | 'Special';
        imagePath: string;
        attributeLink: string;
    }

interface weaponSecondary {
    name: string;
    type: 'Ballistic' | 'Special' | 'Melee';
    imagePath: string;
    attributeLink: string;
}

interface weaponSupport {
    name: string;
    type: 'Machine Guns' | 'Rifles' | 'Launchers' | 'Special';
    imagePath: string;
    attributeLink: string;
}

interface offensive {
    name: string;
    priority: 1
    subType: 'Eagle' | 'Orbital Strike'
    subPriority: 1 | 2;
    imagePath: string;
    attributeLink: string;
}

interface supply {
    name: string;
    priority: 2;
    subType: 'Support Weapons' | 'Backpacks' | 'Vehicles'
    subPriority: 1 | 2 | 3;
    imagePath: string;
    attributeLink: string;
}

interface defensive {
    name: string;
    priority: 3;
    imagePath: string;
    attributeLink: string;
}

type stratagem = offensive | supply | defensive

export type {
    booster,
    grenade,
    weaponPrimary,
    weaponSecondary,
    weaponSupport,
    stratagem,
    offensive,
    supply,
    defensive
}