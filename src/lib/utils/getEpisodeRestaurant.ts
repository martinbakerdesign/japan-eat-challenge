import type { Episode } from "../../types";
import { restaurants } from "../../data";

export default function getEpisodeRestaurant(episode: Episode) {
  return restaurants.find(r => episode?.restaurant === r.id) ?? null;
}