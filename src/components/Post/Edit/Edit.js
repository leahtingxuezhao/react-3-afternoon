import React, { Component } from "react";

import "./Edit.css";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *POST* COMPONENT

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      id: this.props.id,
    };
  }

  updateText(value) {
    this.setState({ text: value });
  }

  updatePostFunc = () => {
    this.props.updatePost(this.state.id, this.state.text);
    this.props.hideEdit();
  };

  render() {
    // More destructuring!
    const { hideEdit } = this.props;
    const { text, id } = this.state;
    console.log(this.state.text);

    return (
      <section className="Edit__parent">
        {/* This is the input field where you can edit the text */}
        <textarea
          className="Edit__textarea"
          value={text}
          onChange={(e) => this.updateText(e.target.value)}
          placeholder={text}
        ></textarea>

        <div className="Edit__controls">
          {/* This saves your changes made */}
          <button
            id="Edit__controls-update"
            className="Edit__control-btn"
            onClick={this.updatePostFunc}
          >
            Update
          </button>

          {/* This cancels the edit mode and does not save changes. Remember the "hideEdit" method was passed down through props */}
          <button
            id="Edit__controsl-cancel"
            className="Edit__control-btn"
            onClick={hideEdit}
          >
            Cancel
          </button>
        </div>
      </section>
    );
  }
}
