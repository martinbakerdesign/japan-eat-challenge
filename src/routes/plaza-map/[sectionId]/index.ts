import { CenterPlazaWest, CenterPlaza, SanPlaza } from "$lib/components";
import { PlazaSections } from "$types";

export const components = new Map<PlazaSection, any>([
    [PlazaSections[0], CenterPlazaWest],
    [PlazaSections[1], CenterPlaza],
    [PlazaSections[2], SanPlaza],
])