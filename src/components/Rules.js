import React from 'react';


export default class extends React.Component{
  getRules(){
    return this.props.availableRules.get('names') || [];
  }
  render(){
    return(
      <div className='rules'>
        <h1> Choose your weapons </h1>
        <div className="rules-container">
          {this.getRules().map(ruleSet =>
            <button key={ruleSet}
                    className="rules-button"
                    onClick={() => this.props.setRules(ruleSet)}>
              <h3>{ruleSet}</h3>
            </button>
          )}
        </div>
      </div>
    )
  }
}
