import { Directive, ref } from "vue";

type FocusValue = "selectall" | "focus";

export const vFocus: Directive<HTMLElement, FocusValue | undefined> = {
  mounted: (el, binding, vnode, prevVnode) => {
    if (el instanceof HTMLInputElement) {
      const previousValue = ref(el.value);
      el.addEventListener("input", () => {
        if (el.value === "") {
          const customEvent = new CustomEvent("empty", {
            detail: previousValue.value,
          });
          el.dispatchEvent(customEvent);
          return;
        }
        previousValue.value = el.value;
      });
    }

    const value = binding.value;
    if (value === "selectall" && el instanceof HTMLInputElement) {
      el.select();
      return;
    }
    el.focus();
  },
};
