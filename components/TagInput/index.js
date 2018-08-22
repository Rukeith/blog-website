import React, { Component } from 'react';

export default class TagInput extends Component {
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
    this.setState({
      input: evt.target.value,
    });
  }

  handleInputKeyDown(evt) {
    if (evt.keyCode === 13) {
      const { value } = evt.target;

      this.setState(state => ({
        items: [...state.items, value],
        input: '',
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
    const styles = {
      container: {
        border: '1px solid #ddd',
        padding: '5px',
        borderRadius: '5px',
      },
      items: {
        display: 'inline-block',
        padding: '2px',
        border: '1px solid blue',
        fontFamily: 'Helvetica, sans-serif',
        borderRadius: '5px',
        marginRight: '5px',
        cursor: 'pointer',
      },
      input: {
        outline: 'none',
        border: 'none',
        fontSize: '14px',
        fontFamily: 'Helvetica, sans-serif',
      },
    };

    const { items, input } = this.state;

    return (
      <label>
        <ul style={styles.container}>
          {
            items.map((item, i) =>
              <li
                key={i}
                style={styles.items}
                onClick={this.handleRemoveItem(i)}>
                {item}
                <span>(x)</span>
              </li>
            )
          }
          <input
            style={styles.input}
            value={input}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
          />
        </ul>
      </label>
    );
  }
}
