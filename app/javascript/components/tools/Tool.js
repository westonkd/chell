import React, { useState } from "react";
import PropTypes from "prop-types";
import { View } from "@instructure/ui-layout";
import { Img } from "@instructure/ui-elements";
import { Text } from "@instructure/ui-elements";
import { Flex, FlexItem } from "@instructure/ui-layout";
import { Button } from "@instructure/ui-buttons";

import State from "./State";
import DetailsTray from "./DetailsTray";
import ApproveButton from "./ApproveButton";
import PublishButton from "./PublishButton";
import RejectButton from "./RejectButton";

const Tool = props => {
  const [open, setOpen] = useState(false);
  const [workflowState, setWorkflowState] = useState(props.tool.workflow_state);

  const date = new Date(props.tool.created_at).toLocaleDateString(
    navigator.language
  );

  const toggleTray = () => {
    setOpen(!open);
  };

  const approveTool = () => {
    setWorkflowState("approved");
  };

  const publishTool = () => {
    setWorkflowState("published");
  };

  const rejectTool = () => {
    setWorkflowState("rejected");
  };

  return (
    <View
      as="span"
      display="inline-block"
      margin="small small small xx-small"
      padding="none"
      background="default"
      shadow="resting"
      width="250px"
      height={props.siteAdmin ? "410px" : "360px"}
    >
      <Img
        src={props.tool.logo_url}
        alt={props.tool.name}
        width="100%"
        height="100px"
        constrain="cover"
      />
      <Flex padding="small x-small" direction="column">
        <FlexItem>
          <Text size="large">{props.tool.name}</Text>
          <br />
          <Text color="secondary">{`Created ${date}`}</Text>
        </FlexItem>
        <FlexItem>
          <div style={{ borderTop: "solid 1px #CBCBCB" }}>
            <Flex justifyItems="center" margin="medium 0">
              <FlexItem>
                <State state={workflowState} />
              </FlexItem>
            </Flex>
          </div>
        </FlexItem>
        <FlexItem padding="small">
          <Button fluidWidth variant="ghost" onClick={toggleTray}>
            <View display="block" textAlign="center">
              View Details
            </View>
          </Button>
          {workflowState === "reviewable" &&
            props.siteAdmin && (
              <div>
                <ApproveButton
                  tool={props.tool}
                  margin="small 0 0 0"
                  updatePath={props.updatePath}
                  onSuccess={approveTool}
                />
                <RejectButton
                  tool={props.tool}
                  margin="small 0 0 0"
                  updatePath={props.updatePath}
                  onSuccess={rejectTool}
                />
              </div>
            )}
          {workflowState === "approved" &&
            !props.siteAdmin && (
              <PublishButton
                tool={props.tool}
                margin="small 0 0 0"
                publishPath={props.publishPath}
                onSuccess={publishTool}
              />
            )}
        </FlexItem>
      </Flex>
      <DetailsTray
        tool={props.tool}
        open={open}
        onDismiss={toggleTray}
        date={date}
        updatePath={props.updatePath}
      />
    </View>
  );
};

Tool.propTypes = {
  tool: PropTypes.object.isRequired,
  siteAdmin: PropTypes.bool.isRequired,
  updatePath: PropTypes.string.isRequired,
  publishPath: PropTypes.string.isRequired
};

export default Tool;
