import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Components/Cadastro.jsx";
import {Header} from "./Components/Header";


function App() {
  return (
      <div>
          <Header></Header>
          <BrowserRouter>
              <Routes>
                  <Route path="/Cadastro" element={<Cadastro/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;