import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@instructure/ui-buttons";
import { View } from "@instructure/ui-layout";
import { Spinner } from "@instructure/ui-elements";

const ApproveButton = props => {
  const [pendingRequest, setPendingRequest] = useState(false);

  const updateTool = () => {
    setPendingRequest(true);
    axios
      .put(props.updatePath.replace(":id", props.tool.id), {
        workflow_state: "approved"
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

  console.log(props);

  return (
    <Button
      fluidWidth
      variant="success"
      margin={props.margin}
      onClick={updateTool}
    >
      <View display="block" textAlign="center">
        {pendingRequest ? (
          <Spinner title="Creating" size="x-small" />
        ) : (
          "Approve"
        )}
      </View>
    </Button>
  );
};

ApproveButton.propTypes = {
  tool: PropTypes.object.isRequired,
  margin: PropTypes.string,
  updatePath: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired
};

ApproveButton.defaultProps = {
  margin: "none"
};

export default ApproveButton;
