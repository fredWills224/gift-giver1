import React from 'react';
// import { shallow, mount, render } from 'enzyme';
import {
    createSerializer,
    shallowToJson,
    mountToJson,
    renderToJson
} from 'enzyme-to-json'; 
import App from './App';

const app = shallow(<App/>);

it('renders correctly', ()=>{
    // expect(app).toMatchSnapShot();
    // expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
    expect(shallowToJson(app)).toMatchSnapshot();

});

// it('converts shallow wrappers', () => {
//     const wrapper = shallow(<div>Hello</di>)
//     expect(shallowToJson(wrapper)).toMatchSnapshot();
// });