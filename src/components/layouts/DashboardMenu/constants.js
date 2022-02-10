import { routes } from '@configs/routes';
import { ROLES } from '@utils/constants';
import IconLogo from '@components/elements/IconLogo';
import IconCompany from '@components/elements/IconCompany';

export const navsArray = {
  [ROLES.TRANSPORT_ADMIN]: [
    { name: 'Dashboard', to: routes.DASHBOARD(), icon: IconLogo },
    { name: 'Akun PPJK', to: routes.PPJK(), icon: IconCompany },
  ],
};

