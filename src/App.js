import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import Reviews from './components/Reviews/Reviews';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
}

export default App;
