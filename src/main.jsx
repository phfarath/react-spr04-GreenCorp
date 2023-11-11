import { } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './Routes/Error.jsx';
import Home from './Routes/Home.jsx';
import Login from './Routes/Login.jsx';
import Dispositivo from  './Routes/Dispositivo.jsx'
import Sobre from './Routes/Sobre.jsx';
import Objetivos from './Routes/Objetivos.jsx';
  


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login/> },
      { path: '/dispositivo', element: <Dispositivo /> },
      { path: '/objetivos', element: <Objetivos /> },
      { path: '/sobre', element: <Sobre /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);


