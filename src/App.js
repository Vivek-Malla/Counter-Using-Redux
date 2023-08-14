import './App.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { increment,decrement } from './Actions/action';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  

  return (
    <div className="App">
      <button onClick={() => dispatch(increment(1))}>
        +
      </button>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(decrement(1))}>
        -
      </button>
    </div>
  );
}

export default App;
