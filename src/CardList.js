import React from 'react';
import Card from './Card';
import { Robots } from './Robot';

class CardList extends React.Component {
    render() {
      return(
          <div>
            { 
              this.props.Robots.map((bot,i) =>(
                    <Card 
                        key={i} 
                        id={bot.id} 
                        name={bot.name}
                    />
                ))
            }
          </div>
      );
    }
}

export default CardList;