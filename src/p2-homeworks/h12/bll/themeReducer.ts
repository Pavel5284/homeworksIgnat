type InitialStateType = typeof initState

const initState = {
    value: 'white'
};

export const themeReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, value: action.value}
        }
        default: return state;
    }
};

type ActionType = ReturnType<typeof changeThemeC>

export const changeThemeC = (value:string) => ({type: 'CHANGE-THEME', value} as const);