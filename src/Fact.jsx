import React from 'react';

class Fact extends React.Component {
    render() {
        const facts = [
            { day: 19,
                fact: "Pizza"
            },
            { day: 1,
                fact: "Tacos"
            },
            { day: 2,
                fact: "Burgers"
            },
            { day: 3,
                fact: "Salad"
            }
        ];


        return(
            <div>
                {facts[this.props.day].fact}
            </div>
        )
    }
}
export default Fact;