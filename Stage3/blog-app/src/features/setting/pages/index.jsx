import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../../../shared/components/Layout';
import { SettingLayout } from '../components/SettingLayout';
import { SettingGeneral } from './general';
import { SettingProfile } from './profile';
import { SettingSecurity } from './security';
import { SettingNotifications } from './notifications';

export const SettingPage = () => {
  return (
    <Layout title="Setting" small>
      <SettingLayout>
        <Routes>
          {/* /setting → /setting/general */}
          <Route index element={<Navigate to="general" replace />} />
          <Route path="general" element={<SettingGeneral />} />

          <Route path="profile" element={<SettingProfile />} />
          <Route path="security" element={<SettingSecurity />} />
          <Route path="notifications" element={<SettingNotifications />} />
        </Routes>
      </SettingLayout>
    </Layout>
  );
};

export default SettingPage;
