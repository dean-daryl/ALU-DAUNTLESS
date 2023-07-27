import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import SingleBlog from './scenes/blog/SingleBlog.tsx';

const routes = [
  {
    path: '/',

    children: [
      { path: '/', element: <App /> },
      { path: '/:id', element: <SingleBlog /> },
    ],
  },
];
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} >
          {route.children.map((child) => (
            <Route key={child.path} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
    </Routes>
  </BrowserRouter>,
);
