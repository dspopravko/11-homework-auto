const initState = {
    themeId: 1,
}
export type StateType = typeof initState

export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any

type ActionType = ReturnType<typeof changeThemeId>