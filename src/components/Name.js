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
      <div className='name.container'>
        <div className='name'>
          <input type='text'
          ref= 'nameInput'
          placeholder="enter name"
          onChange={this.handleTextChange}/>

          <h1> Welcome {this.state.nameEntry || '...'} </h1>

          <button className='start-button'
            onClick={() => this.props.setName(this.state.nameEntry)}>
          <p>START</p><p>►</p>
          </button>

        </div>
      </div>
    )
  }
})
