import { SITE_CONFIG } from '@/lib/constants';

/** Email accepted by POST /api/admin/auth (must stay in sync with that route). */
export function getAdminLoginEmail(): string {
  return process.env.ADMIN_EMAIL?.trim() || SITE_CONFIG.email;
}
