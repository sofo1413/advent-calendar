import React from 'react';
import Calendar from "./Calendar";
import Fact from "./Fact";
import "./style.css"
import A from "./bellA.wav"
import B from "./bellB.wav"
import C from "./bellC.wav"
import D from "./bellD.wav"
import E from "./bellE.wav"
import F from "./bellF.wav"
import G from "./bellG.wav"


// Gets as props from calendar: day (which is day clicked)
// and today, which is today. 
class Day extends React.Component {
    constructor(props) {
        const notes = [
            A, B, C, D, E, F, G,
        ];
        super(props);
        this.state = {
            access: false,
            notYet: false,
        }
        this.audio = new Audio(notes[Math.floor(Math.random()*notes.length)]);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.audio.play();
        if(this.props.today >= this.props.day) {
            this.setState(state =>({access: !state.access}));
        }
        if(this.props.today < this.props.day){
            this.setState(state =>({notYet: !state.notYet}));
        }
    }
    render() {
        const style = {
            margin: "1.5vw",
            width: "12%",
            backgroundColor: "#E34446",
            color: "#fffacf",
            opacity: ".85",
            padding: "1vw",
            borderStyle: "solid",
            borderColor: "darkgreen"

        };
        const style2 = {
            margin: "1.5vw",
            width: "12%",
            backgroundColor: "#E36d6f",
            opacity: ".85",
            color: "#fffacf",
            padding: "1vw",
            borderStyle: "solid",
            borderColor: "darkgreen"
        };
        return(
            <div style={this.props.day%2==0 ? style : style2}>
                <h2 onClick={this.handleClick}>{this.props.day}</h2>
                {this.state.access == true &&
                    <Fact day={this.props.day}/>
                }
                {this.state.notYet == true &&
                    <p> Hold your horses! You can not access this day quite yet. </p>
                }
            </div>
        )
    }
}
export default Day;