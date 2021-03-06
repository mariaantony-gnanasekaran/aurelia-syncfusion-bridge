import './setup';
import {Util} from 'src/common/util';

describe('Util', () =>{
  let util;
  beforeEach(() => {
    util = new Util();
  });

  it('getBindablePropertyName returns viewmodel property corretly', ()=>{
    let result = util.getBindablePropertyName('text');
    expect(result).toBe('ejText');
  });

  it('getControlPropertyName returns the control property correctly', ()=> {
    let prop = 'testProperty';
    let result = util.getControlPropertyName({controlProperties: [ prop, 'name']}, 'ejTestProperty');
    expect(result).toBe(prop);
  });

  it('getOptions returns the controlproperties with value', ()=>{
    let properties =  ['text'];
    let model = {ejText: 'Syncfusion'};
    let result = util.getOptions(model, properties);
    expect(result).toEqual({text: 'Syncfusion'});
  });

  it('hasValue', ()=>{
    let value = 'name';
    expect(util.hasValue(value)).toBe(true);
  });
});
