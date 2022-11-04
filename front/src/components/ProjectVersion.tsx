import type { Component } from "vue";
import { version } from "../../package.json";

const ProjectVersion: Component = {
  props: {
    prefix: String,
  },
  setup(props) {
    return () => (
      <div>
        jsx {props.prefix ?? "The version is now"} : {version}
      </div>
    );
  },
};

export default ProjectVersion;
