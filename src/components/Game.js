import React from 'react'
import Start from './Start'
import Fight from './Fight'
import Player from './Player'


export default React.createClass({
  render: function() {
    return(
      <div>
        {this.props.rules ?
          <div>
            <Player class={'player1'} player={this.props.player1}/>
            <Player class={'player2'} player={this.props.player2}/>
            <Fight {...this.props} />
          </div>
          :
          <Start  {...this.props} />}
      </div>
    )
  }
})
