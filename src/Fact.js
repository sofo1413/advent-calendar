import React from 'react';
import "./style.css"

// Gets day as prop from Day. 
class Fact extends React.Component {
    render() {
        const facts = [
            { day: 1,
                fact: "The Löschner family of Germany has the largest nutcracker collection: over 4,000!"
            },
            { day: 2,
                fact: "The first candy cane is said to have been created in Germany in the 1600's. "
            },
            { day: 3,
                fact: "The world's largest gingerbread man weighs 466 pounds!"
            },
            { day: 4,
                fact: "The song, 'Jingle Bells' was the first song to be broadcast from space!"
            },
            { day: 5,
                fact: "Some speculate that Rudolph's red nose was due to a parasite."
            },
            { day: 6,
                fact: "The two weeks leading up to Christmas are the most common time for couples to break up.  Interesting Christmas spirit we have, huh?"
            },
            { day: 7,
                fact: "It is a popular Japanese tradition to eat Christmas dinner at KFC!"
            },
            { day: 8,
                fact: "A German fable is that on Christmas Eve, those with a pure heart can hea animals talking. How sweet."
            },
            { day: 9,
                fact: "The two weeks leading up to Christmas are the most common time for couples to break up.  Interesting Christmas spirit we have, huh?"
            },
            { day: 10,
                fact: "Coca-Cola used Santa in many ads and hired an illustrator to design Santa as happy and jolly rather than the original spooky figure, which created the image of Santa that most know today!"
            },
            { day: 11,
                fact:"Almost 15,000 people go to the hospital every year for holiday-related decorating accidents"
            },
            { day: 12,
                fact: "In Canada, Santa has his own zip code for a literacy incentive called 'Santa Letter-Writing-Program'.  Can you guess the zip code? HOH OHO!"
            },
            { day: 13,
                fact:"In 2018, total retail sales during November and December hit $717.5 billion!"
            },
            { day: 19,
                fact: "The UPS delivers 20 billion cards and packages throughout the Holiday season."
            },
        ];


        return(
            <div className="facts">
                {facts[this.props.day].fact}
            </div>
        )
    }
}
export default Fact;