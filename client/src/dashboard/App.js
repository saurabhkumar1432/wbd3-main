import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';



function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/emp' element={<EmpListing />}></Route>
          <Route path='/adhome/employee/create' element={<EmpCreate />}></Route>

          <Route path='/adhome/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/adhome/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
