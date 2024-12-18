import type { booster } from "./types"

const boosters: booster[] = [
    {
        name: 'Hellpod Space Optimization',
        imagePath: '/assets/images/boosters/Hellpod_Space_Optimization_Booster.webp',
        effect: 'Helldivers come out of the Hellpod fully stocked on Ammo, Grenades and Stims.',
        attributeLink: ''
    },
    {
        name: 'Vitality Enhancement',
        imagePath: '/assets/images/boosters/Vitality_Enhancement_Booster.webp',
        effect: 'Helldivers take less damage from all sources and are more resistant to limb injuries. Torso can still hemorrhage.',
        attributeLink: ''
    },
    {
        name: 'UAV Recon Booster',
        imagePath: '/assets/images/boosters/UAV_Recon_Booster_Booster.webp',
        effect: 'Increases all Helldivers effective radar range by 50% (affects spotting Places of Interest) Stacks with Nuclear Radar and affects pings from the Scout armor perk.',
        attributeLink: ''
    },
    {
        name: 'Stamina Enhancement',
        imagePath: '/assets/images/boosters/Stamina_Enhancement_Booster.webp',
        effect: '30% increase to sprint duration and 23% increase to stamina regen.',
        attributeLink: ''
    },
    {
        name: 'Muscle Enhancement',
        imagePath: '/assets/images/boosters/Muscle_Enhancement_Booster.webp',
        effect: `No longer slowed by difficult terrain hazards (such as shrubs or mud) or uphill slopes. Also reduces the speed penalty of the Hunter's slow debuff.`,
        attributeLink: ''
    },
    {
        name: 'Increased Reinforcement Budget',
        imagePath: '/assets/images/boosters/.webp',
        effect: 'Gives one additional reinforcement per Helldiver, to a maximum of 4.',
        attributeLink: ''
    },
    {
        name: 'Flexible Reinforcement Budget',
        imagePath: '/assets/images/boosters/Increased_Reinforcement_Budget_Booster.webp',
        effect: 'Reduces reinforcements replenish time by 10%. Only applies when 0 reinforcement has been reached.',
        attributeLink: ''
    },
    {
        name: 'Localization Confusion Booster',
        imagePath: '/assets/images/boosters/Localization_Confusion_Booster_Booster.webp',
        effect: 'Increases the cooldown between unscripted Bug Breaches and Bot Drops by 10%. Will not prevent scripted breaches/drops.',
        attributeLink: ''
    },
    {
        name: 'Expert Extraction Booster',
        imagePath: '/assets/images/boosters/Expert_Ertraction_Pilot_Booster.webp',
        effect: 'Pelican 1 arrives 15% faster during extraction.',
        attributeLink: ''
    },
    {
        name: 'Motivational Shocks',
        imagePath: '/assets/images/boosters/Motivational_Shocks_Booster.webp',
        effect: 'Negates slowed-effect inflicted by hostiles, such as from terminid bile. Will not negate the speed penalty of EMS fields or broken legs.',
        attributeLink: ''
    },
    {
        name: 'Experimental Infusion',
        imagePath: '/assets/images/boosters/Experimental_Infusion_Booster.webp',
        effect: 'Gives Stims the added bonus of boosting player movement speed and reducing damage taken for a short time, but alters their vision.',
        attributeLink: ''
    },
    {
        name: 'Firebomb Hellpods',
        imagePath: '/assets/images/boosters/Firebomb_Hellpods_Booster.webp',
        effect: 'Lines all Hellpods with volatile incendiaries that detonate on impact, igniting any units in the vicinity of the drop site (this includes friendlies).',
        attributeLink: ''
    },
    {
        name: 'Dead Sprint',
        imagePath: '/assets/images/boosters/.webp',
        effect: 'Allows continuous sprinting even after draining stamina, however, at the cost of losing a percentage of health per second.',
        attributeLink: ''
    },
]

export { boosters }