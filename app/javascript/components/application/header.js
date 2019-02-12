import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "@instructure/ui-buttons";
import { Flex, FlexItem } from "@instructure/ui-layout";
import { Heading } from "@instructure/ui-elements";
import { Avatar } from "@instructure/ui-elements";
import { Menu, MenuItem } from "@instructure/ui-menu";
import { Link } from "@instructure/ui-elements";

const Header = props => {
  return (
    <Flex margin="small 0 0 0">
      <FlexItem grow shrink padding="none medium none none">
        <Heading margin="0 0 0 0" level="h1" as="h2">
          Canvas Developer Portal
        </Heading>
      </FlexItem>
      <FlexItem>
        {props.user.avatar_url ? (
          <Menu
            placement="bottom"
            trigger={
              <Button variant="link">
                <Avatar name={props.user.name} src={props.user.avatar_url} />
              </Button>
            }
            mountNode={() => {
              document.querySelector("main");
            }}
          >
            <MenuItem href={props.app.signout_path}>Logout</MenuItem>
          </Menu>
        ) : (
          <Link href={props.app.signin_path}>Sign In</Link>
        )}
      </FlexItem>
    </Flex>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  app: PropTypes.shape({
    signout_path: PropTypes.string.isRequired,
    signin_path: PropTypes.string.isRequired
  })
};

export default Header;
