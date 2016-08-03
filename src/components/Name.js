import React from 'react';


export default class extends React.Component{
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }
  handleTextChange(ev) {
    this.setState({
      name: ev.target.value
    })
  }
  saveName() {
    if(this.state.name != ''){
      this.props.setName(this.state.name);
    }
  }
  render() {
    return(
      <div className='name'>
        <input type='text'
               ref= 'nameInput'
               placeholder="enter name"
               onChange={this.handleTextChange.bind(this)}/>

        <h1> Welcome {this.state.name || '...'} </h1>

        <button className='start-button'
                onClick={() => this.saveName()}>
            <p>START</p><p>►</p>
        </button>

      </div>
    )
  }
}
