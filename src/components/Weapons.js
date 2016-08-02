import React from 'react'

export default React.createClass({
  getWeapons: function() {
    return this.props.rules || [];
  },
  computerChoice: function() {
    let rules = this.getWeapons()
    return rules.get(Math.floor(Math.random() * rules.size));
  },
  isDisabled: function() {
    return !!this.props.winner
  },
  render: function() {
    return(
      <div className='weapons'>
          <h1> Pick your tool </h1>
          {this.getWeapons().map(weapon =>
            <button className="weapon"
                    disabled={this.isDisabled()}
                    key={weapon}
                    onClick={() => this.props.play(weapon,
                                                   this.computerChoice())}>
              <h3>{weapon}</h3>
            </button>
          )}
      </div>
    )
  }
})
