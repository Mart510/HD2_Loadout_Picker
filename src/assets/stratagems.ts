import type { stratagem, offensive, defensive, supply } from "./types";

const offensiveStratagems: offensive[] = [
    // Eagle Strikes
    {
        name: 'Eagle Strafing Run',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Strafing_Run_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3097'
    },
    {
        name: 'Eagle Airstrike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Airstrike_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3092'
    },
    {
        name: 'Eagle Cluster Bomb',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Cluster_Bomb_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3094'
    },
    {
        name: 'Eagle Napalm Strike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Napalm_Airstrike_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3095'
    },
    {
        name: 'Eagle Smoke Strike',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_Smoke_Strike_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3096'
    },
    {
        name: 'Eagle 110mm Rocket Pods',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_110mm_Rocket_Pods_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3090'
    },
    {
        name: 'Eagle 500kg Bomb',
        priority: 1,
        subType: 'Eagle',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/eagle/Eagle_500kg_Bomb_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3091'
    },
    // Orbital Strikes
    {
        name: 'Orbital Precision Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_Precision_Strike_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3085'
    },
    {
        name: 'Orbital Airburst Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_Airburst_Strike_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3080'
    },
    {
        name: 'Orbital 120mm HE Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_120mm_HE_Barrage_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3078'
    },
    {
        name: 'Orbital 380mm HE Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_380mm_HE_Barrage_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3079'
    },
    {
        name: 'Orbital Walking Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_Walking_Barrage_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3088'
    },
    {
        name: 'Orbital Laser',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_Laser_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3084'
    },
    {
        name: 'Orbital Railcannon Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_Railcannon_Strike_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3086'
    },
    {
        name: 'Orbital Gatling Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_Gatling_Barrage_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3083'
    },
    {
        name: 'Orbital Gas Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_Gas_Strike_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3082'
    },
    {
        name: 'Orbital EMS Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_EMS_Strike_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3081'
    },
    {
        name: 'Orbital Smoke Strike',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_Smoke_Strike_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3087'
    },
    {
        name: 'Orbital Napalm Barrage',
        priority: 1,
        subType: 'Orbital Strike',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/offensive/orbital/Orbital_Napalm_Barrage_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7410'
    },
]

const defensiveStratagems: defensive[] = [
    {
        name: 'Telsa Tower',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/Tesla_Tower_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2998'
    },
    {
        name: 'Mortar Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/Mortar_Sentry_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3077'
    },
    {
        name: 'EMS Mortar Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/AM-23_EMS_Mortar_Sentry_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3719'
    },
    {
        name: 'Machine Gun Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/Machine_Gun_Sentry_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2988'
    },
    {
        name: 'Gatling Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/Gatling_Sentry_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2981'
    },
    {
        name: 'Anti-Personnel Minefield',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/Anti-Personnel_Minefield_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2973'
    },
    {
        name: 'Incendiary Minefield',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/Incendiary_Minefield_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3501'
    },
    {
        name: 'Anti-Tank Mines',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/MD-17_Anti-Tank_Mines_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=5881'
    },
    {
        name: 'Gas Mines',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/Gas_Minefield_Stratagem_Icon.png.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=8797'
    },
    {
        name: 'Shield Generator Relay',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/Shield_Generator_Relay_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2994'
    },
    {
        name: 'HMG Emplacement',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/HMG_Emplacement_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2985'
    },
    {
        name: 'Anit-Tank Emplacement',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/E_AT-12_Anti-Tank_Emplacement_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=9081'
    },
    {
        name: 'Autocannon Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/Autocannon_Sentry_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2975'
    },
    {
        name: 'Rocket Sentry',
        priority: 3,
        imagePath: '/assets/images/stratagems/defensive/Rocket_Sentry_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2992'
    },
]

