import type { Tier } from ".";

export const Tiers = {
    'S': 'S',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'F': 'F',
} as {
    [key: string]: Tier;
}

export const TiersOrdered = [Tiers.S, Tiers.A, Tiers.B, Tiers.C, Tiers.D, Tiers.F];

export default Tiers;