import './App.css';
import { useEffect, useState, useRef } from 'react';
import Input from './Components/Input';
import Button from './Components/Button';

function App() {
  const [showDiv, setShowDiv] = useState(false);
  
  return (
    <div className="App">
      <Input showDiv={showDiv} />
      <Button />
    </div>
  );
}

export default App;
