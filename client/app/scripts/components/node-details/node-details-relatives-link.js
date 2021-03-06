import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { clickRelative } from '../../actions/app-actions';

class NodeDetailsRelativesLink extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    ev.preventDefault();
    this.props.dispatch(clickRelative(this.props.id, this.props.topologyId,
      this.props.label, ReactDOM.findDOMNode(this).getBoundingClientRect()));
  }

  render() {
    const title = `View in ${this.props.topologyId}: ${this.props.label}`;
    return (
      <span className="node-details-relatives-link" title={title} onClick={this.handleClick}>
        {this.props.label}
      </span>
    );
  }
}

export default connect()(NodeDetailsRelativesLink);
