import { type Component, h } from "vue";
import { version } from "../../package.json";

const ProjectVersion: Component = {
  props: {
    prefix: String,
  },
  setup(props) {
    return () => h("div", (props.prefix ?? "The version is") + ": " + version);
  },
};

export default ProjectVersion;
