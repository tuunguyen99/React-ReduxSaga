import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import { PRODUCT_SAGA_TYPES } from "src/constants";
import {
  LIST_PRODUCT_ADD,
  LIST_PRODUCT_EDIT,
  LIST_PRODUCT_DEL,
} from "src/constants";
import {
  apiListProduct,
  apiCreateProduct,
  apiEditProduct,
  apiDelProduct,
} from "src/apis";

function* ListProductFlow(action) {
  try {
    const res = yield call(apiListProduct);
    yield put({ type: PRODUCT_SAGA_TYPES.LIST_PRODUCT_SUCCESS, res });
  } catch {
    yield put({ type: PRODUCT_SAGA_TYPES.LIST_PRODUCT_ERROR, res });
  }
}

function* AddProductFlow(action) {
  try {
    const res = yield call(apiCreateProduct,action.item);
    yield put({ type: PRODUCT_SAGA_TYPES.CREATE_PRODUCT_SUCCESS, res });
  } catch {
    yield put({ type: PRODUCT_SAGA_TYPES.CREATE_PRODUCT_ERROR, res });
  }
}

function* EditProductFlow(action) {
  try {
    const res = yield call(apiEditProduct(action.item));
    yield put({ type: PRODUCT_SAGA_TYPES.EDIT_PRODUCT_SUCCESS, res });
  } catch {
    yield put({ type: PRODUCT_SAGA_TYPES.EDIT_PRODUCT_ERROR, res });
  }
}

function* DeleteProductFlow(action) {
  try {
    const res = yield call(apiDelProduct(action.index));
    yield put({ type: PRODUCT_SAGA_TYPES.DELETE_PRODUCT_SUCCESS, res });
  } catch {
    yield put({ type: PRODUCT_SAGA_TYPES.DELETE_PRODUCT_ERROR, res });
  }
}

function* productWatcher() {
  yield takeEvery(LIST_PRODUCT_ADD,AddProductFlow);
//   yield takeEvery(LIST_PRODUCT_EDIT,EditProductFlow);
//   yield takeEvery(LIST_PRODUCT_DEL,DeleteProductFlow)
}

export default productWatcher;
