import SecondHandPreview from "./Pages/SecondHandPreview";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SecondHand from "./Pages/SecondHand";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SecondHandPreview />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/secondhand" element={<SecondHand />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
