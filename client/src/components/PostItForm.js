import React from 'react';
import {connect} from 'react-redux';

class PostItForm extends React.Component {
  state = {note: ''};

  handleSubmit = e => {
    e.preventDefault();
    const {dispatch, id} = this.props;
    const {note} = this.state;
    const postit = {note, id};
    dispatch({type: 'ADD_POSTIT', postit});
    dispatch({type: 'INC_ID'});
    dispatch({type: 'TOGGLE_FORM'});
    this.setState({note: ''});
  };

  handleChange = e => {
    this.setState({note: e.target.value});
  };

  render() {
    const {note} = this.state;

    return (
      <div>
        <h3>New Post-It</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea type="textArea" value={note} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {id: state.nextId};
};

export default connect(mapStateToProps)(PostItForm);
