const initState = {
  points: 0,
  isStart: false,
  timePlay: 0,
  win: null,
  reset: false,
  nextPoint: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_POINTS":
      return { ...state, points: action.payload };

    case "START":
      return { ...state, isStart: true };

    case "RESTART":
      return { ...state, win: null, reset: !state.reset, nextPoint: 1 };

    case "INCREASE_NEXT_POINT":
      return { ...state, nextPoint: action.payload };

    case "LOSE":
      return { ...state, win: false };

    case "WIN":
      return { ...state, win: true };

    case "UPDATE_TIME":
      return { ...state, timePlay: action.payload };

    default:
      return state;
  }
};

export { initState, reducer };
