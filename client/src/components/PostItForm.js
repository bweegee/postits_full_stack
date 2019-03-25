import React from 'react';
import {connect} from 'react-redux';

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
    const {postit} = this.state;
    dispatch({type: 'ADD_POSTIT', postit});
    dispatch({type: 'INC_ID'});
    dispatch({type: 'TOGGLE_FORM'});
    // const func
  };

  handleChange = e => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  };

  handleClickChange = e => {
    this.setState({ important: !this.state.important })
  }

  render() {
    const { note, color, important } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="textArea"
            value={note}
            onChange={this.handleChange}
            label="Note"
          />
          <br />
          <label>
            Pick a color:
            <select
              name={color}
              onChange={this.handleChange}
              value={this.state.color}
            >
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
              name={ important }
              type="checkbox"
              checked={this.state.important}
              onChange={this.handleClickChange}
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
