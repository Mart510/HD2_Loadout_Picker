import type { stratagem, offensive, defensive, supply } from "./types";

const offensiveStratagems: offensive[] = [
    // Eagle Strikes
    {
        name: 'Eagle Strafing Run',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Strafing_Run_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3097'
    },
    {
        name: 'Eagle Airstrike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Airstrike_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3092'
    },
    {
        name: 'Eagle Cluster Bomb',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Cluster_Bomb_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3094'
    },
    {
        name: 'Eagle Napalm Strike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Napalm_Airstrike_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3095'
    },
    {
        name: 'Eagle Smoke Strike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Smoke_Strike_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3096'
    },
    {
        name: 'Eagle 110mm Rocket Pods',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_110MM_Rocket_Pods_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3090'
    },
    {
        name: 'Eagle 500kg Bomb',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_500KG_Bomb_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3091'
    },
    // Orbital Strikes
    {
        name: 'Orbital Precision Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Precision_Strike_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3085'
    },
    {
        name: 'Orbital Airburst Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Airburst_Strike_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3080'
    },
    {
        name: 'Orbital 120mm HE Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_120MM_HE_Barrage_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3078'
    },
    {
        name: 'Orbital 380mm HE Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_380MM_HE_Barrage_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3079'
    },
    {
        name: 'Orbital Walking Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Walking_Barrage_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3088'
    },
    {
        name: 'Orbital Laser',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Laser_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3084'
    },
    {
        name: 'Orbital Railcannon Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Railcannon_Strike_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3086'
    },
    {
        name: 'Orbital Gatling Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Gatling_Barrage_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3083'
    },
    {
        name: 'Orbital Gas Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Gas_Strike_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3082'
    },
    {
        name: 'Orbital EMS Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_EMS_Strike_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3081'
    },
    {
        name: 'Orbital Smoke Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Smoke_Strike_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3087'
    },
    {
        name: 'Orbital Napalm Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Orbital_Smoke_Strike_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7410'
    },
]

const defensiveStratagems: defensive[] = [
    {
        name: 'Telsa Tower',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_ARC-3_Tesla_Tower_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2998'
    },
    {
        name: 'Mortar Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_M-12_Mortar_Sentry_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3077'
    },
    {
        name: 'EMS Mortar Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A-M-23_EMS_Mortar_Sentry_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3719'
    },
    {
        name: 'Machine Gun Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_MG-43_Machine_Gun_Sentry_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2988'
    },
    {
        name: 'Gatling Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_G-16_Gatling_Sentry_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2981'
    },
    {
        name: 'Anti-Personnel Minefield',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/MD-6_Anti-Personnel_Minefield_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2973'
    },
    {
        name: 'Incendiary Minefield',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/MD-I4_Incendiary_Mines_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3501'
    },
    {
        name: 'Anti-Tank Mines',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/MD-I4_Incendiary_Mines_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=5881'
    },
    {
        name: 'Gas Mines',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/MD-I4_Incendiary_Mines_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=8797'
    },
    {
        name: 'Shield Generator Relay',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/FX-12_Shield_Generator_Relay_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2994'
    },
    {
        name: 'HMG Emplacement',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/E_MG-101_HMG_Emplacement_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2985'
    },
    {
        name: 'Anit-Tank Emplacement',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/E_MG-101_HMG_Emplacement_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=9081'
    },
    {
        name: 'Autocannon Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_AC-8_Autocannon_Sentry_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2975'
    },
    {
        name: 'Rocket Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_MLS-4X_Rocket_Sentry_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2992'
    },
    {
        name: 'Rocket Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/A_MLS-4X_Rocket_Sentry_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=9080'
    },
]

const supplySupportWeapons: supply[] = [
    {
        name: 'Airburst Rocket Launcher',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/RL-77_Airburst_Rocket_Launcher_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=5880'
    },
    {
        name: 'Autocannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/AC-8_Autocannon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2976'
    },
    {
        name: 'Expendable Anti-Tank',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/EAT-17_Expendable_Anti-Tank_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2979'
    },
    {
        name: 'Flamethrower',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/FLAM-40_Flamethrower_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2980'
    },
    {
        name: 'Laser Cannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/LAS-98_Laser_Cannon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2987'
    },
    {
        name: 'Stalwart',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/M-105_Stalwart_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2996'
    },
    {
        name: 'Machine Gun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/MG-43_Machine_Gun_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2989'
    },
    {
        name: 'Arc Thrower',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/ARC-3_Arc_Thrower_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2974'
    },
    {
        name: 'Grenade Launcher',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/GL-21_Grenade_Launcher_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2982'
    },
    {
        name: 'Anti-Materiel Rifle',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/APW-1_Anti-Materiel_Rifle_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2972'
    },
    {
        name: 'Railgun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/RS-422_Railgun_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2990'
    },
    {
        name: 'Recoilless Rifle',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/GR-8_Recoilless_Rifle_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2991'
    },
    {
        name: 'Spear',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/FAF-14_Spear_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2990'
    },
    {
        name: 'Quasar Cannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/LAS-99_Quasar_Cannon_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2974'
    },
    {
        name: 'Heavy Machine Gun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/MG-206_Heavy_Machine_Gun_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=4167'
    },
    {
        name: 'Commando',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/CommandoIcon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7113'
    },    {
        name: 'TX-41 Sterilizer',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Sterilizer_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7448'
    },
]

const supplyBackpacks: supply[] = [
    {
        name: 'Guard Dog',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/AX_AR-23_Guard_Dog_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2983'
    },
    {
        name: 'Guard Dog: Rover',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/AX_LAS-5_Guard_Dog_Rover_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2984'
    },
    {
        name: 'Guard Dog: Dog Breath',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/Guard_Dog_Dog_Breath_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7454'
    },
    {
        name: 'Jump Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/LIFT-850_Jump_Pack_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2986'
    },
    {
        name: 'Supply Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/B-1_Supply_Pack_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2997'
    },
    {
        name: 'Shield Generator Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/SH-32_Shield_Generator_Pack_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2993'
    },
    {
        name: 'Ballistic Shield Backpack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/SH-20_Ballistic_Shield_Backpack_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2977'
    },
    {
        name: 'Directional Shield',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/offensive/eagle/SH-20_Ballistic_Shield_Backpack_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=9069'
    },
]

const supplyVehicles: supply[] = [
    {
        name: 'Patriot Exosuit',
        priority: 2,
        subType: 'Vehicles',
        subPriority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/EXO-45_Patriot_Exosuit_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3099'
    },
    {
        name: 'Emancipator Exosuit',
        priority: 2,
        subType: 'Vehicles',
        subPriority: 3,
        imagePath: '/assets/images/stratagems/offensive/eagle/EXO-49_Emancipator_Exosuit_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=6622'
    },

]

const supplyStratagems: supply[] = [...supplySupportWeapons, ...supplyBackpacks, ...supplyVehicles]

const stratagems: stratagem[] = [...offensiveStratagems,  ...defensiveStratagems, ...supplyStratagems]

export { stratagems }