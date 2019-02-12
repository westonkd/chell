import React from "react";
import { render } from "react-dom";

import { parseDataNode } from "../components/shared/RenderUtils";
import Header from "../components/application/header";
import theme from "@instructure/ui-themes/lib/canvas";

document.addEventListener("DOMContentLoaded", () => {
  const applicationData = parseDataNode("application_data");

  render(
    <Header user={applicationData.user} app={applicationData.app} />,
    document.querySelector("header")
  );
});
