import React from 'react'
import Start from './Start'
import Weapons from './Weapons'
import Player from './Player'
import Arena from './Arena'


export default React.createClass({
  render: function() {
    return(
      <div>
        {this.props.rules ?
          (<div>
            <Player class={'player1'} player={this.props.player1}/>
            <Player class={'player2'} player={this.props.player2}/>
            <Arena player1 = {this.props.player1}
                   player2 = {this.props.player2}/>
            <Weapons {...this.props} />
          </div>)
          :
          <Start  {...this.props} />}
      </div>
    )
  }
})
