import LazyLoad from "vanilla-lazyload";

const lazyContainer = () => {
  function bind(el) {
    new LazyLoad({
      container: el
    });
  }

  return {
    bind
  };
};

export default lazyContainer();
