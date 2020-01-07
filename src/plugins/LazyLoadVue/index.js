import lazySrc from "@/directives/lazySrc";
import lazyContainer from "@/directives/lazyContainer";
import makeInstances from "@/utils/makeInstances";

const lazyLoadPlugin = {};

lazyLoadPlugin.install = function(Vue, options) {

  const instances = makeInstances(options);

  Vue.directive("lazy-src", lazySrc(instances));
  Vue.directive("lazy-container", lazyContainer);
};

export default lazyLoadPlugin;
