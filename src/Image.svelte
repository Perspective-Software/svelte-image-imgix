<script>
    import Waypoint from 'svelte-waypoint';
    import Imgix from 'imgix-core-js';

    export let alt = '';
    export let src = '';
    export let ratio = null;
    export let sizes = '(max-width: 1000px) 100vw, 1000px';
    export let offset = 0;
    export let threshold = 1.0;
    export let lazy = true;
    export let imgixParams = {};
    export let placeholderSize = 120;
    export let blur = 500;
    export let className = '';
    export let placeholderClassName = '';
    export let duration = 400;
    export let delayed = false;

    let loaded = !lazy;
    let calcedRatio = '10%';
    let cached = false;

    const domain = new URL(src).hostname;
    const path = decodeURI( new URL(src).pathname );

    const imgix = new Imgix({ domain });

    const imgLoad = (img) => {
        cached = img.complete;
        img.onload = () => {
            loaded = true;
            // Recalculate for exact ratio
            calcedRatio = `${(img.naturalHeight * 100) / img.naturalWidth}%`;
        }
    };

    const placeholderLoad = (img) => {
        img.onload = () => {
            return (calcedRatio = `${(img.naturalHeight * 100) / img.naturalWidth}%`);
        };
    };

    const placeholderImgixParams = {
        ...imgixParams,
        blur,
        w: placeholderSize,
        auto: ['format', 'compress'],
    };

    $: srcset = imgix.buildSrcSet(path, imgixParams);
    $: placeholderSrc = imgix.buildURL(path, placeholderImgixParams);
    $: imageRatio = ratio ? ratio : calcedRatio;
</script>

<Waypoint
    style="width: 100%;"
    once
    threshold={threshold}
    offset={offset}
    disabled={!lazy}
>
    <div class:loaded style="position: relative; width: 100%;">
        <div style="position: relative; overflow: hidden;">
            <div style="width:100%; padding-bottom:{imageRatio};" />
            {#if !cached}
                <img
                    class="placeholder {placeholderClassName}"
                    src={placeholderSrc}
                    alt={`${alt} placeholder`}
                    use:placeholderLoad
                    style="--duration: {duration}ms"
                />
            {/if}
            <picture>
                <source srcset={srcset} sizes={sizes} />
                <img src={src} alt={alt} use:imgLoad class="main {className}" class:delayed class:cached style="--duration: {duration}ms" />
            </picture>
        </div>
    </div>
</Waypoint>

<style>
    img {
        object-position: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        will-change: opacity;
    }

    .placeholder {
        opacity: 1;
        width: 100%;
        height: 100%;
        transition: opacity var(--duration) ease-out;
        transition-delay: var(--duration);
    }

    .main {
        opacity: 0;
        transition: opacity var(--duration) ease-out;
    }

    .main.delayed {
        transition-delay: var(--duration);
    }

    .main.cached {
        opacity: 1;
        transition: none;
        transition-delay: 0s;
    }

    .loaded .placeholder {
        opacity: 0;
    }

    .loaded .main {
        opacity: 1;
    }
</style>
