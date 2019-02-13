import React from "react";
import { render } from "react-dom";

import { parseDataNode } from "../../components/shared/RenderUtils";
import Create from "../../components/tools/Create";

document.addEventListener("DOMContentLoaded", () => {
  const toolData = parseDataNode("tool_data");
  render(
    <Create toolData={toolData} />,
    document.querySelector("#tool_index_content")
  );
});
