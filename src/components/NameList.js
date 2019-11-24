import React from 'react';
import SingleName from './singleName.js';


class NameList extends React.Component{
    constructor(props){
        super(props);
//const input = this.props.filter.toLowerCase();
       
    }
   
    render() {
        return (
          
        <div className={'babyNames'}>
            
       { this.props.data.filter((person, i) =>
         !person.name.toLowerCase().indexOf(this.props.filter.toLowerCase())
       ).
       map((person, i) => 
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