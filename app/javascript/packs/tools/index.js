import React from "react";
import { render } from "react-dom";

import { parseDataNode } from "../../components/shared/RenderUtils";
import Index from "../../components/tools/Index";

document.addEventListener("DOMContentLoaded", () => {
  const toolData = parseDataNode("tool_data");
  const applicationData = parseDataNode("application_data");
  render(
    <Index toolData={toolData} applicationData={applicationData} />,
    document.querySelector("#tool_index_content")
  );
});
