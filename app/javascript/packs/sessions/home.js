import React from "react";
import { render } from "react-dom";

import { parseDataNode } from "../../components/shared/RenderUtils";
import Home from "../../components/sessions/Home";

document.addEventListener("DOMContentLoaded", () => {
  const applicationData = parseDataNode("application_data");
  render(
    <Home applicationData={applicationData} />,
    document.querySelector("#sessions_home_content")
  );
});
