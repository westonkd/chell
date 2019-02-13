import React from "react";
import PropTypes from "prop-types";
import { Pill } from '@instructure/ui-elements'

const variantMap = {
  reviewable: 'message',
  approved: 'primary',
  rejected: 'danger',
  published: 'success'
};

const nameMap = {
  reviewable: 'In Review',
  approved: 'Ready for Publish',
  rejected: 'Rejected',
  published: 'Published'
};

const State = props => {
  return (
    <Pill variant={variantMap[props.state]} text={nameMap[props.state]} />
  )
}

State.propTypes = {
  state: PropTypes.string.isRequired
}

export default State