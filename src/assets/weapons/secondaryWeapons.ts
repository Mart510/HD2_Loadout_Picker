import type { weaponSecondary } from "../types"

const ballistic: weaponSecondary[] = [
    {
        name: 'Peacemaker',
        type: 'Ballistic',
        imagePath: '/assets/images/secondary/P2_Peacemaker.webp',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2598'
    },
    {
        name: 'Redeemer',
        type: 'Ballistic',
        imagePath: '/assets/images/secondary/P-19_Redeemer_no_mag.webp',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2600'
    },
    {
        name: 'Verdict',
        type: 'Ballistic',
        imagePath: '/assets/images/secondary/Verdict_render.webp',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=6286'
    },
    {
        name: 'Senator',
        type: 'Ballistic',
        imagePath: '/assets/images/secondary/P-4_Senator.webp',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2599'
    }
]

const special: weaponSecondary[] = [
    {
        name: 'Grenade Pistol',
        type: 'Special',
        imagePath: '/assets/images/secondary/GP-31_Grenade_Pistol.webp',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=5467'
    },
    {
        name: 'Crisper',
        type: 'Special',
        imagePath: '/assets/images/secondary/P-72_Crisper_.webp',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7259'
    },
    {
        name: 'Stim Pistol',
        type: 'Special',
        imagePath: '/assets/images/secondary/P-11_Stim_Pistol.webp',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7489'
    },
    {
        name: 'Dagger',
        type: 'Special',
        imagePath: '/assets/images/secondary/LAS-7_Dagger.webp',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3500'
    },
    {
        name: 'Loyalist',
        type: 'Special',
        imagePath: '/assets/images/secondary/PLAS-15_Loyalist.webp',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=8551'
    },
    {
        name: 'Bushwhacker',
        type: 'Ballistic',
        imagePath: '/assets/images/secondary/SG-22_Bushwhacker_WB.webp',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=6767'
    }
]

const melee: weaponSecondary[] = [
    {
        name: 'Stun Lance',
        type: 'Melee',
        imagePath: '/assets/images/secondary/CQC-19_Stun_Lance_HD.webp',
        attributeLink: ''
    },
    {
        name: 'Stun Baton',
        type: 'Melee',
        imagePath: '/assets/images/secondary/CQC-30_Stun_Baton_HD.webp',
        attributeLink: ''
    },
]

export { ballistic, special, melee }