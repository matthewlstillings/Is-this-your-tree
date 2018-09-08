import React from 'react';
import {shallow} from 'enzyme';
import { Header } from '../../components/HeaderContainer';





test('should render header container', () => {
    document.body.innerHTML = `
    <div class="body">
        
    </div>
`;
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});