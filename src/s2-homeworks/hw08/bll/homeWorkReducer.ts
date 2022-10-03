import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') state = state.sort((u, u2) => u.name.localeCompare(u2.name))
            else state = state.sort((u, u2) => u2.name.localeCompare(u.name))
            return state // need to fix
        }
        case 'check': {
            state = state
                .sort((u, u2) => u.name.localeCompare(u2.name))
                .filter(u => u.age >= action.payload)
            return state // need to fix
        }
        default:
            return state
    }
}
