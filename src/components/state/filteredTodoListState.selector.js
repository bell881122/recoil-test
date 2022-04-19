import { selector } from 'recoil';
import todoListState from './todoListState.state'
import todoListFilterState from './todoListFilterState.state'

const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        // 追蹤的依賴項，在任一項目更新時會重新取得其內容
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});
export default filteredTodoListState;