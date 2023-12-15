const {expect} = require('chai');
const {returnsThree} = require('../problems/number-fun.js')

console.log(returnsThree)

describe('return three', ()=>{

    it('should return three', function(){
        expect(returnsThree()).to.equal('3')
    })
})
