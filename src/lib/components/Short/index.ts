import { tick } from 'svelte';
import { browser } from '$app/environment';

export { default } from './Short.svelte'

export const playerId = 'player'

export const refs = {
    player: null,
    Plyr: null
} as {
    player: Plyr | null,
    Plyr: typeof import("plyr") | null
}

export async function loadPlyr () {
    const PlyrComp = await import("plyr");
    refs.Plyr = PlyrComp.default;
}

const playerConfig = {
    autoplay: true,
    controls: ["play", "progress", "current-time", "mute", "volume", "fullscreen"]
};

export function updatePlayer(id: ShortID) {
    if (!id || !browser || !refs?.Plyr) {
        refs?.player?.destroy();
        return;
    }

    tick().then(() => {
        if (!refs.player) {
            refs.player = new refs.Plyr(
                `#${playerId}`,
                playerConfig
            );
        }

        // refs.player.pause()
        
        refs.player.source = {
            type: 'video',
            sources: [
                {
                    src: id,
                    provider: 'youtube',
                }
            ],
        };
        
        refs.player.autoplay = true;

        // startVideoAt(refs.player, 11.3)
    })


    return () => {
        refs.player?.destroy();
    }
}

function startVideoAt (player: Plyr, time: number) {
    if (!player) return;
    player.once('ready', (e) => {
        player.currentTime = time;
        player.muted = false;
        player.play()
    })
}

export function setupPlayer (id: ShortID|null|undefined) {
    if (!id) return;
    return async () => {
        await loadPlyr();
    
        return updatePlayer(id);
    }
}