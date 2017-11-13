import React, {Component} from 'react';
import Title from './Title';
import './PersonalForm.css';

export class PersonalForm extends Component {
  constructor() {
    super();

    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm(event) {
    const {
      onChangeForm
    } = this.props;

    onChangeForm(event.target.name, event.target.value);
  }

  render() {
    return (
      <div className="personal-form">
        <Title>Персональная информация</Title>
        <input value={ this.props.firstName } name="firstName" placeholder="firstName"
          onChange={this.handleChangeForm}
        />
        <input value={ this.props.lastName } name="lastName" placeholder="lastName"
          onChange={this.handleChangeForm}
        />
        <input value={ this.props.email } name="email" placeholder="email"
        onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default PersonalForm;
