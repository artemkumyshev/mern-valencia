const initialState = {
  currentUser: {},
  isAuth: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.paylaod,
        isAuth: true,
      };

    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };

    default:
      return state;
  }
};

export default users;
