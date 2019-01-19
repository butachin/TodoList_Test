import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import App from './App';

enzyme.configure({ adapter: new Adapter() });

test('クラッシュせずアプリがレンダリングされる', () => {
    const component = enzyme.shallow(<App />);
    expect(component.exists()).toEqual(true);
});
