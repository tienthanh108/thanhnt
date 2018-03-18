import React from 'react';
import { shallow } from 'enzyme';

// import { mountWithIntl, intl } from '../intl-enzyme-test-helper.js'
import {
  mapStateToProps,
  mapDispatchToProps,
  <%= pascalEntityName %>
} from 'containers/<%= pascalEntityName %>';

describe('(Component) <%= pascalEntityName %>', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {
      dispatch: sinon.spy(),
    };
    _wrapper = shallow(<<%= pascalEntityName %> {..._props} />);
  });

  it('should render as a <div>', () => {
    const actual = _wrapper.is('div');
    const expected = true;
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
});
