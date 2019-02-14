import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flex, FlexItem } from "@instructure/ui-layout";
import { Text } from '@instructure/ui-elements'
import { View } from '@instructure/ui-layout'
import { Billboard } from '@instructure/ui-billboard'
import IconStudentView from '@instructure/ui-icons/lib/Line/IconStudentView'
import IconCompose from '@instructure/ui-icons/lib/Line/IconCompose'
import IconBulletList from '@instructure/ui-icons/lib/Line/IconBulletList'

const Index = props => {
  console.log(props)
  return (
    <Flex direction="column">
      <FlexItem padding="xx-large 0 0 0" margin="xx-large 0 0 0">
        <View display="block" textAlign="center">
          <Text weight="normal"  size="x-large">Create and Magage Canvas Tools</Text>
        </View>
      </FlexItem>
      <FlexItem>
        <Flex justifyItems="space-between" margin="medium 0 0 0">
          <FlexItem width="32%">
            <Billboard
              heading="Learn"
              message="View Canvas API docs"
              href="https://api.instructure.com"
              hero={(size) => <IconStudentView size={size} />}
            />
          </FlexItem>
          <FlexItem width="32%">
            <Billboard
              heading="Create"
              message="Submit a new tool"
              href={props.applicationData.app.tool_create_path}
              hero={(size) => <IconCompose size={size} />}
            />
          </FlexItem>
          <FlexItem width="32%">
            <Billboard
              heading="Manage"
              message="View your existing tools"
              href={props.applicationData.app.tool_index_path}
              hero={(size) => <IconBulletList size={size} />}
            />
          </FlexItem>
        </Flex>
      </FlexItem>
    </Flex>
  );
};

Index.propTypes = {
  applicationData: PropTypes.shape({
    tool_index_path: PropTypes.string.isRequired,
    tool_create_path: PropTypes.string.isRequired
  })
};

export default Index;
