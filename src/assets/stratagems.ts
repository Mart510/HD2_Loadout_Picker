import type { stratagem, offensive, defensive, supply } from "./types";

const offensiveStratagems: offensive[] = [
    // Eagle Strikes
    {
        name: 'Eagle Strafing Run',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Strafing_Run_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Eagle Airstrike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Airstrike_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Eagle Cluster Bomb',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Cluster_Bomb_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Eagle Napalm Strike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Napalm_Airstrike_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Eagle Smoke Strike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Smoke_Strike_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Eagle 110mm Rocket Pods',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_110MM_Rocket_Pods_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Eagle 500kg Bomb',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_500KG_Bomb_Icon.webp',
        attributeLink: ''
    },
    // Orbital Strikes
    {
        name: 'Orbital Precision Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Precision_Strike_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Orbital Airbusrt Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Airburst_Strike_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Orbital 120mm HE Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_120MM_HE_Barrage_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Orbital 380mm HE Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_380MM_HE_Barrage_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Orbital Walking Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Walking_Barrage_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Orbital Laser',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Laser_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Orbital Railcannon Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Railcannon_Strike_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Orbital Gatling Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Gatling_Barrage_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Orbital Gas Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Gas_Strike_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Orbital EMS Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_EMS_Strike_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Orbital Smoke Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Smoke_Strike_Icon.webp',
        attributeLink: ''
    },
]

const defensiveStratagems: defensive[] = [
    {
        name: 'Telsa Tower',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_ARC-3_Tesla_Tower_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Mortar Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_M-12_Mortar_Sentry_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'EMS Mortar Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A-M-23_EMS_Mortar_Sentry_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Machine Gun Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_MG-43_Machine_Gun_Sentry_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Gatling Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_G-16_Gatling_Sentry_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Anti-Personnel Minefield',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/MD-6_Anti-Personnel_Minefield_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Incendiary Mines',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/MD-I4_Incendiary_Mines_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Shield Generator Relay',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/FX-12_Shield_Generator_Relay_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'HMG Emplacement',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/E_MG-101_HMG_Emplacement_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Autocannon Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_AC-8_Autocannon_Sentry_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Rocket Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_MLS-4X_Rocket_Sentry_Icon.webp',
        attributeLink: ''
    },
]

const supplySupportWeapons: supply[] = [
    {
        name: 'Airburst Rocket Launcher',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/RL-77_Airburst_Rocket_Launcher_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Autocannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/AC-8_Autocannon_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Expendable Anti-Tank',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/EAT-17_Expendable_Anti-Tank_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Flamethrower',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/FLAM-40_Flamethrower_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Laser Cannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/LAS-98_Laser_Cannon_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Stalwart',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/M-105_Stalwart_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Machine Gun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/MG-43_Machine_Gun_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Arc Thrower',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/ARC-3_Arc_Thrower_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Grenade Launcher',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/GL-21_Grenade_Launcher_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Anti-Materiel Rifle',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/APW-1_Anti-Materiel_Rifle_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Railgun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/RS-422_Railgun_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Recoilless Rifle',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/GR-8_Recoilless_Rifle_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Spear',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/FAF-14_Spear_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Quasar Cannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/LAS-99_Quasar_Cannon_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Heavy Machine Gun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/MG-206_Heavy_Machine_Gun_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'MLS-4X Commando',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/CommandoIcon.webp',
        attributeLink: ''
    },    {
        name: 'TX-41 Sterilizer',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Sterilizer_Stratagem_Icon.webp',
        attributeLink: ''
    },
]

const supplyBackpacks: supply[] = [
    {
        name: 'Guard Dog',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/AX_AR-23_Guard_Dog_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Guard Dog: Rover',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/AX_LAS-5_Guard_Dog_Rover_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Guard Dog: Dog Breath',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/Guard_Dog_Dog_Breath_Stratagem_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Jump Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/LIFT-850_Jump_Pack_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Supply Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/B-1_Supply_Pack_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Shield Generator Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/SH-32_Shield_Generator_Pack_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Ballistic Shield Backpack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/SH-20_Ballistic_Shield_Backpack_Icon.webp',
        attributeLink: ''
    },
]

const supplyVehicles: supply[] = [
    {
        name: 'Patriot Exosuit',
        priority: 2,
        subType: 'Vehicles',
        subPriority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/EXO-45_Patriot_Exosuit_Icon.webp',
        attributeLink: ''
    },
    {
        name: 'Emancipator Exosuit',
        priority: 2,
        subType: 'Vehicles',
        subPriority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/EXO-49_Emancipator_Exosuit_Icon.webp',
        attributeLink: ''
    },

]

const supplyStratagems: supply[] = [...supplySupportWeapons, ...supplyBackpacks, ...supplyVehicles]

const stratagems: stratagem[] = [...offensiveStratagems,  ...defensiveStratagems, ...supplyStratagems]

export { stratagems }