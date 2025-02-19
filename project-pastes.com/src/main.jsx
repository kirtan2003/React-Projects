import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import { pasteStore } from './app/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Pastes from './components/Pastes.jsx'
import Home from './components/Home.jsx'
import ViewPaste from './components/ViewPaste.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='pastes' element={<Pastes />} />
      <Route path='pastes/:id' element={<ViewPaste />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={pasteStore}>
    <StrictMode>
      <RouterProvider router={router} />
      <Toaster/>
    </StrictMode>,
  </Provider>
)
