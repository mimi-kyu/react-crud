import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/index';
import rootSaga from './sagas/tutorials-crud-sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducer,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export default store;