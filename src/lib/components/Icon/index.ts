export type IconID = string;
export type IconSize = number;
export type Icon = `${IconID}--${IconSize}`;
export type IconPath = string;
export type IconPaths = IconPath[];
export type IconDefinitions = Record<IconSize, IconPaths>;

export { default } from './Icon.svelte';

export { default as icons } from './icons';

export function extractIconSize(hasId: boolean, iconId: IconID) {
    if (hasId) {
        const [icon,size] = iconId.split('--');
        return +size;
    }
    return 24;
}