import React, {PureComponent} from 'react';

import './Step.css';

class Step extends PureComponent {
  handleClick() {
    if (this.props.isClickable) {
      this.props.onClick(this.props.number);
    }
  }

  render() {
    const {number,children} = this.props;

    return (
      <div onClick={ this.handleClick }>
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}

export default Step;