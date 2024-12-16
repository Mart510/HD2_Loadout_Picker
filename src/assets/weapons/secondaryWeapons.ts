import type { weaponSecondary } from "../types";

const ballistic: weaponSecondary[] = [
    {
        name: 'Peacemaker',
        type: 'Ballistic',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/9/92/P2_Peacemaker.png/revision/latest/scale-to-width-down/249?cb=20240429065938'
    },
    {
        name: 'Redeemer',
        type: 'Ballistic',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d6/P-19_Redeemer_no_mag.png/revision/latest/scale-to-width-down/249?cb=20240429065900'
    },
    {
        name: 'Verdict',
        type: 'Ballistic',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/37/Verdict_render.webp/revision/latest/scale-to-width-down/275?cb=20240518165117'
    },
    {
        name: 'Senator',
        type: 'Ballistic',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/6/6a/P-4_Senator.png/revision/latest/scale-to-width-down/249?cb=20240429065901'
    },
    {
        name: 'Bushwhacker',
        type: 'Ballistic',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/ec/SG-22_Bushwhacker_WB.png/revision/latest/scale-to-width-down/275?cb=20240614235841'
    }
]

const special: weaponSecondary[] = [
    {
        name: 'Grenade Pistol',
        type: 'Special',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/f5/GP-31_Grenade_Pistol.png/revision/latest/scale-to-width-down/249?cb=20240429065917',
    },
    {
        name: 'Crisper',
        type: 'Special',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8c/P-72_Crisper_.png/revision/latest/scale-to-width-down/275?cb=20240817035135',
    },
    {
        name: 'Stim Pistol',
        type: 'Special',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/ea/P-11_Stim_Pistol.png/revision/latest/scale-to-width-down/205?cb=20241215034034',
    },
    {
        name: 'Dagger',
        type: 'Special',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2c/LAS-7_Dagger.png/revision/latest/scale-to-width-down/249?cb=20240429064227',
    },
    {
        name: 'Loaylist',
        type: 'Special',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e8/PLAS-15_Loyalist.png/revision/latest/scale-to-width-down/270?cb=20241215033206',
    },
]

const melee: weaponSecondary[] = [
    {
        name: 'Stun Lance',
        type: 'Melee',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/1/10/CQC-19_Stun_Lance_HD.png/revision/latest/scale-to-width-down/130?cb=20241215034442'
    },
    {
        name: 'Stun Baton',
        type: 'Melee',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/32/CQC-30_Stun_Baton_HD.png/revision/latest/scale-to-width-down/160?cb=20241215025858'
    },
]

export { ballistic, special, melee }