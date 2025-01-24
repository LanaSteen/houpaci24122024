import { createAction, props } from "@ngrx/store";

export const addTodo = createAction('[Todo List] Add Todo', 
    props<{title: string}>() 
);


export const removeTodo = createAction('[Todo List] Remove Todo', 
    props<{id: number}>()
);
