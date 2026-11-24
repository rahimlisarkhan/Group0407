import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from '../shared/components/Loading';

// lazy — səhifənin kodu yalnız həmin route açılanda yüklənir (default export tələb edir)
const HomePage = lazy(() => import('../features/home/pages'));
const BlogsPage = lazy(() => import('../features/blog/pages'));
const BlogCreate = lazy(() => import('../features/blog/pages/create'));
const BlogDetail = lazy(() => import('../features/blog/pages/detail'));
const SettingPage = lazy(() => import('../features/setting/pages'));
const NotFoundPage = lazy(() => import('../features/notfound'));

// Login olmuş istifadəçi üçün route-lar
export const ProtectedRoutes = () => {
  return (
    // Suspense — lazy səhifə yüklənənə qədər fallback göstərir
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/meqale" element={<BlogsPage />} />
        <Route path="/meqale/yarat" element={<BlogCreate />} />
        <Route path="/meqale/:blogId" element={<BlogDetail />} />

        <Route path="/setting/*" element={<SettingPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
