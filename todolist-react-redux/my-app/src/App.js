import Input from './components/Input';
import Todolist from './components/Todolist';
import Clear from './components/Clear'
import { Provider } from 'react-redux';
import store from './store';
import Sitefoot from './components/Sitefoot';
import './App.css';

function App(){
  return (
    //使用Provider包裹所有组件，使所有组件都能获取store中的state
    <Provider store = {store}>
      <div className="App">
        <Input />
        <Todolist />
        <Clear />
        <Sitefoot />
      </div>
    </Provider>
  )
}

export default App;