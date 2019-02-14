import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@instructure/ui-buttons";
import { View } from "@instructure/ui-layout";
import { Spinner } from "@instructure/ui-elements";
import { Img } from "@instructure/ui-elements";
import { Tray } from "@instructure/ui-overlays";
import { Text } from "@instructure/ui-elements";
import { TextArea } from '@instructure/ui-forms';

const RejectButton = props => {
  const [open, setOpen] = useState(false);
  const [pendingRequest, setPendingRequest] = useState(false);
  const [reasonRejected, setReasonRejected] = useState("");

  const toggleOpen = () => {
    setOpen(!open);
  };

  const updateReasonRejected = (e) => {
    setReasonRejected(e.currentTarget.value)
  }

  const rejectTool = () => {
    setPendingRequest(true);
    axios
      .put(props.updatePath.replace(":id", props.tool.id), {
        workflow_state: "rejected",
        reason_rejected: reasonRejected
      })
      .then(response => {
        props.onSuccess();
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setPendingRequest(false);
      });
  };

  return (
    <View>
      <Button
        fluidWidth
        variant="danger"
        margin={props.margin}
        onClick={toggleOpen}
      >
        <View display="block" textAlign="center">
          Reject
        </View>
      </Button>
      <Tray
        label="Tray Example"
        open={open}
        onDismiss={toggleOpen}
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
            <View display="inline-block" margin="small 0 0 0" width="100%">
              <TextArea
                label="Reason for rejecting"
                width="100%"
                onChange={updateReasonRejected}
              />
            </View>
            <Button
              fluidWidth
              variant="danger"
              margin="small 0 0 0"
              onClick={rejectTool}
            >
              <View display="block" textAlign="center">
              {pendingRequest ? (
                <Spinner title="Creating" size="x-small" />
              ) : (
                "Reject"
              )}
              </View>
            </Button>
          </View>
        </View>
      </Tray>
    </View>
  );
};

RejectButton.propTypes = {
  tool: PropTypes.object.isRequired,
  margin: PropTypes.string,
  updatePath: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired
};

RejectButton.defaultProps = {
  margin: "none"
};

export default RejectButton;
