import { RESET_FORM, UPDATE_FORM } from '../actions/formActions';

const initialState = {
  personalInfo: {},
  education: [],
  workExperience: [],
  skills: {},
  additionalInfo: {},
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.payload.step]: action.payload.data,
      };
      case RESET_FORM:
        return initialState;
    default:
      return state;
  }
  
};



export default formReducer;
