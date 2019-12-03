import React from 'react';
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
                fact: "The version of Santa Claus in the Netherlands is named Sinterklaas, and comes from Spain, not the North Pole."
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
            { day: 14,
                fact: "Jingle Bells was initially written for Thanksgiving to commemorate the Medford Sleigh Races."
            },
            { day: 15,
                fact: "The UPS delivers 20 billion cards and packages throughout the Holiday season."
            },
            { day: 16,
                fact: "Finding a spider web on a Christmas tree is considered good luck in Germany, Poland, and the Ukraine. A spider was said to have woven a blanket for baby Jesus."
            },
            { day: 17,
                fact:"Christmas day is the least popular day of the year for ending a relationship."
            },
            { day: 18,
                fact: "In Greek, the letter X is chi. This is the beginning of the word Christ or Christos in Greek, so Xmas makes a lot more sense!"
            },
            { day: 19,
                fact: "Iceland has 13 Yule Lads instead of Santa, who fill children's shoes with sweets or rotting potatoes depending on how the child behaved."
            },
            { day: 20,
                fact: "The image of Santa flying in his sleigh was created by the same guy who created the headless horseman: one Washington Irving."
            },
            { day: 21,
                fact: "America's first batch of Eggnog was made in Jamestown and the name came from grog, which is any drink made with rum."
            },
            { day: 22,
                fact:"During World War 1, there was a Christmas Truce in the trenches between the British and German forces. They played football, exchanged gifts, and decorated their shelters."
            },
            { day: 23,
                fact: "In the 13th Century, St. Francis of Assisi began the tradition of singing carols in church."
            },
            { day: 24,
                fact: "Nova Scotia is the world's leading exporter of Christmas trees."
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