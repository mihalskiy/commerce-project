import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Hero from '../../components/hero';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('[e2e] - Hero Component', () => {
  it('displays the hero callout', () => {
    const component = shallow(<Hero />);
    console.log(component);
    expect(component.find('.callout h1')).to.have.text('Make the internet awesome');
  });
});
