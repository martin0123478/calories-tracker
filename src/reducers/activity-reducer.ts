import { Activity } from "../types"

export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: Activity } } |

    { type: 'set-activiteId', payload: { id: Activity['id'] } } |
    { type: 'delete-activity', payload: { id: Activity['id'] } } |
    { type: 'restar-app' }


export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

const localStorageActivities = () => {
    const actrivities = localStorage.getItem('activities')
    return actrivities ? JSON.parse(actrivities) : []
}
export const initialState: ActivityState = {
    activities: localStorageActivities(),
    activeId: ''

}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        let updatedActivities: Activity[] = []
        if (state.activeId) {
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)

        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        return {
            ...state, activities: updatedActivities,
            activeId: ''
        }
    }

    if (action.type === 'set-activiteId') {
        return {
            ...state, activeId: action.payload.id
        }
    }
    if (action.type === 'delete-activity') {
        return {
            ...state,
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }

    if (action.type === 'restar-app') {
        return {
            activities: [],
            activeId: ''
        }
    }


    return state
}