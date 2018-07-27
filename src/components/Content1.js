import React from 'react';

class Content1 extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.text}</h3>
                <p>{this.props.time}</p>
                <input type="text" name="input" id="" onChange={this.props.changeTitle}/>
            </div>
        );
    }
}

export default Content1;