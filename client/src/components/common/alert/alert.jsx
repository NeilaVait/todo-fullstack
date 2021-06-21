import React, { Component } from 'react';
import alertCss from './alert.module.css';

class SimpleAlert extends Component {
  render() {
    // if (!this.props.onOf) return '';
    return (
      <div className={alertCss.simpleAlert}>
        <p className={alertCss.errorMsg}>
          {this.props.children}
          <i onClick={this.props.hideAlert} className="fa fa-times"></i>
        </p>
      </div>
    );
  }
}

export default SimpleAlert;
