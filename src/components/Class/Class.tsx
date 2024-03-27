import { Component, ReactNode } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";


type State = {
  value: number;
};
export default class MyClass extends Component<{}, State> {
  state = {
    value: 1,
    // array: [],
  };

  // async componentDidMount() {
  //   const response = await axios.get("/search?query=react");
  //   this.setState({ array: response.data.hits });
  //   console.log("array", this.state.array);
  // }

  handleChangeValue = (type: string) => {
    switch (type) {
      case "increment":
        return this.setState(prevState => ({ value: prevState.value + 1 }));
      case "decrement":
        return this.setState(prevState => ({ value: prevState.value - 1 }));
      default:
        return this.state;
    }
  };

  render(): ReactNode {
    return (
      <div>
        <p>{this.state.value}</p>
        <button
          type="button"
          onClick={() => this.handleChangeValue("increment")}
        >
          Додати
        </button>
        <button
          type="button"
          onClick={() => this.handleChangeValue("decrement")}
        >
          Відняти
        </button>
      </div>
    );
  }
}
