import React, { PureComponent } from "react";
import "./Step.css";

class Step extends PureComponent {
	handleClick = () => {
		{
			if (this.props.isClickable === true) {
        this.props.onClick(this.props.number);
      }
		}
	};
	render() {
		return (
			<div
				onClick={this.handleClick}
				id={this.props.number}
				className={
					"step" +
					(this.props.isSelected ? " step-selected" : "") +
					(this.props.isClickable ? " step-clickable" : "")
        }>
        
				<p className="step__number">{this.props.number}</p>
				<p className="step__title">{this.props.children}</p>
			</div>
		);
	}
}

export default Step;