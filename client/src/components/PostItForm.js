import React from 'react';
import {connect} from 'react-redux';
import { addPostIt, updatePostIt, } from '../reducers/postits'

class PostItForm extends React.Component {
  initialState = {
    note: '',
    color: '#deff00',
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
              <option value="#deff00">Yellow</option>
              <option value="#03ff00">Green</option>
              <option value="#8500ff">Purple</option>
              <option value="#00cdff">Blue</option>
              <option value="#ff00bc">Pink</option>
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

// const mapStateToProps = state => {
//   return {id: state.nextId};
// };

export default connect()(PostItForm);
