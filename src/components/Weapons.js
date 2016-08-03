import React from 'react';

export default class extends React.Component{
  getWeapons() {
    return this.props.rules || [];
  }
  computerChoice() {
    let rules = this.getWeapons();
    return rules.get(Math.floor(Math.random() * rules.size));
  }
  isDisabled() {
    return !!this.props.winner;
  }
  render() {
    let tags = this.getWeapons().map(weapon =>
      <button className="weapon-button"
              disabled={this.isDisabled()}
              key={weapon}
              onClick={() => this.props.play(weapon,this.computerChoice())}>
        <h3>{weapon}</h3>
      </button>
    );
        
    return(
      <div className='weapons'>
          <h1> Pick your weapon </h1>
          <div className='weapon-buttons-container'>
            {tags}
          </div>
      </div>
    )
  }
}
