import React from 'react';
import Day from "./Day";

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date().getDate()
        }
        // this.date = this.date.bind(this);
    }

    // date() {
    //     var currDate = new Date();
    //     this.setState({today: currDate});
    //     console.log(this.state.today);
    // }
    render() {
        return(
            <div>
                <Day today={this.state.today} day={0}/>
                <Day month="12" day="02"/>


            </div>
        )
    }

}
export default Calendar;