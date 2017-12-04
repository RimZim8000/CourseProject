export default function loginReducer(state = false, action) {
    switch (action.type) {
      case 'USER_LOGIN':
        return action.payLoad;
      default:
        return state;
    }
  }
