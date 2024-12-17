import type { weaponSecondary } from "../types";

const ballistic: weaponSecondary[] = [
    {
        name: 'Peacemaker',
        type: 'Ballistic',
        imagePath: 'src/assets/weapons/images/secondary/P2_Peacemaker.webp'
    },
    {
        name: 'Redeemer',
        type: 'Ballistic',
        imagePath: 'src/assets/weapons/images/secondary/P-19_Redeemer_no_mag.webp'
    },
    {
        name: 'Verdict',
        type: 'Ballistic',
        imagePath: 'src/assets/weapons/images/secondary/Verdict_render.webp'
    },
    {
        name: 'Senator',
        type: 'Ballistic',
        imagePath: 'src/assets/weapons/images/secondary/P-4_Senator.webp'
    },
    {
        name: 'Bushwhacker',
        type: 'Ballistic',
        imagePath: 'src/assets/weapons/images/secondary/SG-22_Bushwhacker_WB.webp'
    }
]

const special: weaponSecondary[] = [
    {
        name: 'Grenade Pistol',
        type: 'Special',
        imagePath: 'src/assets/weapons/images/secondary/GP-31_Grenade_Pistol.webp',
    },
    {
        name: 'Crisper',
        type: 'Special',
        imagePath: 'src/assets/weapons/images/secondary/P-72_Crisper_.webp',
    },
    {
        name: 'Stim Pistol',
        type: 'Special',
        imagePath: 'src/assets/weapons/images/secondary/P-11_Stim_Pistol.webp',
    },
    {
        name: 'Dagger',
        type: 'Special',
        imagePath: 'src/assets/weapons/images/secondary/LAS-7_Dagger.webp',
    },
    {
        name: 'Loaylist',
        type: 'Special',
        imagePath: 'src/assets/weapons/images/secondary/PLAS-15_Loyalist.webp',
    },
]

const melee: weaponSecondary[] = [
    {
        name: 'Stun Lance',
        type: 'Melee',
        imagePath: 'src/assets/weapons/images/secondary/CQC-19_Stun_Lance_HD.webp'
    },
    {
        name: 'Stun Baton',
        type: 'Melee',
        imagePath: 'src/assets/weapons/images/secondary/CQC-30_Stun_Baton_HD.webp'
    },
]

export { ballistic, special, melee }