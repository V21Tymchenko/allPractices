import { Component, ReactNode } from "react";

export default class MyForm extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };
  handleSubmitForm = e => {
    e.preventDefault();
    console.dir(e.target.elements.name.value);
    console.log(this.state);
  };
  handleChangeForm = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render(): ReactNode {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangeForm}
          />
        </label>
        <label>
          Phone
          <input
            type="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChangeForm}
          />
        </label>
        <label>
          Email
          <input
            type="mail"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeForm}
          />
        </label>
        <button type="submit">Відправити</button>
      </form>
    );
  }
}
