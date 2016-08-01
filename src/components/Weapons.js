import React from 'react'



export default React.createClass({
  getWeapons: function() {
    return this.props.rules || []
  },
  computerChoice: function() {
    return this.getWeapons()[0]
  },
  render: function() {
    return(
      <div className='weapons'>
          <h1> Pick your tool </h1>
          {this.getWeapons().map(weapon =>
            <button key={weapon}
                    onClick={() => this.props.play(weapon,
                                                   this.computerChoice())}>
              <h3>{weapon}</h3>
            </button>
          )}
      </div>
    )
  }
})
