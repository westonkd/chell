import React, { useState } from "react";
import PropTypes from "prop-types";
import { View } from "@instructure/ui-layout";
import { Billboard } from '@instructure/ui-billboard'
import IconAdd from '@instructure/ui-icons/lib/Line/IconAdd'

const NewTool = props => {
  return (
    <View
      as="span"
      display="inline-block"
      margin="small small small xx-small"
      padding="none"
      background="default"
      shadow="resting"
      width="250px"
      height="360px"
    >
      <Billboard
        message="Create new tool"
        href={props.toolCreatePath}
        hero={(size) => <IconAdd size={size} />}
        margin="xx-large 0 0 0"
      />
    </View>
  );
};

NewTool.propTypes = {
  toolCreatePath: PropTypes.string.isRequired
};

export default NewTool;
