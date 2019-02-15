import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@instructure/ui-buttons";
import { View } from "@instructure/ui-layout";
import { Spinner } from "@instructure/ui-elements";

const DeleteButton = props => {
  const [pendingRequest, setPendingRequest] = useState(false);

  const updateTool = () => {
    setPendingRequest(true);
    axios
      .delete(props.updatePath.replace(":id", props.tool.id))
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
      variant="danger"
      margin={props.margin}
      onClick={updateTool}
    >
      <View display="block" textAlign="center">
        {pendingRequest ? (
          <Spinner title="Creating" size="x-small" />
        ) : (
          "Delete Key"
        )}
      </View>
    </Button>
  );
};

DeleteButton.propTypes = {
  tool: PropTypes.object.isRequired,
  margin: PropTypes.string,
  updatePath: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired
};

DeleteButton.defaultProps = {
  margin: "none"
};

export default DeleteButton;
