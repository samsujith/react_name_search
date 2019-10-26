import React, { Component } from 'react';
import data from '../data/data.js';
import NameList from './NameList.js';

class babyMain extends Component{
    constructor(props){
        super(props);
        this.state={
            filterText:'',
            favourites:[]
        }
    }
    render(){
        return(
	 <div className='BabyListWrapper'>
	 <div className='title'> List of Names</div>
            <NameList 
            data= {data}
          />
	 </div>
    )
        }

}
export default babyMain;