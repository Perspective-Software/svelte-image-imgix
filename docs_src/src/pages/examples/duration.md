## Duration

Changes the transition duration of the fade effect between placeholder and fully loaded image.

### 4s Transition

```example
<script>
    import { Image } from 'svelte-image-imgix';
</script>

<Image duration={4000} src="https://images.unsplash.com/reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens - Sunset in the Park.JPG" />
```

### 200ms Transition

```example
<script>
    import { Image } from 'svelte-image-imgix';
</script>

<Image duration={200} src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471" />
```
