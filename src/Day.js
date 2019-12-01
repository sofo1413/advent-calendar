import React from 'react';
import Calendar from "./Calendar";
import Fact from "./Fact";

// Gets as props from calendar: day (which is day clicked)
// and today, which is today. 
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
        else if(this.state.access ==true) {
            this.setState({access: false});
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