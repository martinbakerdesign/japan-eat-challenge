import { Tiers } from "$constants";

export const visibleTiers = Object.values(Tiers).slice(0, 4);

export {default as default} from './TierList.svelte'
