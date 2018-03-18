import React from 'react'
import { shallow } from 'enzyme';

// import { mountWithIntl, intl } from '../intl-enzyme-test-helper.js'
import <%= pascalEntityName %> from 'components/<%= pascalEntityName %>/<%= pascalEntityName %>'

describe('(Component) <%= pascalEntityName %>', () => {
  let _props;
  let _wrapper;

  beforeEach(() => {
    _props = {

    };
    _wrapper = shallow(<<%= pascalEntityName %> {..._props} />);
  });

  it('should render as a <div>', () => {
    const actual = _wrapper.is('div');
    const expected = true;
    expect(actual).equal(expected);
  })
})
