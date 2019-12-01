import React from 'react';
// Gets day as prop from Day. 
class Fact extends React.Component {
    render() {
        const facts = [
            { day: 19,
                fact: "The UPS delivers 20 billion cards and packages throughout the Holiday season."
            },
            { day: 1,
                fact: "The Löschner family of Germany has the largest nutcracker collection: over 4,000!"
            },
            { day: 2,
                fact: "The first candy cane is said to have been created in Germany in the 1600's. "
            },
            { day: 3,
                fact: "The world's largest gingerbread man weighs 466 pounds!"
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