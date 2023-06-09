import SecondHandPreview from "./Pages/SecondHandPreview";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SecondHand from "./Pages/SecondHand";
import WriteBoard from "./Pages/WriteBoard";
import SearchResult from "./Pages/SearchResult";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log("app called");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SecondHandPreview />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/secondhand" element={<SecondHand />}></Route>
          <Route path="/secondhand/writeboard" element={<WriteBoard />}></Route>
          <Route
            path="/secondhand/searchresult"
            element={<SearchResult />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
