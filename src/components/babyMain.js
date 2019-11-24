import React, { Component } from 'react';
import data from '../data/data.js';
import NameList from './NameList.js';
import Search from './search.js';

class babyMain extends Component{
    constructor(props){
        super(props);
        this.state={
            filterText:'',
            favourites:[]
        }
    }
    filterUpdate(value){
        this.setState({filterText:value})
      }
    render(){
        return(
	 <div className='BabyListWrapper'>
         <Search
            filterValue={this.state.filterText}
            filterUpdate = {this.filterUpdate.bind(this)}
        />
	 <div className='title'> List of Names</div>
            <NameList 
            filter = {this.state.filterText}
            data= {data}
          />
	 </div>
    )
        }

}
export default babyMain;