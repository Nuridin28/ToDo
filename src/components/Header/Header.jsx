import React, { Component } from "react";
import Title from "./Title";
import Pager from "./Pager";
import AddButton from "./AddButton";
import "./header.css";
import Menu from "../Menu/Menu";

class Header extends Component {
  state = {
    isAdd: false,
  };
  handleClick = () => {
    this.setState({ isAdd: !this.state.isAdd });
  };
  render() {
    return (
      <header className="header mt-5">
        <Title />
        <div className="btns">
          <Pager changeFocusedBtn = {this.props.changeFocusedBtn} />
          {this.state.isAdd ? <Menu /> : ""}
          <AddButton handleClick={this.handleClick} />
        </div>
      </header>
    );
  }
}

export default Header;
