export const userReducer = action => {
  switch (action.type) {
    case 'test': {
      console.log('init redux');
      return;
    }
    default:
      return;
  }
};
