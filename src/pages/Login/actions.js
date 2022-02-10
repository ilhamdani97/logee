import { setToken, setUserData, setExpireTime, setRole, setCompanyId, setCompanyName } from '../../utils/storage';
import { loginUser } from '../../services/user';
import { FAILED, LOADING } from './constants';
import { routes } from '../../configs/routes';
import { format } from 'logeeport-ui';

export function login(data, location) {
  return dispatch => {
    const {
      from: { pathname, search }
    } = location?.state || { from: { pathname: routes.DASHBOARD() } };
    dispatch(loadingAction(true));

    loginUser(data)
      .then(res => {
        dispatch(loadingAction(false));
        if (res.data.accessToken) {
          const { accessToken, roles, company } = res.data;
          const payload={
            ...res.data,
            singleRoute:false
          };


          format.saveLoginCookie(payload, window.location.hostname,'sso');

          setToken(accessToken);
          setUserData(res.data);
          setExpireTime(res.data.exp);
          setRole(roles);
          setCompanyId(company.id);
          setCompanyName(company.name);

          window.location.href = search ? `${pathname}${search}` : pathname;
        } else {
          dispatch(loginFailedAction('You are not allowed to access'));
        }
      })
      .catch(err => {
        const message = err.code >= 400 && err.code < 500 ? err.message : 'Username atau password yang anda masukan salah';
        dispatch(loginFailedAction(message));
        dispatch(loadingAction(false));
      });
  };
}


function loadingAction(isLoading) {
  return { type: LOADING, isLoading };
}

function loginFailedAction(message) {
  return { type: FAILED, message };
}
