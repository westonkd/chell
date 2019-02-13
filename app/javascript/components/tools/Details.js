import React from "react";
import PropTypes from "prop-types";
import { Flex, FlexItem } from "@instructure/ui-layout";
import { TextArea } from "@instructure/ui-forms";
import { TextInput } from "@instructure/ui-forms";

const Details = props => {
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
        <Flex direction="row" justifyItems="space-between">
          <FlexItem size="49%">
            <TextInput label="Tool Name" name="name" onChange={addParam} />
          </FlexItem>
          <FlexItem size="49%">
            <TextInput label="Logo URL" name="logo_url" onChange={addParam} />
          </FlexItem>
        </Flex>
        <br />
        <TextInput
          type="email"
          label="Contact Email"
          name="email"
          onChange={addParam}
        />
        <br />
        <TextArea
          label="Redirect URIs (enter each URI on a new line)"
          maxHeight="10rem"
          placeholder="https://www.my-tool.com/redirect"
          name="redirect_uris"
          onChange={addParam}
        />
      </FlexItem>
    </Flex>
  );
};

Details.PropTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired
};

export default Details;
