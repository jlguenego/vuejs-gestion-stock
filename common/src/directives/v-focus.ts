import { Directive } from "vue";

type FocusValue = "selectall" | "focus";

export const vFocus: Directive<HTMLElement, FocusValue | undefined> = {
  mounted: (el, binding, vnode, prevVnode) => {
    const value = binding.value;
    if (value === "selectall" && el instanceof HTMLInputElement) {
      el.select();
      return;
    }
    el.focus();
  },
};
