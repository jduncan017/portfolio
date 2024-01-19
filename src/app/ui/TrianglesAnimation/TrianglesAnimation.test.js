import React from 'react';
import { TrianglesAnimation } from './TrianglesAnimation';
import { shallow } from 'enzyme';

describe('TrianglesAnimation', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TrianglesAnimation />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
