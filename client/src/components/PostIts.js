import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { getPostIts } from '../reducers/postits'
import PostItForm from './PostItForm'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class PostIts extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPostIts());
  }

  postit = () => {
    return this.props.postits.map( p =>
    <div>
    <NoiceDiv bg={p.color} key={p.id}>
      <h4>{p.note}</h4>
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
    </div>
    )
  };

  render() {
    return (
      <div>
        <PostItForm />
        <AddButt>
          <FontAwesomeIcon icon="plus" color="green" size="2x" />
        </AddButt>
        <NoiceHeader>Your PostIts</NoiceHeader>
        <br />
        <Grid>
          {this.postit()}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {postits: state.postits, }
 };

// styled componenets
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
    default:
        return '#deff00';
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
