## Ratio

Ratio is usually calculated by the placeholder dimensions, but you can pass it manually if needed.
If you do so, make sure your imgix image also has the correct ratio.

```example
<script>
    import { Image } from 'svelte-image-imgix';
</script>

<Image
    src="https://perspective.imgix.net/5fda1f79ff701a001f5bd215.png"
    ratio="100%"
    imgixParams={{ ar: 1, fit: 'crop' }}
/>
```
