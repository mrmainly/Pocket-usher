const reducer = (state, action) => {
    switch (action.type) {
        case 'input':
            return {
                ...state,
                [action.field]: action.payload,
            };
        case 'check':
            return {
                ...state,
                [action.field]: !state.payload
            }
    }
}

export default reducer;