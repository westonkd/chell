import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@instructure/ui-buttons";
import { Spinner } from "@instructure/ui-elements";

const buttonTexts = ["Next", "Next", "Submit for Review"];

const SubmitButton = props => {
  const [pendingRequest, setPendingRequest] = useState(false);

  const advanceStep = () => {
    props.setStep(props.step + 1);
  };

  const submitTool = () => {
    setPendingRequest(true);
    axios
      .post(props.createEndpoint, props.params)
      .then(response => {

      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setPendingRequest(false);
      });
  };

  const clickHandlers = [advanceStep, advanceStep, submitTool];

  return (
    <Button
      variant="ghost"
      type="button"
      onClick={clickHandlers[props.step]}
      margin="small 0 x-large 0"
    >
      {pendingRequest ? (
        <Spinner title="Creating" size="x-small" />
      ) : (
        buttonTexts[props.step]
      )}
    </Button>
  );
};

SubmitButton.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  createEndpoint: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired
};

export default SubmitButton;
