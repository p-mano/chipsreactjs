import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Chip } from 'react-md';

export default class StateChip extends PureComponent {
  static propTypes = {
    state: PropTypes.shape({
      name: PropTypes.string.isRequired,
      abbreviation: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleRemove = () => {
    this.props.onClick(this.props.state);
  };

  render() {
    const { state: { name, abbreviation }, ...props } = this.props;
    return (
      <Chip
        {...props}
        onClick={this.handleRemove}
      
        label={name}
        avatar={<Avatar>{abbreviation}</Avatar>}
      />
    );
  }
}