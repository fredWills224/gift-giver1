import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer, shallowToJson } from 'enzyme-to-json'; 
import App from './App';

const app = shallow(<App/>);

it('sets snapShotSerializer options to detailed snap-shots', ()=>{
    expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
})

it('renders correctly', ()=>{
    expect(shallowToJson(app)).toMatchSnapshot();
});
