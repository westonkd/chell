import React from "react";
import PropTypes from "prop-types";
import { Tray } from "@instructure/ui-overlays";
import { View } from "@instructure/ui-layout";
import { Text } from "@instructure/ui-elements";
import { Img } from "@instructure/ui-elements";
import { TextArea } from "@instructure/ui-forms";

import Secret from "./Secret"

const DetailsTray = props => {
  const reasonRejected = () => {
    return (
      <div>
        <Text>Reason Rejected</Text>
        <br />
        <Text size="small" color="secondary">
          {props.tool.reason_rejected}
        </Text>
        <br />
        <br />
      </div>
    );
  };

  const redirectURIs = () => {
    return (
      <div>
        <Text>Redirect URIs</Text>
        <br />
        <code>{props.tool.redirect_uris.join("\n")}</code>
        <br />
        <br />
      </div>
    );
  };

  const jsonConfig = () => {
    return (
      <div>
        <Text>JSON Configuration</Text>
        <br />
        <TextArea
          maxHeight="20rem"
          defaultValue={JSON.stringify(props.tool.json_config)}
        />
        <br />
      </div>
    );
  };

  const keys = () => {
    return (
      <div>
        <Text>Client ID</Text>
        <br />
        <code>{props.tool.client_id}</code>
        <br />
        <br />
        <Text>Client Secret</Text>
        <br />
        <Secret secret={props.tool.client_secret} />
      </div>
    );
  };

  return (
    <Tray
      label="Tray Example"
      open={props.open}
      onDismiss={props.onDismiss}
      placement="end"
      shouldCloseOnDocumentClick
    >
      <View padding="none">
        <Img
          src={props.tool.logo_url}
          alt={props.tool.name}
          width="100%"
          height="200px"
          constrain="cover"
        />
        <View padding="small" display="inline-block">
          <Text size="large">{props.tool.name}</Text>
          <br />
          <Text color="secondary">{`Created ${props.date}`}</Text>
          <View display="inline-block" margin="small 0 0 0">
            {props.tool.workflow_state === "rejected" && reasonRejected()}
            {redirectURIs()}
            {jsonConfig()}
            {props.tool.workflow_state === "published" && keys()}
          </View>
        </View>
      </View>
    </Tray>
  );
};

Tray.propTypes = {
  tool: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired
};

export default DetailsTray;
