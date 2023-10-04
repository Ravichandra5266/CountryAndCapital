import { Component } from "react";
import "./index.css";

const initialData = [
  { id: 0, text: "Select Capital", value: "" },
  { id: 1, text: "New Delhi", value: "India" },
  { id: 2, text: "London", value: "Uk" },
  { id: 3, text: "Paris", value: "France" },
  { id: 4, text: "Katmandu", value: "Nepal" },
];

class CountryApp extends Component {
  state = {
    countyValue: "",
  };
  onChangeValue = (event) => {
    this.setState({
      countyValue: event.target.value,
    });
  };
  render() {
    const { countyValue } = this.state;
    return (
      <div className="container">
        <h1>Countries And Capitals</h1>
        <div className="input-card">
          <select value={countyValue} onChange={this.onChangeValue}>
            {initialData.map((each) => {
              return (
                <option key={each.id} value={each.value}>
                  {each.text}
                </option>
              );
            })}
          </select>
          <span>Is Capital Of Which Country?</span>
          <h1 className="title">{countyValue}</h1>
        </div>
      </div>
    );
  }
}
export default CountryApp;
