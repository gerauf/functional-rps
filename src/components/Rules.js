import React from 'react'


export default React.createClass({
  getRules: function() {
    return this.props.availableRules || [];
  },
  render: function() {
    return(
      <div className='rules'>
          <h1> Choose your weapons </h1>
          {this.getRules().map(ruleSet =>
            <button key={ruleSet}
                    onClick={() => this.props.setRules(ruleSet)}>
              <h3>{ruleSet}</h3>
            </button>
          )}
      </div>
    )
  }
})
