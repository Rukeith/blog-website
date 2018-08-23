import React, { Component } from 'react';
import './style.scss';

class TagsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      input: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleInputChange(evt) {
    console.log('0-----------------');
    this.setState({ input: evt.target.value });
  }

  handleInputKeyDown(evt) {
    console.log('1-----------');
    if (evt.keyCode === 13) {
      const { value } = evt.target;

      this.setState(state => ({
        items: [...state.items, value],
        input: ''
      }));
    }
    const { items, input } = this.state;

    if (items.length && evt.keyCode === 8 && !input.length) {
      this.setState(state => ({
        items: state.items.slice(0, state.items.length - 1),
      }));
    }
  }

  handleRemoveItem(index) {
    return () => {
      this.setState(state => ({
        items: state.items.filter((item, i) => i !== index),
      }));
    };
  }

  render() {
    const { items, input } = this.state;
    console.log('bbbbb');
    return (
      <form
        id="create-tag-form"
        acceptCharset="utf-8"
        onSubmit={this.createTag}
      >
        <label id="create-tags" htmlFor="create-tags-input">
          <ul>
            {
              items.map((item, i) => (
                <li key={item}>
                  {item}
                  <span
                    role="button"
                    tabIndex={i}
                    onKeyUp={this.handleRemoveItem(i)}
                  >
                    (x)
                  </span>
                </li>
              ))
            }
            <input
              required
              type="text"
              value={input}
              id="create-tags-input"
              placeholder="Create new tags"
              onChange={this.handleInputChange}
              onKeyDown={this.handleInputKeyDown}
            />
          </ul>
        </label>
        <button type="submit" className="create-tag-btn">Create</button>
      </form>
    );
  }
}

export default TagsInput;
