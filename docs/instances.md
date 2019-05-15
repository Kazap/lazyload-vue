---
id: instances
title: Instances
---

## Options documentation

Check options section on documentation: [vanilla-lazyload](https://github.com/verlok/lazyload)

## Example

### App.vue

```js
import LazyloadVue from 'lazyload-vue'

Vue.use(LazyloadVue, {
    instances: {
        // configure root instance
        root: {
            elements_selector: '.lazy-custom-root'
        },
        // optional foobar instance
        foobar: {
            elements_selector: '.lazy-webp'
            to_webp: true // enable switch to webp
        }
    }
})
```

### MyComponent.vue

```html
<template>
  <div>
    <img v-lazy-src="'http://lorempixel.com/300/300'">
    <img v-lazy-src:foobar="'http://lorempixel.com/300/300'">
  </div>
</template>
```
