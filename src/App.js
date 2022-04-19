import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList'

export default function App() {
  return (
    // 建立 Revoil 的根節點
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}