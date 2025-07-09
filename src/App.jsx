import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NotFoundLayout from './layouts/NotFoundLayout'
import MainLayout from './layouts/MainLayout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { products } from './data/products'

function App() {
  return (
    <BrowserRouter basename="/batman-shop">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home products={products} />} />
        </Route>
        <Route path="*" element={<NotFoundLayout />}>
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
