let initialState = {
	todos: [
		{
			text: "Take out the trash",
			isComplete: false
		}
	]
};


// This reducer isn't pure! Fix it plz
// If you have to do a deep copy of an array or object use .map
//Object.freeze(state); this will break your code if you type a mutating line.
//You can add Object.freeze(state) in your reducer while you are coding it.
const reducer = (state = initialState, action) => {

	let stateCopy = {
		...state,
		todos: state.todos.map((currentToDO) => {
			return {...currentToDO}
		})
	};

	if (action.type == "ADD_TODO") {
		stateCopy.todos.push({
			text: action.todoText,
			isComplete: false
		});
		return stateCopy;
	} else if (action.type == "TOGGLE_TODO") {
		let todoToToggle = stateCopy.todos[action.todoIndex];
		todoToToggle.isComplete = !todoToToggle.isComplete;
		return stateCopy;
	} else {
		return state;
	}
}
