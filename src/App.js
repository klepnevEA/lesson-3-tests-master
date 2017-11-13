import React, {Component} from 'react';
import './App.css';
import Step from './Step';
import PersonalForm from './PersonalForm';
import CardForm from './CardForm';

const stepTitles = ['Personal information', 'Card information', 'Finish'];

class App extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    isTimeOver: false,
  };


  handleTabClick = (step) => {
    this.setState({step});
  };

  handleChangeForm = (field, value) => {
    let temp = {};
    temp[field] = value;

    this.setState({...temp});
  };

  handleClickNextForm = () => {
    const {step} = this.state;

    this.setState({step: step+1});
  };

  handleChangeTimeOver = (value) => {
    this.setState({isTimeOver: value});
  };

  isFormCommitable = () => {
    if(this.state.step === 1) { 
      if(this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.email.includes('@')) {
        return true;
      } else {
        return false;
      }
    } else

    if(this.state.step === 2) {
      if(this.state.cardNumber.length === 16) {
        return true;
      } else {
        return false;
      }
    } else 

    if(this.state.step !== 1 | 2) {
      return false;
    }
  };

  renderForm = () => {
    if(this.state.step === 1) {
      return (
        <PersonalForm
          firstName={ this.state.firstName }
          lastName={ this.state.lastName }
          email={ this.state.email }
          onChangeForm={ this.handleChangeForm } />
      );
    };

    if(this.state.step === 2) {
      return (
        <CardForm
        cardNumber={ this.state.cardNumber }
        onChangeForm={ this.handleChangeForm }
        onChangeTimeOver={ this.handleChangeTimeOver } />
      );
    };

    if(this.state.step === 3) {
      return ('Поздравляем!');
    };
  };

  render() {

    return  <div className="container">
              <div className="tab-panel">
                
              {this.state.step === 1 && 
                  stepTitles.map((title, index) => (
                    <Step
                        key={ title }
                        number={ index+1 }
                        isSelected={ index === 0 ? true : false }
                        isClickable={ false }
                        onClick={ this.handleTabClick }>
                        { title }
                      </Step>
                  ))}

                  {this.state.step === 2 && 
                    stepTitles.map((title, index) => (
                      <Step
                        key={ title }
                        number={ index+1 }
                        isSelected={ index === 1 ? true : false }
                        isClickable={ index === 0 ? true : false }
                        onClick={ this.handleTabClick }>
                        { title }
                      </Step>
                    ))}

                    {this.state.step === 3 && 
                      stepTitles.map((title, index) => (
                        <Step
                          key={ title }
                          number={ index+1 }
                          isSelected={ index === 2 ? true : false }
                          isClickable={ index === 2 ? false : true }
                          onClick={ this.handleTabClick }>
                          { title }
                        </Step>
                      ))} 
              </div>


              <div className="form-content">
                {this.renderForm()}
              </div>
              
              <div className="button-panel">
                <button className="button-next"
                  disabled={ !this.isFormCommitable() || this.state.isTimeOver }
                  onClick={ this.handleClickNextForm }
                  >Next</button>
              </div>
            </div>;
  }
}

export default App;
