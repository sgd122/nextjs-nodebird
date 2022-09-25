import axios from 'axios';
import { put, all, fork, take, call } from 'redux-saga/effects';

function loginAPI(data: any) {
  return axios.post('/api/login', data);
}

function* logIn(action: { data: any }): any {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (error: any) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: error.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut(): any {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data,
    });
  } catch (error: any) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: error.response.data,
    });
  }
}

function addPostAPI(data: any) {
  return axios.post('/api/post', data);
}

function* addPost(action: { data: any }): any {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (error: any) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: error.response.data,
    });
  }
}

function* watchLogIn() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  yield take('ADD_POST', addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
