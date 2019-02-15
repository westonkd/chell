import React from "react";
import PropTypes from "prop-types";
import { Tray } from "@instructure/ui-overlays";
import { View } from "@instructure/ui-layout";
import { Text } from "@instructure/ui-elements";
import { Img } from "@instructure/ui-elements";
import { TextArea } from "@instructure/ui-forms";

import Secret from "./Secret";
import DeleteButton from "./DeleteButton"

const DetailsTray = props => {
  const reasonRejected = () => {
    return (
      <div>
        <Text>Reason Rejected</Text>
        <Text size="small" color="secondary">
          {props.tool.reason_rejected}
        </Text>
      </div>
    );
  };

  const redirectURIs = () => {
    return (
      <div>
        <Text>Redirect URIs</Text><br />
        <code>{props.tool.redirect_uris.join("\n")}</code>
      </div>
    );
  };

  const jsonConfig = () => {
    return (
      <div>
        <Text>JSON Configuration</Text>
        <TextArea
          maxHeight="20rem"
          defaultValue={JSON.stringify(props.tool.json_config)}
          width="300px"
        />
      </div>
    );
  };

  const keys = () => {
    return (
      <div>
        <Text>Client ID</Text><br />
        <code>{props.tool.client_id}</code><br />
        <Text>Client Secret</Text><br />
        <Secret secret={props.tool.client_secret} />
      </div>
    );
  };

  const deleteButton = () => {
    return (
      <DeleteButton tool={props.tool} updatePath={props.updatePath} onSuccess={() => {window.location.reload()}} margin="small 0 0 0" />
    )
  }

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
          <Text size="large">{props.tool.name}</Text><br />
          <Text color="secondary">{`Created ${props.date}`}</Text>
          <View display="inline-block" margin="small 0 0 0">
            {props.tool.workflow_state === "rejected" && reasonRejected()}
            {redirectURIs()}
            {props.tool.workflow_state === "published" && keys()}
            {jsonConfig()}
            {deleteButton()}
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
  date: PropTypes.string.isRequired,
  updatePath: PropTypes.string.isRequired,
};

export default DetailsTray;
