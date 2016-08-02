import React from 'react'


export default React.createClass({
  getRules: function() {
    return this.props.availableRules.get('names') || [];
  },
  render: function() {
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
})
