<script>
    import {Short} from "$lib/components";
    import { episodes } from '$data';

    const latestEpisode = episodes[episodes.length - 1];
</script>

<header class="grid grid-rows-[auto_auto] md:grid-rows-[unset] md:grid-cols-[auto_1fr] gap-2 md:py-20 w-full overflow-hidden">

    <Short id={latestEpisode?.vidId} class="rounded-2xl overflow-hidden w-80 row-start-2 md:row-start-1"/>

    <div class="p-8 md:p-12 rounded-2xl gap-y-12 md:gap-y-20 flex items-center bg-tier-bg/15 h-full w-full max-w-full relative overflow-hidden row-start-1">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3b/d9/7e/caption.jpg" alt="" class="w-full h-full object-center object-cover">
        </div>
        <h2 class="text-2xl text-center md:text-left md:text-3xl w-full">
            Under this busy shopping street in Japan,<br/> <a href="/plaza-map/center-plaza"　class="text-amber-400">there's over 80 hidden restaurants</a>.<br/><br/>
            And <a href="https://www.youtube.com/channel/UCNzFhleZyCHPeIgmp-McMmQ" target="_blank" class="inline-flex items-center gap-x-2 text-red-600 fill-current hover:text-red-300"><img src="/assets/youtube.png" alt="Youtube" class="w-7"/> Japan Eat</a> is trying EVERY one of them.<br/><br/>
            Out of his comfort zone, he goes in completely blind.<br/><br/>
            He orders what they recommend,<br/> and based off taste alone,<br/> he ranks them on a <a href="/tier-list" class="text-amber-400">tier list</a>.<br/><br/>
            Some are incredible,<br/> and some are inedible.<br/>
        </h2>
    </div>

</header>