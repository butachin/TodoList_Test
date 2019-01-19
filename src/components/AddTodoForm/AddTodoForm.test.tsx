import * as React from 'react';
import * as enzyme from 'enzyme';
import AddTodoForm from './AddTodoForm';

import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('AddTodoForm', () => {
    const addTodoSpy = jest.fn();
    let wrapper: enzyme.ShallowWrapper;

    beforeEach(() => {
        wrapper = enzyme.shallow(<AddTodoForm addTodo={addTodoSpy} />);
    });

    describe('Todoを追加ボタン', () => {
        test('ボタンが存在する', () => {
            expect(wrapper.find('.todo-submit').length).toBe(1);
        });

        test('ボタンテキストが「Todoを追加」', () => {
            expect(wrapper.find('button').text()).toEqual('Todoを追加');
        });

        test('inputに文字列入力後にボタンを押すとaddTodoが発火する', () => {
            const mountWrapper = enzyme.mount(
                <AddTodoForm addTodo={addTodoSpy} />
            );
            const inputValue = 'jestとenzymeでテストを書く';

            mountWrapper.setState({ input: inputValue });

            // ボタンを押す
            mountWrapper.find('form').simulate('submit');

            // addTodoが発火する
            expect(addTodoSpy).toHaveBeenCalledTimes(1);
            expect(addTodoSpy).toHaveBeenCalledWith(inputValue);
        });
    });

    test('inputに描画した文字列が描画される', () => {
        const onDummy = jest.fn();
        const addTodoForm = enzyme.shallow(<AddTodoForm addTodo={onDummy} />);

        addTodoForm.setState({
            input: '文字列'
        });
        expect(addTodoForm.find('input').props().value).toEqual('文字列');
    });
});
