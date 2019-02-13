import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flex, FlexItem } from "@instructure/ui-layout";

import BreadCrumb from "../shared/BreadCrumb";
import Tool from "./Tool"

const Index = props => {
  return (
    <Flex direction="column">
      <FlexItem>
        <BreadCrumb currentPage="Tools" />
      </FlexItem>
      <FlexItem>
        {
          props.toolData.tools.map((tool) => <Tool tool={tool} key={tool.id} />)
        }
      </FlexItem>
    </Flex>
  );
};

Index.propTypes = {
  toolData: PropTypes.shape({
    index_path: PropTypes.string.isRequired,
    tools: PropTypes.array.isRequired
  })
};

export default Index;
