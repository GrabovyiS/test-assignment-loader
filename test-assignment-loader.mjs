function testAssignmentLoader(
  container,
  initialValue,
  { initialAnimated, initialHidden } = {
    initialAnimated: false,
    initialHidden: false,
  }
) {
  // Setting the styles inside JS so that the package can
  // be easily used without any kind of bundling
  const head = document.querySelector("head");
  const loaderStyles = document.createElement("style");
  loaderStyles.textContent = `
        @property --loader-value {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 0%;
    }

    .test-assignment-loader {
      transition: --loader-value 0.25s;

      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(#015cff var(--loader-value), #ebf0f6 0);

      &.animated {
        animation: 1.5s spin infinite ease-in-out;
      }

      &.hidden {
        visibility: hidden;
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `;
  head.appendChild(loaderStyles);

  function render() {
    const loader = document.createElement("div");
    loader.classList.add("test-assignment-loader");

    if (initialAnimated) {
      loader.classList.add("animated");
    }

    if (initialHidden) {
      loader.classList.add("hidden");
    }

    loader.style.setProperty("--loader-value", `${initialValue}%`);

    container.appendChild(loader);
  }

  function setValue(value) {
    const loader = container.querySelector(".test-assignment-loader");
    loader.style.setProperty("--loader-value", `${value}%`);
  }

  function setAnimated(animated) {
    const loader = container.querySelector(".test-assignment-loader");
    if (animated) {
      loader.classList.add("animated");
    } else {
      loader.classList.remove("animated");
    }
  }

  function setHidden(hidden) {
    const loader = container.querySelector(".test-assignment-loader");
    if (hidden) {
      loader.classList.add("hidden");
    } else {
      loader.classList.remove("hidden");
    }
  }

  render();

  return { setValue, setAnimated, setHidden };
}

export default testAssignmentLoader;
