import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const PostIt = ({id, note, dispatch}) => (
  <Container>
    <NoiceDiv>
      <h4>{note}</h4>
      <br />
    </NoiceDiv>
    <ButtDiv>
      <ActionButts>
        <FontAwesomeIcon icon="edit" />
      </ActionButts>
      <ActionButts onClick={() => dispatch({type: 'DELETE_POSTIT', id})}>
        <FontAwesomeIcon icon="trash-alt" color="red" />
      </ActionButts>
    </ButtDiv>
  </Container>
);

// styled components
const NoiceDiv = styled.div`
  text-align: center;
  padding: 5px;
  border: solid 1px black
  background: #deff00;
  width: 233px;
  height: 233px;
`;
const ButtDiv = styled.div`
  text-align: right;
`;

const ActionButts = styled.button`
  text-align: right;
  text-decoration: none;
  border: none;
`;

const Container = styled.div`
  margin: 0;
  padding: 10px;
`;
export default connect()(PostIt);
