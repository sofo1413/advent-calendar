import React from 'react';
import Calendar from "./Calendar";
import Fact from "./Fact";

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            access: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        if(this.props.today >= this.props.day) {
            this.setState({access: true});
        }
        if(this.state.access ==true) {
            console.log("working");
        }
    }
    render() {
        return(
            <div>
                <h2 onClick={this.handleClick}>{this.props.day}</h2>
                {this.state.access == true &&
                    <Fact day={this.props.day}/>
                }
            </div>
        )
    }
}
export default Day;