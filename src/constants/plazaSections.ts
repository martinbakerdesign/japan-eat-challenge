import type { PlazaSection } from "$types/PlazaSection"

const PlazaSections = [
    'center-plaza-west',
    'center-plaza',
    'san-plaza',
] as PlazaSection[];

export const PlazaSectionNames = {
    'center-plaza-west': 'Center Plaza West',
    'center-plaza': 'Center Plaza',
    'san-plaza': 'San Plaza',
} as Record<PlazaSection, string>;

export default PlazaSections;