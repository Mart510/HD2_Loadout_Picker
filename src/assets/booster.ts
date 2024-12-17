import type { booster } from "./types";

const boosters: booster[] = [
    {
        name: 'Hellpod Space Optimization',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/dd/Hellpod_Space_Optimization_Booster.png/revision/latest/scale-to-width-down/100?cb=20240228174850',
        effect: 'Helldivers come out of the Hellpod fully stocked on Ammo, Grenades and Stims.',
    },
    {
        name: 'Vitality Enhancement',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/3b/Vitality_Enhancement_Booster.png/revision/latest/scale-to-width-down/100?cb=20240228174851',
        effect: 'Helldivers take less damage from all sources and are more resistant to limb injuries. Torso can still hemorrhage.',
    },
    {
        name: 'UAV Recon Booster',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/ce/UAV_Recon_Booster_Booster.png/revision/latest/scale-to-width-down/100?cb=20240228174851',
        effect: 'Increases all Helldivers effective radar range by 50% (affects spotting Places of Interest) Stacks with Nuclear Radar and affects pings from the Scout armor perk.',
    },
    {
        name: 'Stamina Enhancement',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/f3/Stamina_Enhancement_Booster.png/revision/latest/scale-to-width-down/100?cb=20240228174851',
        effect: '30% increase to sprint duration and 23% increase to stamina regen.',
    },
    {
        name: 'Muscle Enhancement',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/3c/Muscle_Enhancement_Booster.png/revision/latest/scale-to-width-down/100?cb=20240229025052',
        effect: `No longer slowed by difficult terrain hazards (such as shrubs or mud) or uphill slopes. Also reduces the speed penalty of the Hunter's slow debuff.`,
    },
    {
        name: 'Increased Reinforcement Budget',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/5b/Increased_Reinforcement_Budget_Booster.png/revision/latest/scale-to-width-down/100?cb=20240229011114',
        effect: 'Gives one additional reinforcement per Helldiver, to a maximum of 4.',
    },
    {
        name: 'Flexible Reinforcement Budget',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/44/Flexible_Reinforcement_Budget_Booster.png/revision/latest/scale-to-width-down/100?cb=20240229044301',
        effect: 'Reduces reinforcements replenish time by 10%. Only applies when 0 reinforcement has been reached.',
    },
    {
        name: 'Localization Confusion Booster',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d7/Localization_Confusion_Booster_Booster.png/revision/latest/scale-to-width-down/100?cb=20240314123006',
        effect: 'Increases the cooldown between unscripted Bug Breaches and Bot Drops by 10%. Will not prevent scripted breaches/drops.',
    },
    {
        name: 'Expert Extraction Booster',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/fc/Expert_Ertraction_Pilot_Booster.png/revision/latest/scale-to-width-down/100?cb=20240411125137',
        effect: 'Pelican 1 arrives 15% faster during extraction.',
    },
    {
        name: 'Motivational Shocks',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/f2/Motivational_Shocks_Booster.png/revision/latest/scale-to-width-down/100?cb=20240518142735',
        effect: 'Negates slowed-effect inflicted by hostiles, such as from terminid bile. Will not negate the speed penalty of EMS fields or broken legs.',
    },
    {
        name: 'Experimental Infusion',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/0a/Experimental_Infusion_Booster.png/revision/latest/scale-to-width-down/100?cb=20240617070142',
        effect: 'Gives Stims the added bonus of boosting player movement speed and reducing damage taken for a short time, but alters their vision.',
    },
    {
        name: 'Firebomb Hellpods',
        imagePath: 'https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/51/Firebomb_Hellpods_Booster.png/revision/latest/scale-to-width-down/100?cb=20240808114808',
        effect: 'Lines all Hellpods with volatile incendiaries that detonate on impact, igniting any units in the vicinity of the drop site (this includes friendlies).',
    },
    {
        name: 'Dead Sprint',
        imagePath: '',
        effect: 'Allows continuous sprinting even after draining stamina, however, at the cost of losing a percentage of health per second.',
    },
]

export { boosters }