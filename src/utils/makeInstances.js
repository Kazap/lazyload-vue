import LazyLoad from "vanilla-lazyload";

const DEFAULT_ROOT_INSTANCE_SELECTOR = ".lazy-image-root";

const createInstance = options => {
  return new LazyLoad(options);
};

const makeInstances = options => {
  const { instances: customInstancesOptions = {} } = options || {};
  const defaultRootInstance = { elements_selector: DEFAULT_ROOT_INSTANCE_SELECTOR };

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

  return instances;
};

export default makeInstances;
