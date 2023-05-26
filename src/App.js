import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body/Body";
import CustomText from './components/customText/CustomText'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body /> } />
        <Route path="custom-text" element={<CustomText />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
