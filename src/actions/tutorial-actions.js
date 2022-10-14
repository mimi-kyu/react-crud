import * as actionTypes from "./action-types";

export const createTutorialAction = (tutorial) => {
    return {
        type: actionTypes.CREATE_TUTORIAL,
        payload: tutorial
    }
}

export const createTutorialSucceededAction = (tutorial) => {
    return {
        type: actionTypes.CREATE_TUTORIAL_SUCCEEDED,
        payload: tutorial
    }
}

export const createTutorialFailedAction = (error) => {
    return {
        type: actionTypes.CREATE_TUTORIAL_FAILED,
        error: error
    }
}

export const retrieveTutorialsAction = (title) => {
    return {
        type: actionTypes.RETRIEVE_TUTORIALS,
        payload: title
    }
}

export const retrieveTutorialsSucceededAction = (tutorials) => {
    return {
        type: actionTypes.RETRIEVE_TUTORIALS_SUCCEEDED,
        payload: tutorials
    }
}

export const retrieveTutorialsFailedAction = (error) => {
    return {
        type: actionTypes.RETRIEVE_TUTORIALS_FAILED,
        error: error
    }
}

export const updateTutorialAction = (id, tutorial) => {
    return {
        type: actionTypes.UPDATE_TUTORIAL,
        payload: {
            id: id,
            tutorial: tutorial
        }
    }
}

export const updateTutorialSucceededAction = (tutorial) => {
    return {
        type: actionTypes.UPDATE_TUTORIAL_SUCCEEDED,
        payload: tutorial
    }
}

export const updateTutorialFailedAction = (error) => {
    return {
        type: actionTypes.UPDATE_TUTORIAL_FAILED,
        error: error
    }
}

export const deleteTutorialAction = (id) => {
    return {
        type: actionTypes.DELETE_TUTORIAL,
        payload: id
    }
}

export const deleteTutorialSucceededAction = (id) => {
    return {
        type: actionTypes.DELETE_TUTORIAL_SUCCEEDED,
        payload: id
    }
}

export const deleteTutorialFailedAction = (error) => {
    return {
        type: actionTypes.DELETE_TUTORIAL_FAILED,
        error: error
    }
}

export const deleteAllTutorialsAction = () => {
    return {
        type: actionTypes.DELETE_ALL_TUTORIALS
    }
}

export const deleteAllTutorialsSucceededAction = () => {
    return {
        type: actionTypes.DELETE_ALL_TUTORIALS_SUCCEEDED
    }
}

export const deleteAllTutorialsFailedAction = (error) => {
    return {
        type: actionTypes.DELETE_ALL_TUTORIALS_FAILED,
        error: error
    }
}