import React from "react";
import PropTypes from "prop-types";
import { Flex, FlexItem } from "@instructure/ui-layout";
import { TextArea } from "@instructure/ui-forms";
import { Link } from "@instructure/ui-elements";

const Configuration = props => {
  const addParam = e => {
    const target = e.currentTarget;
    const newParams = props.params;
    newParams[target.name] = target.value;
    props.setParams(newParams);
    console.log(props.params);
  };

  return (
    <Flex direction="column" margin="medium 0 0 0">
      <FlexItem padding="small">
        <TextArea
          label="JSON Configuration"
          maxHeight="10rem"
          name="json_config"
          onChange={addParam}
          margin="0 0 small 0"
        />
        See <Link href="http://www.instructure.com">docs</Link> for more
        information to JSON configurations
      </FlexItem>
    </Flex>
  );
};

Configuration.PropTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired
};

export default Configuration;
