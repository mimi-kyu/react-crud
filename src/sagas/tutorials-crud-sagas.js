import { call, put, all, takeLatest } from 'redux-saga/effects';
import TutorialDataService from "../services/tutorial.service";
import * as tutorialActions from "../actions/tutorial-actions";
import * as tutorialActionTypes from "../actions/action-types";

function* createTutorial(action) {
    try {
        const tutorial = yield call(TutorialDataService.create, action.payload);
        yield put(tutorialActions.createTutorialSucceededAction(tutorial.data));
    } catch(e) {
        yield put(tutorialActions.createTutorialFailedAction(e.message));
    }
}

function* retrieveTutorials(action) {
    try {
        const tutorials = yield action.payload ? call(TutorialDataService.findByTitle, action.payload) :
                                     call(TutorialDataService.getAll);
        yield put(tutorialActions.retrieveTutorialsSucceededAction(tutorials.data));
    } catch(e) {
        yield put(tutorialActions.retrieveTutorialsFailedAction(e.message));
    }
}

function* updateTutorial(action) {
    try {
        const tutorial = yield call(TutorialDataService.update, action.payload.id, action.payload.tutorial);
        yield put(tutorialActions.updateTutorialSucceededAction(tutorial.data));
    } catch(e) {
        yield put(tutorialActions.updateTutorialFailedAction(e.message));
    }
}

function* deleteTutorial(action) {
    try {
        yield call(TutorialDataService.delete, action.payload.id);
        yield put(tutorialActions.deleteTutorialSucceededAction(action.payload.id));
    } catch(e) {
        yield put(tutorialActions.deleteTutorialFailedAction(e.message));
    }
}

function* deleteAllTutorials() {
    try {
        yield call(TutorialDataService.deleteAll);
        yield put(tutorialActions.deleteAllTutorialsSucceededAction());
    } catch(e) {
        yield put(tutorialActions.deleteAllTutorialsFailedAction(e.message));
    }
}

function* watchCreateTutorial() {
    yield takeLatest(tutorialActionTypes.CREATE_TUTORIAL, createTutorial);
}

function* watchRetrieveTutorials() {
    yield takeLatest(tutorialActionTypes.RETRIEVE_TUTORIALS, retrieveTutorials);
}

function* watchUpdateTutorial() {
    yield takeLatest(tutorialActionTypes.UPDATE_TUTORIAL, updateTutorial);
}

function* watchDeleteTutorial() {
    yield takeLatest(tutorialActionTypes.DELETE_TUTORIAL, deleteTutorial);
}

function* watchDeleteAllTutorials() {
    yield takeLatest(tutorialActionTypes.DELETE_ALL_TUTORIALS, deleteAllTutorials);
}

export default function* rootSaga() {
    yield all([watchCreateTutorial(), watchRetrieveTutorials(), watchUpdateTutorial(),
               watchDeleteTutorial(), watchDeleteAllTutorials()]);
}