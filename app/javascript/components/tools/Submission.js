import React from "react";
import PropTypes from "prop-types";
import { Flex, FlexItem } from "@instructure/ui-layout";
import { TextArea } from "@instructure/ui-forms";
import { TextInput } from "@instructure/ui-forms";

const Submission = props => {
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
        <Flex justifyItems="space-between" margin="0 0 small 0">
          <FlexItem width="49%">
            <TextInput label="Author Name" name="author_name" onChange={addParam}/>
          </FlexItem>
          <FlexItem width="49%">
            <TextInput label="Organization" name="organization" onChange={addParam}/>
          </FlexItem>
        </Flex>
        <TextArea
          label="Testing Instructions"
          maxHeight="10rem"
          name="testing_instructions"
          onChange={addParam}
        />
        <br />
        <TextArea
          label="Accessibility Documentation"
          maxHeight="10rem"
          name="accessibility_documentation"
          onChange={addParam}
        />
        <br />
        <TextArea
          label="Security Information"
          maxHeight="10rem"
          name="security_information"
          onChange={addParam}
        />
        <br />
        <TextArea
          label="Special Installation Instructions"
          maxHeight="10rem"
          name="installation_instructions"
          onChange={addParam}
        />
        <br />
        <TextArea
          label="Privacy Policy"
          maxHeight="10rem"
          name="privacy_policy"
          onChange={addParam}
        />
      </FlexItem>
    </Flex>
  );
};

Submission.PropTypes = {
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired
};

export default Submission;
