import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the nav bar</h1>
      </div>
      <Outlet />
    </div>
  )
}

const Shop = () => {
  return <h1>I am the shop page</h1>
};


const App = () => {
  return (
    <Routes>
      <Route path ='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='shop' index element={<Shop />} />

      </Route>
    </Routes>
  );
};

export default App;