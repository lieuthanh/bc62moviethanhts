import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import renderRoutes from './routes';

function App() {
  return <BrowserRouter>
    <Routes>
      {renderRoutes()};

      {/* Trang HomeTemplate */}
      {/* <Route path="" element={<HomeTemplate />}>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="list-movie" element={<ListMoviePage />} />
      </Route> */}

      {/* Trang AdminTemplate */}
      {/* <Route path="admin" element={<AdminTemplate />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="add-user" element={<AddUserPage />} />
      </Route>
      <Route path="auth" element={<AuthenPage />} /> */}
    </Routes>
  </BrowserRouter>;
}

export default App; 
