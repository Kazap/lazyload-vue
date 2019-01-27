import lazySrc from "@/directives/lazySrc";
import lazyContainer from "@/directives/lazyContainer";
import LazyLoad from "vanilla-lazyload";

const lazyLoadPlugin = {};

lazyLoadPlugin.install = function(Vue, options) {
  const createInstance = options => {
    return new LazyLoad(options);
  };

  const { instances: customInstancesOptions = {} } = options || {};
  const defaultRootInstance = { elements_selector: ".lazy-image-root" };

  customInstancesOptions.root = customInstancesOptions.root || {};

  let instancesOptions = {
    root: { ...defaultRootInstance, ...customInstancesOptions.root }
  };

  delete customInstancesOptions.root;

  instancesOptions = { ...instancesOptions, ...customInstancesOptions };

  const instances = Object.entries(instancesOptions)
    .map(item => {
      const [key, value] = item;
      return { [key]: createInstance(value) };
    })
    .reduce((instances, instance) => {
      const [key, value] = Object.entries(instance)[0];
      return { ...instances, [key]: value };
    }, {});

  Vue.directive("lazy-src", lazySrc(instances));
  Vue.directive("lazy-container", lazyContainer);
};

export default lazyLoadPlugin;
