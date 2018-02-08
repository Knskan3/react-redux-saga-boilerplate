import React from 'react';
import Enzyme, { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-15';
import ExampleComponent from './index';

Enzyme.configure({ adapter: new Adapter() });


const generateProps = () => ({
  title: 'Potato on a bike test',
  actionExampleRequest: jest.fn(),
  show: false,
});

describe('<exampleComponent />', () => {
  // Snapshot testing
  test('Snapshot sould be correct', () => {
    const props = generateProps();
    const component = renderer.create(<ExampleComponent {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Should render title correctly', () => {
    const props = generateProps();
    const wrap = mount(<ExampleComponent {...props} />);
    expect(wrap.find('div h2.title').text()).toEqual(props.title);
  });
});
