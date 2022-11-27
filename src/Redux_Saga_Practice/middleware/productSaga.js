import { type } from '@testing-library/user-event/dist/type'
import { takeEvery,put } from 'redux-saga/effects'
import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from '../utils/const'

function* getProducts() {
    let data = yield fetch('http://localhost:3500/product') //fatch the API
    data = yield data.json() // convert to json format

    yield put({type:SET_PRODUCT_LIST,data})
}

function* productSaga() {
    yield takeEvery(GET_PRODUCT_LIST, getProducts)
}

export default productSaga