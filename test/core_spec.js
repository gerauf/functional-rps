import {fromJS} from 'immutable'
import {expect} from 'chai';


describe('application logic', () => {

  describe('#setName', () => {
    it('adds player name to the state', () => {
      const state = Map()
      const playerName = 'Ryu'

      const nextState = setName(state, playerName)

      expect(nextState).to.equal(fromJS({
        playerName: 'Ryu'
      }))
    });

  });
});
