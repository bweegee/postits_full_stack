import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import PostIt from './PostIt';
import PostItForm from './PostItForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const PostIts = ({postits, toggleform, dispatch}) => (
  <div>
    {toggleform ? '' : <PostItForm />}
    <AddButt onClick={() => dispatch({type: 'TOGGLE_FORM'})}>
      <FontAwesomeIcon icon="plus" color="green" size="2x" />
    </AddButt>
    <NoiceHeader>Your PostIts</NoiceHeader>
    <br />
    <Grid>
      {postits.map(p => (
        <PostIt key={p.id} {...p} />
      ))}
    </Grid>
  </div>
);

const mapStateToProps = state => {
  return {postits: state.postits, toggleform: state.toggleform};
};

const Grid = styled.div`
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
  grid-gap: 35px;
  white-space: pre-wrap;
`;

const NoiceHeader = styled.h1`
  text-align: center;
  color: #ff00bc;
`;

const AddButt = styled.button`
  background: transparent;
  border: none;
`;

export default connect(mapStateToProps)(PostIts);
