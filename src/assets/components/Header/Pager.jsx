import React, { Component, createRef } from 'react';
import './header.css';

export default class Pager extends Component {
  constructor() {
    super();
    this.buttonRefs = {
      todo: createRef(),
      done: createRef(),
      trash: createRef(),
    };
  }
  handleButtonClick = (clickedButton) => {
    Object.values(this.buttonRefs).forEach((ref) => {
      ref.current.classList.remove('active-btn');
    });

    this.buttonRefs[clickedButton].current.classList.add('active-btn');
  };
  render() {
    const {changeFocusedBtn} = this.props;
    return (
      <div className="pager">
        <button
          ref={this.buttonRefs.todo}
          className="pager-btn active-btn"
          onClick={() => {
            this.handleButtonClick('todo')
            changeFocusedBtn('ToDo')
          }}
        >
          To Do
        </button>
        <button
          ref={this.buttonRefs.done}
          className="pager-btn"
          onClick={() => {
            this.handleButtonClick('done')
            changeFocusedBtn('Done')
          }}
        >
          Done
        </button>
        <button
          ref={this.buttonRefs.trash}
          className="pager-btn"
          onClick={() => {
            this.handleButtonClick('trash')
            changeFocusedBtn('Trash')
          }}
        >
          Trash
        </button>
      </div>
    );
  }
}
