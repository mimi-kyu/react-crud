import * as actionTypes from "../actions/action-types";

const initialState = [];

function tutorialReducer(tutorials = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.CREATE_TUTORIAL_SUCCEEDED:
      return [...tutorials, payload];

    case actionTypes.RETRIEVE_TUTORIALS_SUCCEEDED:
      return payload;

    case actionTypes.UPDATE_TUTORIAL_SUCCEEDED:
      return tutorials.map((tutorial) => {
        if (tutorial.id === payload.id) {
          return {
            ...tutorial,
            ...payload,
          };
        } else {
          return tutorial;
        }
      });

    case actionTypes.DELETE_TUTORIAL_SUCCEEDED:
      return tutorials.filter(({ id }) => id !== payload.id);

    case actionTypes.DELETE_ALL_TUTORIALS:
      return [];

    default:
      return tutorials;
  }
};

export default tutorialReducer;

export const selectTutorialById = (state, id) => {
  const tutorials = state.tutorialReducer;
  const tutorialFound = tutorials.find(tutorial => tutorial.id = id);
  return tutorialFound;
}