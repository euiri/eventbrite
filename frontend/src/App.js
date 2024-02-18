import React from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";
import { EventScreen} from './screens/EventScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';

const App = () => {
  return (
    <>
    <Router>
   <Header/>
   <main>
   <Container>
   <Routes>
    <Route path="/" exact element={<HomeScreen />} />
    <Route path="/event/:id" element={<EventScreen />} />
    <Route path="/cart" element={<CartScreen />} />
    <Route path="/cart/:id" element={<CartScreen />} />
    <Route path='/shipping' element={<ShippingScreen />} />
    <Route path='/payment' element={<PaymentScreen />} />
    </Routes>
      </Container>
      </main>
      <Footer/>
      </Router>
    </>
  );
}
export default App;