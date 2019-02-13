import React, { useState } from "react";
import PropTypes from "prop-types";
import { View } from "@instructure/ui-layout";
import { Img } from "@instructure/ui-elements";
import { Text } from "@instructure/ui-elements";
import { Flex, FlexItem } from "@instructure/ui-layout";
import { Button } from "@instructure/ui-buttons";

import State from "./State";
import DetailsTray from "./DetailsTray";

const Tool = props => {
  const [open, setOpen] = useState(false);
  const date = new Date(props.tool.created_at).toLocaleDateString(navigator.language);

  const toggleTray = () => {
    setOpen(!open);
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
      height="300px"
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
                <State state={props.tool.workflow_state} />
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
        </FlexItem>
      </Flex>
      <DetailsTray tool={props.tool} open={open} onDismiss={toggleTray} date={date}/>
    </View>
  );
};

Tool.propTypes = {
  tool: PropTypes.object.isRequired
};

export default Tool;