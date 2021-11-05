# Properties

```properties
src | Imgix image url | string(required)
alt | alt image text | string(optional)
ratio | ratio percentage (e.g. 16/9 -> 56.25%) if not provided, ratio will be calculated from the placeholder image | string(optional)
sizes | image sizes to pick from srcset (default: `'(max-width: 1000px) 100vw, 1000px'`) | string(optional)
imgixParams | Imgix parameters that will be appended to the src and the placeholder | object(optional)
placeholderSize | Natural width of the placeholder image in px (default: `120`) | number(optional)
blur | Placeholder blur amount (default: `500`) | number(optional)
offset | svelte-waypoint offset (default: `0`) | number(optional)
threshold | svelte-waypoint threshold (default: `1.0`) | number(optional)
duration | fade animation duration
delayed | delay the fade transition by 400ms
lazy | enable/disabled svelte-waypoint lazy loading (default: `true`) | boolean(optional)
className | CSS class applied to the final image | string(optional)
placeholderClassName | CSS class applied to the placeholder image | string(optional)
```
