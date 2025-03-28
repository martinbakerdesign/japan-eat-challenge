import { CenterPlazaWest, CenterPlaza, SanPlaza } from "$lib/components";
import { PlazaSections } from "$constants";

export const components = new Map<PlazaSection, any>([
    [PlazaSections[0], CenterPlazaWest],
    [PlazaSections[1], CenterPlaza],
    [PlazaSections[2], SanPlaza],
])