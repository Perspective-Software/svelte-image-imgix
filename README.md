![NPM](https://img.shields.io/npm/l/svelte-image-imgix)

# svelte-image-imgix

Lazy loading images from Imgix using [svelte-waypoint](https://github.com/matyunya/svelte-waypoint). Also heavily inspired by [svelte-image](https://github.com/matyunya/svelte-image).
Also works with Unsplash as long as they're using Imgix.

[Documentation & Demo](https://perspective-software.github.io/svelte-image-imgix/)

## Installation

`npm i svelte-image-imgix -D`

Enjoy:

```sveltehtml
<script>
    import { Image } from 'svelte-image-imgix'
</script>

<Image src="https://example.imgix.net/myimage.jpg" />
```

## Development

`npm run dev` will start a local dev server on localhost:5000

Navigate to `http://localhost:5000/svelte-image-imgix` to see the docs.

Thanks [@svelte-docs](https://github.com/AlexxNB/svelte-docs)

