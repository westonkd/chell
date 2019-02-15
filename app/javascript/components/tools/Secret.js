import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@instructure/ui-buttons";

const Secret = props => {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  if (hidden) {
    return (
      <Button
        variant="link"
        onClick={toggleHidden}
        margin="none"
        padding="none"
      >
        show secret
      </Button>
    );
  } else {
    return <code>{props.secret}</code>;
  }
};

Secret.propTypes = {
  secret: PropTypes.string.isRequired
};

export default Secret;
