import LazyLoad from "vanilla-lazyload";

const lazySrc = () => {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy-image"
  });

  function bind(el, binding) {
    el.dataset.src = binding.value;
    el.classList.add("lazy-image");
  }

  function inserted() {
    lazyLoadInstance.update();
  }

  function update(el, binding) {
    if (binding.oldValue !== binding.value) {
      el.src = "";
      el.classList.remove("loaded");
      el.dataset.src = binding.value;
      el.setAttribute("data-was-processed", false);
      lazyLoadInstance.update();
    }
  }

  return {
    bind,
    inserted,
    update
  };
};

export default lazySrc();
