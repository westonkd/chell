import React, { useState } from "react";
import PropTypes from "prop-types";

import { Flex, FlexItem } from "@instructure/ui-layout";
import { ToggleGroup } from "@instructure/ui-toggle-details";
import { View } from "@instructure/ui-layout";
import { TextArea } from "@instructure/ui-forms";
import { TextInput } from "@instructure/ui-forms";
import { Link } from "@instructure/ui-elements";

import ConfigPreview from "./ConfigPreview";

const CreateForm = props => {
  const [config, setConfig] = useState({});
  return (
    <Flex direction="column" margin="medium 0 0 0">
      <FlexItem>
        <form>
          <ToggleGroup
            toggleLabel="Tool Details"
            summary="Tool Details"
            background="default"
            defaultExpanded
          >
            <View display="block" padding="small">
              <TextInput label="Tool Name" />
              <br />
              <TextInput label="Logo URL" />
              <br />
              <TextInput type="email" label="Contact Email" />
              <br />
              <TextArea
                label="Redirect URIs (enter each URI on a new line)"
                maxHeight="10rem"
                placeholder="https://www.my-tool.com/redirect"
              />
              <br />
            </View>
          </ToggleGroup>

          <ToggleGroup
            toggleLabel="Tool Configuration"
            summary="Tool Configuration"
            background="default"
            margin="small 0 0 0"
          >
            <View display="block" padding="small">
              <TextArea
                label="JSON Configuration"
                maxHeight="10rem"
                onChange={e => setConfig(e.currentTarget.value)}
              />
              {Object.keys(config).length > 0 && (
                <ConfigPreview config={config} />
              )}
              See <Link href="http://www.instructure.com">docs</Link> for more
              information to JSON configurations
            </View>
          </ToggleGroup>

          <ToggleGroup
            toggleLabel="Submission Information"
            summary="Submission Information"
            background="default"
            margin="small 0 0 0"
          >
            <View display="block" padding="small">
              <TextInput label="Author Name" />
              <br />
              <TextInput label="Organization" />
              <br />
              <TextArea
                label="Installation Instructions (if needed)"
                maxHeight="10rem"
              />
              <br />
              <TextArea
                label="Testing Instructions"
                maxHeight="10rem"
              />
              <br />
              <TextArea
                label="Accessibility Documentation"
                maxHeight="10rem"
              />
              <br />
              <TextArea
                label="Security Information"
                maxHeight="10rem"
              />
              <br />
              <TextArea
                label="Special Installation Instructions"
                maxHeight="10rem"
              />
              <br />
              <TextArea
                label="Privacy Policy"
                maxHeight="10rem"
              />
              <br />
            </View>
          </ToggleGroup>
        </form>
      </FlexItem>
    </Flex>
  );
};

CreateForm.propTypes = {};

export default CreateForm;
