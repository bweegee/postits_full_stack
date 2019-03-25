const toggleform = (toggleform = true, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return !toggleform;
    default:
      return toggleform;
  }
};

export default toggleform;
