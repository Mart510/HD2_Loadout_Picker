import type { stratagem, offensive, defensive, supply } from "./types";

const offensiveStratagems: offensive[] = [
    // Eagle Strikes
    {
        name: 'Eagle Strafing Run',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/33/Eagle_Strafing_Run_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Eagle Airstrike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/7e/Eagle_Airstrike_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'Eagle Cluster Bomb',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/89/Eagle_Cluster_Bomb_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Eagle Napalm Strike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d4/Eagle_Napalm_Airstrike_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'Eagle Smoke Strike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/1/1a/Eagle_Smoke_Strike_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Eagle 110mm Rocket Pods',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e3/Eagle_110MM_Rocket_Pods_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Eagle 500kg Bomb',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/5a/Eagle_500KG_Bomb_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    // Orbital Strikes
    {
        name: 'Orbital Precision Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/47/Orbital_Precision_Strike_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Orbital Airbusrt Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/5d/Orbital_Airburst_Strike_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Orbital 120mm HE Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/6/60/Orbital_120MM_HE_Barrage_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'Orbital 380mm HE Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/f4/Orbital_380MM_HE_Barrage_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Orbital Walking Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8b/Orbital_Walking_Barrage_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Orbital Laser',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/84/Orbital_Laser_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Orbital Railcannon Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/a5/Orbital_Railcannon_Strike_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Orbital Gatling Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e2/Orbital_Gatling_Barrage_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Orbital Gas Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/57/Orbital_Gas_Strike_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Orbital EMS Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d7/Orbital_EMS_Strike_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071501'
    },
    {
        name: 'Orbital Smoke Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e8/Orbital_Smoke_Strike_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
]

const defensiveStratagems: defensive[] = [
    {
        name: 'Telsa Tower',
        priority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2f/A_ARC-3_Tesla_Tower_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Mortar Sentry',
        priority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/1/1d/A_M-12_Mortar_Sentry_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'EMS Mortar Sentry',
        priority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2d/A-M-23_EMS_Mortar_Sentry_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Machine Gun Sentry',
        priority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d2/A_MG-43_Machine_Gun_Sentry_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Gatling Sentry',
        priority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/48/A_G-16_Gatling_Sentry_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'Anti-Personnel Minefield',
        priority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/b/b7/MD-6_Anti-Personnel_Minefield_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Incendiary Mines',
        priority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/c6/MD-I4_Incendiary_Mines_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'Shield Generator Relay',
        priority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/ff/FX-12_Shield_Generator_Relay_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'HMG Emplacement',
        priority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/71/E_MG-101_HMG_Emplacement_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Autocannon Sentry',
        priority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/a9/A_AC-8_Autocannon_Sentry_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Rocket Sentry',
        priority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/00/A_MLS-4X_Rocket_Sentry_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
]

const supplySupportWeapons: supply[] = [
    {
        name: 'Airbusrt Rocket Launcher',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/54/RL-77_Airburst_Rocket_Launcher_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501084709'
    },
    {
        name: 'Autocannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/c6/AC-8_Autocannon_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Expendable Anti-Tank',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/fd/EAT-17_Expendable_Anti-Tank_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Flamethrower',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/cc/FLAM-40_Flamethrower_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'Laser Cannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/31/LAS-98_Laser_Cannon_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Stalwart',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/48/M-105_Stalwart_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Machine Gun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/00/MG-43_Machine_Gun_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'Arc Thrower',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/b/b1/ARC-3_Arc_Thrower_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'Grenade Launcher',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/6/66/GL-21_Grenade_Launcher_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Anti-Materiel Rifle',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/c3/APW-1_Anti-Materiel_Rifle_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Railgun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/05/RS-422_Railgun_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Recoilless Rifle',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/4a/GR-8_Recoilless_Rifle_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'Spear',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/9/97/FAF-14_Spear_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'Quasar Cannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e5/LAS-99_Quasar_Cannon_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Heavy Machine Gun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/9/91/MG-206_Heavy_Machine_Gun_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'MLS-4X Commando',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/34/CommandoIcon.png/revision/latest/scale-to-width-down/45?cb=20240717160748'
    },
]

const supplyBackpacks: supply[] = [
    {
        name: 'Guard Dog',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e5/AX_AR-23_Guard_Dog_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Guard Dog Rover',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/9/96/AX_LAS-5_Guard_Dog_Rover_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Jump Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/9/92/LIFT-850_Jump_Pack_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
    {
        name: 'Supply Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/5e/B-1_Supply_Pack_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Shield Generator Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/3c/SH-32_Shield_Generator_Pack_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071502'
    },
    {
        name: 'Ballistic Shield Backpack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e6/SH-20_Ballistic_Shield_Backpack_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071503'
    },
]

const supplyVehicles: supply[] = [
    {
        name: 'Patriot Exosuit',
        priority: 2,
        subType: 'Vehicles',
        subPriority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/c5/EXO-45_Patriot_Exosuit_Icon.png/revision/latest/scale-to-width-down/45?cb=20240501071537'
    },
    {
        name: 'Emancipator Exosuit',
        priority: 2,
        subType: 'Vehicles',
        subPriority: 3,
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d7/EXO-49_Emancipator_Exosuit_Icon.png/revision/latest/scale-to-width-down/45?cb=20240608182018'
    },

]

const supplyStratagems: supply[] = [...supplySupportWeapons, ...supplyBackpacks, ...supplyVehicles]

const stratagems: stratagem[] = [...offensiveStratagems,  ...defensiveStratagems, ...supplyStratagems]

export { stratagems }