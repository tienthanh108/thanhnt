import React from 'react';
import { shallow } from 'enzyme'

import { intl } from '../intl-enzyme-test-helper.js'
import {
  mapStateToProps,
  mapDispatchToProps,
  validate,
  <%= pascalEntityName %>Form  as <%= pascalEntityName %>FormComponent
} from 'forms/<%= pascalEntityName %>Form/<%= pascalEntityName %>Form';

describe('(Form) <%= pascalEntityName %>', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      intl,
      dispatch: sinon.spy(),
    };
    _wrapper = shallow(<SampleFormComponent {..._props} />);
  });

  it('should render as a <div>', () => {
    _wrapper.instance().render()
    const actual = _wrapper.length;
    const expected = 1;
    expect(actual).equal(expected);
  });

  it('mapStateToProps should return an object', () => {
    const state = {
    };
    const actual = mapStateToProps(state);
    const expected = 'object';
    expect(actual).to.be.an(expected);
  });

  it('mapDispatchToProps should return an object', () => {
    const dispatch = {
    };
    const actual = mapDispatchToProps(dispatch);
    const expected = 'object';
    expect(actual).to.be.an(expected);
  });

  it('validate should return an object', () => {
    const actual = validate();
    const expected = 'object';
    expect(actual).to.be.an(expected);
  });
});
