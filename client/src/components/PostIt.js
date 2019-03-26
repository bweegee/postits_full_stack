import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const PostIt = ({note, color, important, dispatch}) => (
  <Container>
    <NoiceDiv bg={color}>
      <h4>{note}</h4>
      <br />
    </NoiceDiv>
    <ButtDiv>
      <ActionButts>
        <FontAwesomeIcon icon="edit" />
      </ActionButts>
      <ActionButts>
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
  width: 233px;
  height: 233px;
  background: ${props => noteColor(props.bg)} !important;
  `;

const noteColor = (bg) => {
  switch(bg) {
    case 'yellow':
      return '#deff00';
    case 'green':
      return '#03ff00';
    case 'purple':
      return '#8500ff';
    case 'blue':
      return '#00cdff';
    case 'pink':
      return '#ff00bc';
  }
}

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
