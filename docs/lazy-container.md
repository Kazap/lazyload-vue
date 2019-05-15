---
id: lazy-container
title: lazy-container
---

## Example

```html
<template>
  <div v-lazy-container class="scrollingPanel">
    <img v-lazy-src="'http://lorempixel.com/300/300'" />
    ... other images
  </div>
</template>
<style>
  .scrollingPanel {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
```
