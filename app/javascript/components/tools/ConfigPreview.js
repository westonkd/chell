import React, { useState } from "react";
import PropTypes from "prop-types";

import { Flex, FlexItem } from "@instructure/ui-layout";
import { Table } from '@instructure/ui-elements';
import { ScreenReaderContent } from '@instructure/ui-a11y';
import { Tag } from '@instructure/ui-elements'

const ConfigPreview = props => {
  let parsedConfig = {}

  try {
    parsedConfig = JSON.parse(props.config);
  } catch(e) {
      //TODO: warming message
  }

  return (
    <Flex direction="column" margin="small 0 0 0">
      <FlexItem>
        <Table
          caption={<ScreenReaderContent>Tool Configuration Preview</ScreenReaderContent>}
        >
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{parsedConfig.title}</td>
            </tr>
            <tr>
              <th scope="row">Primary Launch URL</th>
              <td>{parsedConfig.launch_url}</td>
            </tr>
            <tr>
              <th scope="row">OIDC Login URI</th>
              <td>{parsedConfig.oidc_login_uri}</td>
            </tr>
            <tr>
              <th scope="row">Scopes</th>
              <td>{parsedConfig.scopes && parsedConfig.scopes.map((scope) => (<div><code>{scope}</code></div>))}</td>
            </tr>
          </tbody>
        </Table>
      </FlexItem>
    </Flex>
  );
};

ConfigPreview.propTypes = {
  config: PropTypes.object.isRequired
};

export default ConfigPreview;
