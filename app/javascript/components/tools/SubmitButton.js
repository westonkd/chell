import React from "react";
import PropTypes from "prop-types";
import { Button } from "@instructure/ui-buttons";

const buttonTexts = ["Next", "Next", "Submit for Review"];

const SubmitButton = props => {
  const advanceStep = () => {
    props.setStep(props.step + 1);
  };

  const submitTool = () => {
    console.log('submitting', props.params)
  };

  const clickHandlers = [advanceStep, advanceStep, submitTool];

  return (
    <Button variant="ghost" type="button" onClick={clickHandlers[props.step]} margin="small 0 x-large 0">
      {buttonTexts[props.step]}
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
