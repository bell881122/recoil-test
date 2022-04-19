import { atom } from 'recoil';
// 建立 atom
const todoListState = atom({
    key: 'todoListState',
    default: [],
});
export default todoListState;