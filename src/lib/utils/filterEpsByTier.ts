export default function filterEpsByTier(eps: Episode[], tier: Tier): Episode[] {
  return eps.filter((ep) => ep.tier === tier);
}