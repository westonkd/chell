import React, { useState } from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbLink } from "@instructure/ui-breadcrumb";

const BreadCrumb = props => {
  return (
    <Breadcrumb size="large">
      {props.linkItems.map(linkItem => {
        return (
          <BreadcrumbLink href={linkItem[0]}>{linkItem[1]}</BreadcrumbLink>
        );
      })}
      <BreadcrumbLink>{props.currentPage}</BreadcrumbLink>
    </Breadcrumb>
  );
};

BreadCrumb.PropTypes = {
  linkItems: PropTypes.array,
  currentPage: PropTypes.string.isRequired
};

BreadCrumb.defaultProps = {
  linkItems: []
};

export default BreadCrumb;
