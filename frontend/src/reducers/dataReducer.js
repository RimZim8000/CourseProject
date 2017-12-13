export default function dataReducer(state = false, action = []) {
  switch (action.type) {
    case "DATA_READY": {
      var retState = false;
      if (
        action !== null &&
        action !== undefined &&
        action.payLoad !== null &&
        action.payLoad !== undefined &&
        action.payLoad !== []
        ) {
              retState = {
                payLoad: action.payLoad
          };
        return retState;
      }
      break;
    }
    default:
      return state;
  }
}
