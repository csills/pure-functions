let initialState = {
	counterValue: 0
};

// This reducer isn't pure! It updates the "counterValue" key of the original 
//     state object
const reducer = (state = initialState, action) => {
	if (action.type == "INCREMENT") {
		//Old Code:
		//state.counterValue++;
		//return state;
		let stateCopy = {...state}; // same as: Object.assign({}, state);
		stateCopy.counterValue++;
		return stateCopy;
	} else {
		return state;
	}
}
