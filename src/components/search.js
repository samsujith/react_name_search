import React ,{Component} from 'react';

class Search extends Component{
    render(){
        const {filterValue,filterUpdate} = this.props
        return(
            <form>
                <input type="text"
                ref="filterInput"
                placeholder="Enter baby name"
                value={filterValue}
                onChange = {
                    () =>{
                        filterUpdate(this.refs.filterInput.value)
                    }
                }
                />
            </form>
        )
    }

}
export default Search;
