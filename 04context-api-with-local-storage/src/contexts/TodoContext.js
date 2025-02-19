import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            title:"Todo 1",
            completed:false
        }
    ],

    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=> {}
})


export const useTodo =()=>{
    return useContext(TodoContext);
}