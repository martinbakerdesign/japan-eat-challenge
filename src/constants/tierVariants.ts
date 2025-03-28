import { Tiers } from "./tiers";
import type { Tier } from "$types";

export const tierTextVariants = {
    [Tiers.S]: 'text-tier-s',
    [Tiers.A]: 'text-tier-a',
    [Tiers.B]: 'text-tier-b',
    [Tiers.C]: 'text-tier-c',
    [Tiers.D]: 'text-tier-d',
    [Tiers.F]: 'text-tier-f',
} as Record<Tier, string>;

export const tierBGVariants = {
    [Tiers.S]: 'bg-tier-s',
    [Tiers.A]: 'bg-tier-a',
    [Tiers.B]: 'bg-tier-b',
    [Tiers.C]: 'bg-tier-c',
    [Tiers.D]: 'bg-tier-d',
    [Tiers.F]: 'bg-tier-f',
} as Record<Tier, string>;

export default {
    text: tierTextVariants,
    bg: tierBGVariants,
};