import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import todoListState from './state/todoListState.state'

export default function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    // 使用 useSetRecoilState 設定 setState
    const setTodoList = useSetRecoilState(todoListState);
  
    const addItem = () => {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue('');
    };
  
    const onChange = ({target: {value}}) => {
      setInputValue(value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={addItem}>Add</button>
      </div>
    );
  }
  
  // 用于创建唯一 id 的工具函数
  let id = 0;
  function getId() {
    return id++;
  }