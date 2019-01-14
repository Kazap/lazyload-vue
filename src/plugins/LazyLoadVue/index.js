import lazySrc from "@/directives/lazySrc";

const lazyLoadPlugin = {};

lazyLoadPlugin.install = function(Vue) {
  Vue.directive("lazy-src", lazySrc);
};

export default lazyLoadPlugin;
