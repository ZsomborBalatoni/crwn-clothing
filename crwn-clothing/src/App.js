import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component.jsx';

const Shop = () => {
  return <h1>I am the shop page</h1>
};


const App = () => {
  return (
    <Routes>
      <Route path ='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='shop' index element={<Shop />} />
        <Route path='sign-in' index element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;