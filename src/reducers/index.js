import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import login from '@pages/Login/reducer';
import main from '@pages/Main/reducer';

const rootReducer = combineReducers({
  login,
  main,
  form: formReducer,
  routing: routerReducer,
});

export default rootReducer;
