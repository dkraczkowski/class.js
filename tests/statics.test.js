var Class = require('../src/class');
describe("Class test", function() {

    it("Class - statics", function() {
        var Pet = Class({
            create: function() {
                this.hungry = true;
                this.thirsty = true;

            },
            eat: function() {
                this.hungry = false;
            },
            drink: function() {
                this.thirsty = false;
            }
        }).static({
            CONST_TEST: 'constTest',
            staticTest: 'staticTest'
        });

        expect(Pet.CONST_TEST).toEqual('constTest');
        expect(Pet.staticTest).toEqual('staticTest');
        Pet.CONST_TEST = 'fail';
        Pet.staticTest = 'pass';
        expect(Pet.CONST_TEST).toEqual('constTest');
        expect(Pet.staticTest).toEqual('pass');


        var Dog = Pet.extend({});
        expect(Dog.CONST_TEST).toEqual(undefined);
        expect(Dog.staticTest).toEqual(undefined);
    });

});