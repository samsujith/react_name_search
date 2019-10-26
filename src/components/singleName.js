import React from 'react';

class SingleName extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className={this.props.info.sex}>
{this.props.info.name}
</div>
        )
    }


}

export default SingleName;

