// import { onAuthStateChanged } from "firebase/auth";
import { Suspense, lazy, useEffect } from "react";
// import { Toaster } from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import Loader from "./components/loader";
// import ProtectedRoute from "./components/protected-route";
// import { auth } from "./firebase";
// import { getUser } from "./redux/api/userAPI";
// import { userExist, userNotExist } from "./redux/reducer/userReducer";
// import { RootState } from "./redux/store";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));


const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Suspense fallback={<Loader/>}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* Not logged In Route */}
        
      </Routes>
    </Router>
    </>
  )
}

export default App
