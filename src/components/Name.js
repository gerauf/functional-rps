import React from 'react'


export default React.createClass({
  getInitialState: function() {
    return {nameEntry: ''};
  },
  handleTextChange: function(e) {
    this.setState({nameEntry: e.target.value})
  },
  render: function() {
    return(
      <div className='name'>
          <h1> START </h1>

          <input type='text'
          ref= 'nameInput'
          placeholder="enter name"
          onChange={this.handleTextChange}/>

          <button onClick={() => this.props.setName(this.state.nameEntry)}>
          submit
          </button>

          <h1> Welcome {this.state.nameEntry || '...'} </h1>
      </div>
    )
  }
})
