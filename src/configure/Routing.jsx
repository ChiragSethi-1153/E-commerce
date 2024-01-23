import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, UserSignup, UserLogin} from "../pages";

const Routing = () => {
  return (
    <Router>
    <Route exact path="/" element={Home} />
    <Route path="/signup" component={UserSignup} />
        <Route path="/login" component={UserLogin} />
    </Router>
  )
}

export default Routing

// function BasicExample() {
//   return (
//     <Router history={History} >
//         <Route exact path="/" element={Home} />
//         <Route path="/shop" component={Shop} />
//         <Route path="/product" component={ProductDetail} />
//         <Route path="/viewcart" component={ViewCart} />
//         <Route path="/checkout" component={Checkout} />
//         <Route path="/admin" component={AdminLogin} />
//         <Route path="/dashboard" component={AdminHome} />
//         <Route path="/add-product" component={AddProduct} />
//         <Route path="/edit-product" component={EditProduct} />
//         <Route path="/signup" component={UserRegistration} />
//         <Route path="/login" component={UserLogin} />
 
//     </Router>
//   );
// }
// export default BasicExample;