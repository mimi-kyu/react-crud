import * as actionTypes from "../actions/action-types";

const initialState = [];

function tutorialReducer(tutorials = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.CREATE_TUTORIAL_SUCCEEDED:
      return [...tutorials, { data: payload, inProgress: false }];

    case actionTypes.RETRIEVE_TUTORIALS_SUCCEEDED:
      return payload.map((tutorial) => ({data: { ...tutorial }, inProgress: false}));

    case actionTypes.UPDATE_TUTORIAL:
      return tutorials.map((tutorial) => {
        if (tutorial.data.id === payload.id) {
          return {
            data: { ...tutorial.data },
            inProgress: true
          };
        } else {
          return tutorial;
        }
      }); 

    case actionTypes.UPDATE_TUTORIAL_SUCCEEDED:
      return tutorials.map((tutorial) => {
        if (tutorial.data.id === payload.id) {
          return {
            data: { ...tutorial, ...payload },
            inProgress: false
          };
        } else {
          return tutorial;
        }
      });

    case actionTypes.DELETE_TUTORIAL_SUCCEEDED:
      return tutorials.filter(({ data: {id} }) => id !== payload.id);

    case actionTypes.DELETE_ALL_TUTORIALS:
      return [];

    default:
      return tutorials;
  }
};

export default tutorialReducer;

export const selectTutorialById = (state, id) => {
  const tutorials = state.tutorialReducer;
  const tutorialFound = tutorials.find(tutorial => tutorial.data.id === id);
  return tutorialFound;
}