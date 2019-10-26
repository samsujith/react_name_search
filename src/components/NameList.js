import React from 'react';
import SingleName from './singleName.js';

class NameList extends React.Component{
    constructor(props){
        super(props);
       
    }
    render() {
        return (<div className={'babyNames'}>
           
       { this.props.data.map((person, i) => 
       <SingleName 
          id={person.id}
          key={i}
          info={person}
        />
          )
        }
        </div>);
    }
}
 export default NameList;