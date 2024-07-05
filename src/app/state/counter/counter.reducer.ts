import { createReducer, on } from "@ngrx/store";
import { decreament, increament, reset } from "./counter.action";
import { state } from "@angular/animations";
import { count } from "rxjs";

export interface counterState {
  count:number;
}
export const initialCounterState:counterState = {
  count:0,
}

export const counterReducer = createReducer(
  initialCounterState, on(increament, state=>({...state,count:state.count+1})),
   on(decreament, state=>({...state,count:state.count-1})),
   on(reset, state=>({...state, count:0}))
)