const supplySupportWeapons: supply[] = [
    {
        name: 'Airburst Rocket Launcher',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/RL-77_Airburst_Rocket_Launcher_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=5880'
    },
    {
        name: 'Autocannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Autocannon_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2976'
    },
    {
        name: 'Expendable Anti-Tank',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Expendable_Anti-Tank_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2979'
    },
    {
        name: 'Flamethrower',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Flamethrower_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2980'
    },
    {
        name: 'Laser Cannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Laser_Cannon_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2987'
    },
    {
        name: 'Stalwart',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Stalwart_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2996'
    },
    {
        name: 'Machine Gun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Machine_Gun_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2989'
    },
    {
        name: 'Arc Thrower',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Arc_Thrower_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2974'
    },
    {
        name: 'Grenade Launcher',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Grenade_Launcher_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2982'
    },
    {
        name: 'Anti-Materiel Rifle',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Anti-Materiel_Rifle_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2972'
    },
    {
        name: 'Railgun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Railgun_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2990'
    },
    {
        name: 'Recoilless Rifle',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Recoilless_Rifle_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2991'
    },
    {
        name: 'Spear',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Spear_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2990'
    },
    {
        name: 'Quasar Cannon',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Quasar_Cannon_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2974'
    },
    {
        name: 'Heavy Machine Gun',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Heavy_Machine_Gun_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=4167'
    },
    {
        name: 'Commando',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Commando_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7113'
    },
    {
        name: 'TX-41 Sterilizer',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/Sterilizer_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7448'
    },
    {
        name: 'W.A.S.P Launcher',
        priority: 2,
        subType: 'Support Weapons',
        subPriority: 1,
        imagePath: '/assets/images/stratagems/support/weapons/StA-X3_W.A.S.P._Launcher_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=9229'
    },
]

const supplyBackpacks: supply[] = [
    {
        name: 'Guard Dog',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/support/backpacks/Guard_Dog_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2983'
    },
    {
        name: 'Guard Dog: Rover',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/support/backpacks/Guard_Dog_Rover_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2984'
    },
    {
        name: 'Guard Dog: Dog Breath',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/support/backpacks/Guard_Dog_Dog_Breath_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=7454'
    },
    {
        name: 'Jump Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/support/backpacks/Jump_Pack_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2986'
    },
    {
        name: 'Supply Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/support/backpacks/Supply_Pack_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2997'
    },
    {
        name: 'Shield Generator Pack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/support/backpacks/Shield_Generator_Pack_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2993'
    },
    {
        name: 'Ballistic Shield Backpack',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/support/backpacks/Ballistic_Shield_Backpack_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=2977'
    },
    {
        name: 'Directional Shield',
        priority: 2,
        subType: 'Backpacks',
        subPriority: 2,
        imagePath: '/assets/images/stratagems/support/backpacks/SH-51_Directional_Shield_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=9069'
    },
]

const supplyVehicles: supply[] = [
    {
        name: 'Patriot Exosuit',
        priority: 2,
        subType: 'Vehicles',
        subPriority: 3,
        imagePath: '/assets/images/stratagems/support/vehicles/EXO-45_Patriot_Exosuit_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=3099'
    },
    {
        name: 'Emancipator Exosuit',
        priority: 2,
        subType: 'Vehicles',
        subPriority: 3,
        imagePath: '/assets/images/stratagems/support/vehicles/EXO-49_Emancipator_Exosuit_Stratagem_Icon.png',
        attributeLink: 'https://helldivers.wiki.gg/index.php?curid=6622'
    },
    {
        name: 'M-102 Fast Recon Vehicle',
        priority: 2,
        subType: 'Vehicles',
        subPriority: 3,
        imagePath: '/assets/images/stratagems/support/vehicles/M-102_Fast_Recon_Vehicle_Stratagem_Icon.png',
        attributeLink: 'hhttps://helldivers.wiki.gg/index.php?curid=9079'
    },
]

const supplyStratagems: supply[] = [...supplySupportWeapons, ...supplyBackpacks, ...supplyVehicles]

const stratagems: stratagem[] = [...offensiveStratagems,  ...defensiveStratagems, ...supplyStratagems]

export { stratagems }