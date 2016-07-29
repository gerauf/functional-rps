import React from 'react'



export default React.createClass({
  getWeapons: function() {
    return this.props.rules || []
  },
  render: function() {
    return(
      <div className='fight'>
          <h1> Choose your weapons </h1>
          {this.getWeapons().map(weapon =>
            <button key={weapon}
                    onClick={() => this.props.play(weapon)}>
              <h3>{weapon}</h3>
            </button>
          )}
      </div>
    )
  }
})
