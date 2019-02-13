import React, { useState } from "react";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbLink } from "@instructure/ui-breadcrumb";

const BreadCrumb = props => {
  if (props.linkItems.length < 1) {
    return (
      <Breadcrumb size="large">
        <BreadcrumbLink>{props.currentPage}</BreadcrumbLink>
      </Breadcrumb>
    );
  }

  return (
    <Breadcrumb size="large">
      {props.linkItems.map(linkItem => {
        return (
          <BreadcrumbLink key={linkItem[0]} href={linkItem[0]}>
            {linkItem[1]}
          </BreadcrumbLink>
        );
      })}
      <BreadcrumbLink>{props.currentPage}</BreadcrumbLink>
    </Breadcrumb>
  );
};

BreadCrumb.propTypes = {
  linkItems: PropTypes.array,
  currentPage: PropTypes.string.isRequired
};

BreadCrumb.defaultProps = {
  linkItems: []
};

export default BreadCrumb;
