import React, { useState } from "react";
import PropTypes from "prop-types";

import { Flex, FlexItem } from "@instructure/ui-layout";
import BreadCrumb from "../shared/BreadCrumb";
import Form from "./Form"

const Create = props => {
  return (
    <Flex direction="column">
      <FlexItem>
        <BreadCrumb
          linkItems={[[props.toolData.index_path, "Tools"]]}
          currentPage="New Tool"
        />
        <Form createEndpoint={props.toolData.api_create_path} redirectUrl={props.toolData.index_path} />
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
