import { useRecoilValue } from 'recoil';
import todoListState from './state/todoListState.state'
import filteredTodoListState from './state/filteredTodoListState.selector'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'
import TodoListStats from './TodoListStats'
import TodoListFilters from './TodoListFilters'

export default function TodoList() {
    // 使用 useRecoilValue 取得 state
    const todoList = useRecoilValue(todoListState);
    const todoList2 = useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />

            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
            {todoList2.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
}