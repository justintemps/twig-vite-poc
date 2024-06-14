import "@ilo-org/styles/css/index.css";

export const decorators = [
  (storyFn) => {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList" && mutation.addedNodes.length) {
          for (const property in Drupal.behaviors) {
            if (Drupal.behaviors[property].attach) {
              Drupal.behaviors[property].attach();
            }
          }
          observer.disconnect();
        }
      }
    });

    const wrapper = document.createElement("div");
    observer.observe(wrapper, { childList: true });
    const story = storyFn();
    wrapper.innerHTML = story;

    return wrapper;
  },
];

/** @type { import('@storybook/html').Preview } */
const preview = {
  decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
