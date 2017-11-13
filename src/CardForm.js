import React, {Component} from 'react';
import Title from './Title';
import './CardForm.css';

export class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftTime: 120
    };

    props.onChangeTimeOver(false);

    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  componentDidMount() {
    this.id = setInterval(function() {
      const leftTime = Math.max(this.state.leftTime - 1, 0);
      if (leftTime === 0 && this.state.leftTime === 1) {
        this.props.onChangeTimeOver(true);
        clearInterval(this.id);
      }
      this.setState({leftTime});
    }.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  handleChangeForm(event) {
    const {
      onChangeForm
    } = this.props;

    onChangeForm(event.target.name, event.target.value);
  }

  render() {
    const {
      leftTime
    } = this.state;

    return (
      <div className="card-form">
        <Title>Номер карты</Title>
        <p className="left-time">Осталось {leftTime} секунд</p>
        <input value={ this.propscardNumber } name="cardNumber" placeholder="0000000000000000"
        onChange={ this.handleChangeForm } />
      </div>
    );
  }
}

export default CardForm;