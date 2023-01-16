import {BrowserRouter, Routes, Route} from "react-router-dom";
import Obat from "./components/Obat";
import AddObat from "./components/AddObat";
import EditObat from "./components/EditObat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Obat/>}/>
        <Route path="add" element={<AddObat/>}/>
        <Route path="edit/:id" element={<EditObat/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;