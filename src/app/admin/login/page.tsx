import { getAdminLoginEmail } from '@/lib/admin-auth';
import { SITE_CONFIG } from '@/lib/constants';
import { AdminLoginClient } from './AdminLoginClient';

export default function AdminLoginPage() {
  return (
    <AdminLoginClient expectedEmail={getAdminLoginEmail()} publicDomain={SITE_CONFIG.domain} />
  );
}
