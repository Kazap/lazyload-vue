# lazyload-vue

Vue Plugin for [vanilla-lazyload](https://github.com/verlok/lazyload)

## Install

    yarn add lazyload-vue

## Usage

```js
import LazyloadVue from 'lazyload-vue'

Vue.use(LazyloadVue)
```

**Directive lazy-src example**

```html
<template>
  <img v-lazy-src="http://lorempixel.com/300/300">
</template>
```

**Example with options**

```js
import LazyloadVue from 'lazyload-vue'

Vue.use(LazyloadVue, {
    instances: {
        root: {
            elements_selector: '.lazy-custom-root'
        },
        webp: {
            elements_selector: '.lazy-webp'
            to_webp: true
        }
    }
})
```

```html
<template>
  <div>
    <img v-lazy-src="http://lorempixel.com/300/300">
    <img v-lazy-src:webp="http://lorempixel.com/300/300">
  </div>
</template>
```

**Check options section on documentation:** [vanilla-lazyload](https://github.com/verlok/lazyload)



## Development Setup

    # Project setup

    yarn install

    # Compiles and hot-reloads for development

    yarn start

    # Compiles and minifies for production

    yarn build

    # Run your tests

    yarn test

    # Lints and fixes files

    yarn lint

    # Run your unit tests

    yarn test:unit
