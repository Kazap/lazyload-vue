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
