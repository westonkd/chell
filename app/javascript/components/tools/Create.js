import React, { useState } from "react";
import PropTypes from "prop-types";

import { Flex, FlexItem } from "@instructure/ui-layout";
import BreadCrumb from "../shared/BreadCrumb";
import CreateForm from "./CreateForm";

const Create = props => {
  return (
    <Flex direction="column">
      <FlexItem>
        <BreadCrumb
          linkItems={[[props.toolData.index_path, "Tools"]]}
          currentPage="New Tool"
        />
        <CreateForm createEndpoint={props.toolData.api_create_path} />
      </FlexItem>
    </Flex>
  );
};

Create.propTypes = {
  toolData: PropTypes.shape({
    index_path: PropTypes.string.isRequired,
    api_create_path: PropTypes.string.isRequired
  })
};

export default Create;
