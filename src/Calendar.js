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
                <Day today={this.state.today} day={1}/>
                <Day today={this.state.today} day={2}/>
                <Day today={this.state.today} day={3}/>
                <Day today={this.state.today} day={4}/>
                <Day today={this.state.today} day={5}/>
                <Day today={this.state.today} day={6}/>
                <Day today={this.state.today} day={7}/>
                <Day today={this.state.today} day={8}/>
                <Day today={this.state.today} day={9}/>
                <Day today={this.state.today} day={10}/>
                <Day today={this.state.today} day={11}/>
                <Day today={this.state.today} day={12}/>
                <Day today={this.state.today} day={13}/>
                <Day today={this.state.today} day={14}/>
                <Day today={this.state.today} day={15}/>
                <Day today={this.state.today} day={16}/>
                <Day today={this.state.today} day={17}/>
                <Day today={this.state.today} day={18}/>
                <Day today={this.state.today} day={19}/>
                <Day today={this.state.today} day={20}/>
                <Day today={this.state.today} day={21}/>
                <Day today={this.state.today} day={22}/>
                <Day today={this.state.today} day={23}/>
                <Day today={this.state.today} day={24}/>
                <Day today={this.state.today} day={25}/>
                <Day month="12" day="02"/>


            </div>
        )
    }

}
export default Calendar;