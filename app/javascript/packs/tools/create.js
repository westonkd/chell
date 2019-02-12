import React from "react";
import { render } from "react-dom";

import { parseDataNode } from "../../components/shared/RenderUtils";
import Create from "../../components/tools/Create";

document.addEventListener("DOMContentLoaded", () => {
  const applicationData = parseDataNode("application_data");
  render(
    <Create toolData={applicationData.tools} />,
    document.querySelector("#tool_index_content")
  );
});
