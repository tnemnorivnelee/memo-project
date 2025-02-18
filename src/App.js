import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'this is memo 1',
      createdAt: 123, // 시간 값
      updatedAt: 123, // 시간 값
    },
    {
      title: 'Memo 2',
      content: 'this is memo 2',
      createdAt: 456, // 시간 값
      updatedAt: 456, // 시간 값
    },
  ]);
  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
