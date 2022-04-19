import { useRecoilValue } from 'recoil';
import todoListState from './todoListState.state'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'

export default function TodoList() {
    // 使用 useRecoilValue 取得 state
    const todoList = useRecoilValue(todoListState);

    return (
        <>
            {/* <TodoListStats /> */}
            {/* <TodoListFilters /> */}
            <TodoItemCreator />

            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
}