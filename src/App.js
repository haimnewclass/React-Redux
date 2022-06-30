import logo from './logo.svg';
import './App.css';
import Item from './item'
import { Provider } from 'react-redux';
import Box from './box'
import store from './redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Item></Item>
      <hr/>
      <Box></Box>
      </Provider>
    </div>
  );
}

export default App;
