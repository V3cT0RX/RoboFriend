import React, { Component } from 'react';


class Card extends Component {
  render() {
      return(
          <div className='tc bg-light-blue  dib br3 pa3 ma2 grow bw2 shadow-5'>
              <img alt='Robot' src={`https://robohash.org/${this.props.id}`} />
              <h2>{this.props.name}</h2>
          </div>
      );
  }
}
export default Card;     