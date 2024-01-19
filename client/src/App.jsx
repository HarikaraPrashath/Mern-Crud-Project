import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import Home from "./Home"
import CreateProduct from "./CreateProduct"
import UpdateProduct from "./UpdateProduct"

function App() {


  return (
    <BrowserRouter>
    <Routes>
     
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/create' element={<CreateProduct/>}/>
      <Route path='/update/:id' element={<UpdateProduct/>}/>
     
    </Routes>
 </BrowserRouter>
  )
}

export default App
