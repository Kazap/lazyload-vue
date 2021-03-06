const lazySrc = instances => {
  const getClassSelector = binding => {
    const instance = getCurrentInstance(binding);
    return instance._settings.elements_selector.replace(".", "");
  };

  const getCurrentInstance = binding => {
    if (!binding.arg) return instances["root"];

    if (instances[binding.arg]) {
      return instances[binding.arg];
    } else {
      throw new Error(`lazyload-vue: instance called "${binding.arg}" not found. Please set this instance on plugin options. Try:
      Vue.use(LazyloadVue, {
        instances: {
          ...otherInstances,
          ${binding.arg}: {
            ...yourOptions
          }
        }
      })
      `);
    }
  };

  function bind(el, binding) {
    el.dataset.src = binding.value;
    const classSelector = getClassSelector(binding);
    el.classList.add(classSelector);
  }

  function inserted(el, binding) {
    const instance = getCurrentInstance(binding);
    instance.update();
  }

  function update(el, binding) {
    const instance = getCurrentInstance(binding);
    const classSelector = getClassSelector(binding);
    let hasUpdate;

    if (!el.classList.contains(classSelector)) {
      el.classList.add(classSelector);
      hasUpdate = true;
    }

    if (binding.oldValue !== binding.value) {
      el.src = "";
      el.classList.remove("loaded");
      el.dataset.src = binding.value;
      el.setAttribute("data-was-processed", false);
      hasUpdate = true;
    }
    hasUpdate && instance.update();
  }

  return {
    bind,
    inserted,
    update
  };
};

export default lazySrc;
