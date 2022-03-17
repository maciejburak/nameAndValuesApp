import {useState } from 'react';
import './App.css';
import Inputs from './components/Inputs/Inputs.js'
import Table from './components/Table/Table.js'

function App() {
  const [newUser, setNewUser] = useState(null)
  return (
    <div className="App">
      <Inputs handleNewUser={setNewUser}></Inputs>
      <Table user = {newUser}></Table>
    </div>
  );
}

export default App;
