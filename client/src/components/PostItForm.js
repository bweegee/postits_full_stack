import React from 'react';
import {connect} from 'react-redux';
import { addPostIt, updatePostIt, } from '../reducers/postits'

class PostItForm extends React.Component {
  initialState = {
    note: '',
    color: 'yellow',
    important: false,
  }
  state = {...this.initialState};

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props, });
  }

  handleSubmit = e => {
    e.preventDefault();
    const {dispatch} = this.props;
    const postit = this.state;
    const func = this.props.id ? updatePostIt : addPostIt;
    dispatch(func(postit));
  };

  handleChange = e => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  };

  handleCheckChange = e => {
    this.setState({ important: !this.state.important })
  }

  render() {
    const { note, color, important } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="textArea"
            name="note"
            onChange={this.handleChange}
            label="Note"
            defaultValue={note}
          />
          <br />
          <label>
            Pick a color:
            <select
              name="color"
              onChange={this.handleChange}
              defaultValue={color}
            >
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="purple">Purple</option>
              <option value="blue">Blue</option>
              <option value="pink">Pink</option>
            </select>
          </label>
          <br />
          <label>
            Important:
            <input
              name="important"
              type="checkbox"
              checked={this.state.important}
              onChange={this.handleCheckChange}
              defaultValue={important}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <hr />
      </div>
    );
  }
}

export default connect()(PostItForm);
