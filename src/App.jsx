
import { BrowserRouter, Route, Routes} from "react-router-dom"

import GlobalStyles from './components/GlobalStyles'
import Home from "./pages/Home"
import Pie from "./components/Pie"
import Animadas from "./pages/Animadas"
import Ficcion from "./pages/Ficcion"
import Comedia from "./pages/Comedia"
import Error404 from "./pages/Error404"
import HamburgerMenu from "./components/HamburgerMenu"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <GlobalStyles/>
        <HamburgerMenu/>
        {/* <Cabecera/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/animadas" element={<Animadas/>}/>
          <Route path="/ficcion" element={<Ficcion/>}/>
          <Route path="/comedia" element={<Comedia/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
        <Pie/>
      </BrowserRouter>
    </>
  )
}

export default App
