const lazySrc = instances => {
  function bind(el, binding) {
    const instance = instances[binding.arg] || instances["root"];
    const classSelector = instance._settings.elements_selector.replace(".", "");
    el.dataset.src = binding.value;
    el.classList.add(classSelector);
  }

  function inserted(el, binding) {
    const instance = instances[binding.arg] || instances["root"];
    instance.update();
  }

  function update(el, binding) {
    if (binding.oldValue !== binding.value) {
      const instance = instances[binding.arg] || instances["root"];
      el.src = "";
      el.classList.remove("loaded");
      el.dataset.src = binding.value;
      el.setAttribute("data-was-processed", false);
      instance.update();
    }
  }

  return {
    bind,
    inserted,
    update
  };
};

export default lazySrc;
