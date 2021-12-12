import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    console.log(action)
    try {
        // const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({type: "increment", data:action.data});
    } catch (e) {
        yield put({type: "increment", data:-1});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//     yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    yield takeLatest("increment", fetchUser);
}

export default mySaga;