import React, { useState } from "react";
import PropTypes from "prop-types";

import { Flex, FlexItem } from "@instructure/ui-layout";
import BreadCrumb from "../shared/BreadCrumb";

const Index = props => {
  return (
    <Flex direction="column">
      <FlexItem>
        <BreadCrumb currentPage="New Tool" />
      </FlexItem>
    </Flex>
  );
};

Index.PropTypes = {
  toolData: PropTypes.shape({
    index_path: PropTypes.string.isRequired
  })
};

export default Index;
