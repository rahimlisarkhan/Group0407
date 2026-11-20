import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../features/home/pages';
import { BlogsPage } from '../features/blog/pages';
import { BlogCreate } from '../features/blog/pages/create';
import { BlogDetail } from '../features/blog/pages/detail';
import { SettingPage } from '../features/setting/pages';
import { NotFoundPage } from '../features/notfound';

// Login olmuş istifadəçi üçün route-lar
export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/meqale" element={<BlogsPage />} />
      <Route path="/meqale/yarat" element={<BlogCreate />} />
      <Route path="/meqale/:blogId" element={<BlogDetail />} />

      <Route path="/setting" element={<SettingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
