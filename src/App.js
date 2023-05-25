import Header from "./components/Header/Header";
import Body from './components/Body/Body'
import { Provider } from 'react-redux';
import Store from "./redux/store";

const App = () => {
  return (
    <Provider store={Store}>
      <Header />
      <Body />
    </Provider>
  )
};

export default App;
