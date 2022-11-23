import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EntryIndex from './Components/EntryIndex'
import EntryCreate from './Components/EntryCreate'
import EntryEdit from './Components/EntryEdit'
import EntryDelete from './Components/EntryDelete'
import EntryDetails from './Components/EntryDetails'

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
          </Routes>
        </div >
      </BrowserRouter>
    </>
  );
}

export default App;
