import type { weaponSecondary } from "../types"

const ballistic: weaponSecondary[] = [
    {
        name: 'Peacemaker',
        type: 'Ballistic',
        imagePath: '/assets/images/secondary/P-2_Peacemaker_Weapon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2598'
    },
    {
        name: 'Redeemer',
        type: 'Ballistic',
        imagePath: '/assets/images/secondary/P-19_Redeemer_Weapon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2600'
    },
    {
        name: 'Verdict',
        type: 'Ballistic',
        imagePath: '/assets/images/secondary/P-113_Verdict_Weapon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=6286'
    },
    {
        name: 'Senator',
        type: 'Ballistic',
        imagePath: '/assets/images/secondary/P-4_Senator_Weapon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2599'
    }
]

const special: weaponSecondary[] = [
    {
        name: 'Grenade Pistol',
        type: 'Special',
        imagePath: '/assets/images/secondary/GP-31_Grenade_Pistol_Weapon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=5467'
    },
    {
        name: 'Crisper',
        type: 'Special',
        imagePath: '/assets/images/secondary/P-72_Crisper_Weapon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7259'
    },
    {
        name: 'Stim Pistol',
        type: 'Special',
        imagePath: '/assets/images/secondary/P-11_Stim_Pistol_Weapon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7489'
    },
    {
        name: 'Dagger',
        type: 'Special',
        imagePath: '/assets/images/secondary/LAS-7_Dagger_Weapon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3500'
    },
    {
        name: 'Loyalist',
        type: 'Special',
        imagePath: '/assets/images/secondary/PLAS-15_Loyalist_Weaponry.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=8551'
    },
    {
        name: 'Bushwhacker',
        type: 'Ballistic',
        imagePath: '/assets/images/secondary/SG-22_Bushwhacker_Weapon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=6767'
    }
]

const melee: weaponSecondary[] = [
    {
        name: 'Stun Lance',
        type: 'Melee',
        imagePath: '/assets/images/secondary/CQC-19_Stun_Lance_Secondary_Weaponry.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=9187'
    },
    {
        name: 'Stun Baton',
        type: 'Melee',
        imagePath: '/assets/images/secondary/CQC-30_Stun_Baton_Secondary_Weaponry.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=9185'
    },
]

const secondaryWeapons: weaponSecondary[] = [
    ...ballistic,
    ...special,
    ...melee
]

export { secondaryWeapons}