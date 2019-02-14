import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flex, FlexItem } from "@instructure/ui-layout";

import SubmitButton from "./SubmitButton"
import Details from "./Details"
import Configuration from "./Configuration"
import Submission from "./Submission"

const steps = [Details, Configuration, Submission];

const Form = props => {
  const [params, setParams] = useState({});
  const [step, setStep] = useState(0);
  const StepComponent = steps[step];

  return (
    <Flex direction="column" margin="x-large 0 0 0">
      <FlexItem>
          <StepComponent params={params} setParams={setParams} />
          <Flex justifyItems="end" margin="0 small 0 0" >
            <FlexItem>
              <SubmitButton step={step} setStep={setStep} createEndpoint={props.createEndpoint} params={params} redirectUrl={props.redirectUrl}/>
            </FlexItem>
          </Flex>
      </FlexItem>
    </Flex>
  )
};

Form.propTypes = {
  redirectUrl: PropTypes.string.isRequired,
  createEndpoint: PropTypes.string.isRequired
};

export default Form;