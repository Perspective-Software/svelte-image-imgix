## Styling

**Why do applied classes need to be `global`?**
Long answer: https://github.com/sveltejs/svelte/issues/2870

```example
<script>
    import { Image } from 'svelte-image-imgix';
</script>

<Image 
    src="https://perspective.imgix.net/5fda1f79ff701a001f5bd215.png"
    className="custom"
    placeholderClassName="custom"
/>

<style>
    :global(.custom) {
        border-radius: 16px;
    }
</style>
```

Another to style your image would be wrapping it:

```example
<script>
    import { Image } from 'svelte-image-imgix';
</script>

<div class="wrapper">
    <Image src="https://perspective.imgix.net/5fda1f79ff701a001f5bd215.png" />
</div>

<style>
    .wrapper {
        border-radius: 16px;
        overflow: hidden;
        line-height: 0;
    }
</style>
```
