import React from "react";
import { Container } from "@material-ui/core";
import ButtonComponent from "./Button";
import OutputScreen from "./outputScreen";
import { Helmet } from "react-helmet";
import Button from '@material-ui/core/Button';
import OperationHistory from './OperationHistory';

class CalculatorExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      operationHistory: []
    };
  }

  handleClick = (event) => {
    const value = event.target.value;

    switch (value) {
      case "=": {
        if (this.state.question !== "") {
          var ans = "";
          try {
            ans = eval(this.state.question);
          } catch (err) {
            this.setState({ answer: "Math Error" });
          }
          if (ans === undefined) {
            this.setState({ answer: "Math Error" });
          } else {
            var { operationHistory } = this.state;
            var obj = { name: this.props?.location?.state?.username, expression: this.state.question, output: ans  }
            operationHistory.push(obj)
            this.setState({ operationHistory })

            //update answer in our state
            this.setState({ answer: ans, question: "" });
          }
          break;
        }
      }

      case "Clear": {
        this.setState({ question: "", answer: "" });
        break;
      }

      case "Delete": {
        var str = this.state.question;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str });
        break;
      }

      default: {
        let quest = this.state.question;
        this.setState({ question: (quest += value) });
        break;
      }
    }
  };

  render() {
    const operationArr = ["Clear", "Delete", ".", "/", "*", "-", "+", "="];
    const buttnArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    console.log('operationHistory', this.state.operationHistory)
    return (
      <React.Fragment>
        <Helmet>
          <title>Calculator</title>
        </Helmet>
        <Container align="center">
          <h2>{this.props?.location?.state?.username}</h2>
          <br />
          <OutputScreen
            question={this.state.question}
            answer={this.state.answer}
          />
          <br />
          <div>
            {operationArr.map((opt, i) => {
              return (
                <>
                  <ButtonComponent
                    key={opt}
                    handleClick={() => this.handleClick}
                    label={opt}
                  />
                  &nbsp;
                </>
              );
            })}
          </div>
          <br />
          <div>
            {buttnArr.map((val, index) => {
              return (
                <>
                  <ButtonComponent
                    key={val}
                    handleClick={() => this.handleClick}
                    label={val}
                  />
                  &nbsp;{index % 3 === 0 ? <br /> : null}
                </>
              );
            })}
          </div>
          <Button color="primary" onClick={() => window.location = '/'}>logout</Button>
          <OperationHistory expArray={this.state.operationHistory} />
        </Container>
      </React.Fragment>
    );
  }
}

export default CalculatorExample;
