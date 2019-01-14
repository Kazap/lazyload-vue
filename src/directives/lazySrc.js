import LazyLoad from "vanilla-lazyload";

const lazySrc = () => {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy-image"
  });

  function bind(el, binding, vnode) {
    if (vnode.tag === "img") {
      el.dataset.src = binding.value;
      el.classList.add("lazy-image");
    }
  }

  function inserted() {
    lazyLoadInstance.update();
  }

  return {
    bind,
    inserted
  };
};

export default lazySrc();
