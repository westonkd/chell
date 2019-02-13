import React, { useState } from "react";
import PropTypes from "prop-types";

import { Flex, FlexItem } from "@instructure/ui-layout";
import { ToggleGroup } from "@instructure/ui-toggle-details";
import { View } from "@instructure/ui-layout";
import { TextArea } from "@instructure/ui-forms";
import { TextInput } from "@instructure/ui-forms";
import { Link } from "@instructure/ui-elements";
import { Button } from '@instructure/ui-buttons'

import ConfigPreview from "./ConfigPreview";

const CreateForm = props => {
  const [config, setConfig] = useState({});

  return (
    <Flex direction="column" margin="medium 0 0 0">
      <FlexItem>
        <form action={props.createEndpoint} method="post">
          <ToggleGroup
            toggleLabel="Tool Details"
            summary="Tool Details"
            background="default"
            expanded
          >
            <View display="block" padding="small">
              <TextInput label="Tool Name" name="name" />
              <br />
              <TextInput label="Logo URL" name="logo_url" />
              <br />
              <TextInput type="email" label="Contact Email" name="email" />
              <br />
              <TextArea
                label="Redirect URIs (enter each URI on a new line)"
                maxHeight="10rem"
                placeholder="https://www.my-tool.com/redirect"
                name="redirect_uris"
              />
              <br />
            </View>
          </ToggleGroup>

          <ToggleGroup
            toggleLabel="Tool Configuration"
            summary="Tool Configuration"
            background="default"
            margin="small 0 0 0"
            expanded
          >
            <View display="block" padding="small">
              <TextArea
                label="JSON Configuration"
                maxHeight="10rem"
                name="json_config"
              />
              See <Link href="http://www.instructure.com">docs</Link> for more
              information to JSON configurations
            </View>
          </ToggleGroup>

          <ToggleGroup
            toggleLabel="Submission Information"
            summary="Submission Information"
            background="default"
            margin="small 0 0 0"
            expanded
          >
            <View display="block" padding="small">
              <TextInput label="Author Name" name="author_name"/>
              <br />
              <TextInput label="Organization" name="organization"/>
              <br />
              <TextArea
                label="Testing Instructions"
                maxHeight="10rem"
                name="testing_instructions"
              />
              <br />
              <TextArea
                label="Accessibility Documentation"
                maxHeight="10rem"
                name="accessibility_documentation"
              />
              <br />
              <TextArea
                label="Security Information"
                maxHeight="10rem"
                name="security_information"
              />
              <br />
              <TextArea
                label="Special Installation Instructions"
                maxHeight="10rem"
                name="installation_instructions"
              />
              <br />
              <TextArea
                label="Privacy Policy"
                maxHeight="10rem"
                name="privacy_policy"
              />
              <br />
            </View>
          </ToggleGroup>
          <Flex justifyItems="end">
            <FlexItem>
              <Button variant="ghost" type="submit" margin="small 0 x-large 0">Submit for Review</Button>
            </FlexItem>
          </Flex>
        </form>
      </FlexItem>
    </Flex>
  );
};

CreateForm.propTypes = {
  createEndpoint: PropTypes.string.isRequired
};

export default CreateForm;
