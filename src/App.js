import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactList from './pages/ContactList'
import UpdateContactList from './pages/UpdateContactList'
import ViewContact from './pages/ViewContact'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<ContactList/>}></Route>
            <Route path='/update/:id' element={<UpdateContactList/>}></Route>
            <Route path='/view/:id' element={<ViewContact/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App