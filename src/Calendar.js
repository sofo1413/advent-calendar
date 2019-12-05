import React from 'react';
import Day from "./Day";
import "./style.css"

class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            today: new Date().getDate()
        }
    }


    render() {
        return(
            <div className="container">
                <Day className="days" today={this.state.today} day={1}/>
                <Day className="days" today={this.state.today} day={2}/>
                <Day className="days" today={this.state.today} day={3}/>
                <Day className="days" today={this.state.today} day={4}/>
                <Day className="days" today={this.state.today} day={5}/>
                <Day className="days" today={this.state.today} day={6}/>
                <Day className="days" today={this.state.today} day={7}/>
                <Day className="days" today={this.state.today} day={8}/>
                <Day className="days" today={this.state.today} day={9}/>
                <Day className="days" today={this.state.today} day={10}/>
                <Day className="days" today={this.state.today} day={11}/>
                <Day className="days" today={this.state.today} day={12}/>
                <Day className="days" today={this.state.today} day={13}/>
                <Day className="days" today={this.state.today} day={14}/>
                <Day className="days" today={this.state.today} day={15}/>
                <Day className="days" today={this.state.today} day={16}/>
                <Day className="days" today={this.state.today} day={17}/>
                <Day className="days" today={this.state.today} day={18}/>
                <Day className="days" today={this.state.today} day={19}/>
                <Day className="days" today={this.state.today} day={20}/>
                <Day className="days" today={this.state.today} day={21}/>
                <Day className="days" today={this.state.today} day={22}/>
                <Day className="days" today={this.state.today} day={23}/>
                <Day className="days" today={this.state.today} day={24}/>
                <Day className="days" today={this.state.today} day={25}/>
            </div>
        )
    }

}
export default Calendar;