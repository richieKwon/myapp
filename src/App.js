import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import EntryIndex from './Components/EntryIndex'
import EntryCreate from './Components/EntryCreate'
import EntryEdit from './Components/EntryEdit'
import EntryDelete from './Components/EntryDelete'
import EntryDetails from './Components/EntryDetails'
import PagerComponent from './Components/Pager/PagerComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<EntryIndex />} />
            <Route path='/create' element={<EntryCreate />} />
            <Route path='/edit/:id' element={<EntryEdit />} />
            <Route path='/details/:id' element={<EntryDetails />} />
            <Route path='/delete/:id' element={<EntryDelete />} />
            <Route path='/pager' element={<PagerComponent />} />
          </Routes>
        </div >
      </BrowserRouter>
    </>
  );
}

export default App;
