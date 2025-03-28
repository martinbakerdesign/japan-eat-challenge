<script>
    import {Short} from "$lib/components";
    import { episodes } from '$data';

    const latestEpisode = episodes[episodes.length - 1];
</script>

<header class="p-16 rounded-2xl gap-y-20 flex flex-col items-center bg-tier-bg/15">
    <h2 class="text-4xl w-full text-center px-32">
        Under this busy shopping street in Japan,<br/> <a href="/plaza-map/center-plaza"　class="text-amber-400">there's over 80 hidden restaurants</a>.<br/><br/>
        And <a href="https://www.youtube.com/channel/UCNzFhleZyCHPeIgmp-McMmQ" target="_blank" class="inline-flex items-center gap-x-2 text-red-600 fill-current hover:text-red-300"><img src="/assets/youtube.png" alt="Youtube"/> Japan Eat</a> is trying EVERY one of them.<br/><br/>
        Out of his comfort zone, he goes in completely blind.<br/><br/>
        He orders what they recommend,<br/> and based off taste alone,<br/> he ranks them on a <a href="/tier-list" class="text-amber-400">tier list</a>.<br/><br/>
        Some are incredible,<br/> and some are inedible.<br/>
    </h2>
    <div class="flex-none flex flex-col items-center gap-y-4">
        <Short id={latestEpisode?.vidId} />
        <h2 class="text-sm text-center opacity-50">Latest Episode<br/>{latestEpisode?.date}</h2>
    </div>
</header>