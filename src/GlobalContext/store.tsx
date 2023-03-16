import { createSignal, createContext,useContext,Setter,Accessor } from "solid-js";

interface ContextProps {
    loggedIn:Accessor<Boolean>,
    setLoggedIn:Setter<Boolean>,
    form:Accessor<Boolean>,
    setForm:Setter<Boolean>,
}

const GlobalContext =createContext<ContextProps>()


export const GlobalContextProvider =(props) =>{
    const [loggedIn,setLoggedIn] =createSignal(false)
    const [form,setForm] = createSignal(false)

    return (

        <GlobalContext.Provider value={{loggedIn,setLoggedIn,form,setForm}}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = ()=>useContext(GlobalContext)!