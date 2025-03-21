import { Tiers } from "../types.d.ts";

export const tierTextClassnames = {
    [Tiers.S]: 'text-tier-s',
    [Tiers.A]: 'text-tier-a',
    [Tiers.B]: 'text-tier-b',
    [Tiers.C]: 'text-tier-c',
    [Tiers.D]: 'text-tier-D',
    [Tiers.F]: 'text-tier-f',
} as const;
export const tierBGClassnames = {
    [Tiers.S]: 'bg-tier-s',
    [Tiers.A]: 'bg-tier-a',
    [Tiers.B]: 'bg-tier-b',
    [Tiers.C]: 'bg-tier-c',
    [Tiers.D]: 'bg-tier-D',
    [Tiers.F]: 'bg-tier-f',
} as const;

export default {
    text: tierTextClassnames,
    bg: tierBGClassnames,
};