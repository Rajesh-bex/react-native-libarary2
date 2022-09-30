const initialState = {
  firstScreen: false,
  secondScreen: false,
};

export const LibTestReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LIB_FIRST_SCREEN': {
      return {
        ...state,
        firstScreen: true,
      };
    }

    case 'LIB_SECOND_SCREEN': {
      return {
        ...state,
        secondScreen: true,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
