const initialState = {
  LibfirstScreen: false,
  LibsecondScreen: false,
};

export const TestReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LIB_FIRST_SCREEN': {
      return {
        ...state,
        LibfirstScreen: true,
      };
    }

    case 'LIB_SECOND_SCREEN': {
      return {
        ...state,
        LibsecondScreen: true,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
