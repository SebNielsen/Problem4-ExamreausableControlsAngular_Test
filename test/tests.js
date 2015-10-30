
describe('My Tests of the implemented filter, service, and controller', function() {

  beforeEach(module('myApp'));

  describe('name', function() {

    it('should convert input parameters to a new string',
        inject(function(nameFilter) {
      expect(nameFilter({firstName:'Sebastian', lastName:'Nielsen'})).toBe('"Nielsen, Sebastian"');
    }));
  });
  
  describe('TitleService', function(){
     
      it('should convert input to either titlecase, camelcase or dashcase',
      inject(function(TitleService){
          var title = 'my example service';
          expect(TitleService.getTitleCase(title)).toBe('My Example Service ');
          expect(TitleService.getCamelCase(title)).toBe('MyExampleService');
          expect(TitleService.getDashCase(title)).toBe('my-example-service');
      }));
  });
});


