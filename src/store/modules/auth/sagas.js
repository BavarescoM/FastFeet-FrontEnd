import { all, takeLatest, call, put } from "redux-saga/effects";
import { signInFailure, signInSuccess } from "./actions";
import history from "../../../services/history";
import api from "../../../services/api";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password,
    });
    console.tron.log(response);
    const { token, user } = response.data;
    yield put(signInSuccess(token, user));

    history.push("/order");
  } catch (err) {
    console.tron.log("nao bombou" + err);
  }
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
