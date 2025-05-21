import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    dailyWork: [
        {
            id: 1,
            title: "Humza"
        }
    ]
}

const dailyWorkSlice = createSlice({
    name: "dailyWork",
    initialState,
    reducers: {
        addDailyWork: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload
            }
             state.dailyWork.push(todo)
            console.log(state.dailyWork);
            
        },
        removeDailyWork: (state, action) => {
            state.dailyWork = state.dailyWork.filter((todo) => {
                return todo.id !== action.payload
            })
        },
        updateDailyWork: (state, action)=>{
          state.dailyWork = state.dailyWork.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.title = action.payload.title
                }
                return todo
            })
            
        }
    }
})

export default dailyWorkSlice.reducer
export const {addDailyWork, removeDailyWork ,updateDailyWork} = dailyWorkSlice.actions