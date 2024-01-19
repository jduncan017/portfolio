import React from 'react';
import { ParticlesAnimation } from './ParticlesAnimation';
import { shallow } from 'enzyme';

describe('ParticlesAnimation', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ParticlesAnimation />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
