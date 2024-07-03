// import logo from './logo.svg';
import "./App.css";

//import pages
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import ChangePassword from "./pages/auth/changepass";
import DashBoard from "./pages/dashboard";
import Generate_Image from "./pages/generate_image";
import ImageEdit from "./pages/image_edit";
import AuthProvider from './util/AuthProvider';
import Product_Selection from "./pages/product_selection";
import ProductDesign from "./pages/product_design";
import Checkout from "./pages/checkout";

const routes = [
  { path: "/auth/signin", component: SignIn, isAuthRoute: false },
  { path: "/auth/signup", component: SignUp, isAuthRoute: false },
  { path: "/auth/changepass", component: ChangePassword, isAuthRoute: true },
  { path: "/dashboard", component: DashBoard, isAuthRoute: true },
  { path: "/generate_image", component: Generate_Image, isAuthRoute: true },
  { path: "/image_edit", component: ImageEdit, isAuthRoute: true },
  { path: "/product_selection", component: Product_Selection, isAuthRoute: true },
  { path: "/product_design", component: ProductDesign, isAuthRoute: true },
  { path: "/checkout", component: Checkout, isAuthRoute: true },
];

function App() {
  return (
    <div className="App h-[100vh]">
      <Router>
        <ToastContainer position='top-center'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <Routes>
              <Route index element={<Navigate to="/dashboard" />} />
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    !route.isAuthRoute ? (
                      <route.component />
                    ) : (
                      <AuthProvider>
                        <route.component />
                      </AuthProvider>
                    )
                  }
                ></Route>
              ))}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
