import { useContext } from "react";
import { CounterContext } from "../store/CounterProvider";

export const useCounter =()=>{
    const context =  useContext(CounterContext);
    return context;
}