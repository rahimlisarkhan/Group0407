import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../features/auth/pages/login';
import { RegisterPage } from '../features/auth/pages/register';

// Login olmamış istifadəçi üçün route-lar
export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Başqa istənilən səhifəyə girəndə login-ə yönləndir */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
