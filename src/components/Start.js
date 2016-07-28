import React from 'react'
import Name from './Name'
import Rules from './Rules'


export default React.createClass({
  render: function() {
    return(
      <div>
        {this.props.player1 ?
          <Rules {...this.props} /> :
          <Name  {...this.props} />}
      </div>
    )
  }
})
