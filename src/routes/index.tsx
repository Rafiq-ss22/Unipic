import { A } from "solid-start";
import { useGlobalContext } from "../GlobalContext/store";
import { GlobalContextProvider } from "../GlobalContext/store";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@suid/material";import { SelectChangeEvent } from "@suid/material/Select";
import CategorySelect from "../components/CategorySelect";
import TemporaryDrawer from "../components/SignupDrawer";
import axios from "axios";
import AccountMenu from "../components/ProfileDropdown";
import { Suspense,createSignal, onMount ,Show, createEffect} from "solid-js";


export default function Home() {

    const {loggedIn, setLoggedIn} =useGlobalContext()
    console.log(loggedIn())
    const [token, setToken] =createSignal()
    const [data,setData] =createSignal()

    onMount(async()=>{
      setData(window.sessionStorage.getItem('token'))
      const config = {
        headers: {
          Authorization: `bearer ${data()}`,
        },
      };
      const res = await axios.post("http://localhost:8000/getLogin",{},config)
      console.log(res)
      if(res.status == 200){
        setToken(res.data);
      }
   
    
    })
  
    function handleSelectChange(option:string) {
      console.log(`Selected option: ${option}`);
    }

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
            <nav class="border-b flex  w-full border-gray-400">
              <ul class=" flex  w-full items-center pt-10 pb-10 pl-20 text-gray-200">
                <li class="  h-10 bg-contain ">
                  <img class=" h-10" src="./logo.unipic.webp"/>
                </li>
                <li class="  h-10 pl-5 pr-5 bg-contain w-full ">
                  <CategorySelect options={[['all category'],['get']]}  onChange={handleSelectChange}/>
                </li>

             
              </ul>
              <ul class=" flex   items-center pt-10 pb-10 text-gray-200" >
              <li class="mx-1  align-text-bottom flex flex-col h-10 bg-contain sm:mx-3">
                <img class=" h-10 w-6" src="./cart.svg"/>
                <p class=" text-black text-xs font-medium">Cart</p>
                </li>
                <li class="mx-1 flex flex-col h-10 bg-contain sm:mx-3">
                <img class="w-6 h-8 pb-3" src="./GI.svg"/>
                <p class=" text-black text-xs font-medium">GI</p>
                </li>
                <li class="mx-1 flex flex-col h-10 bg-contain sm:mx-3">
                <img class=" w-7 h-10 pb-1" src="./collection.svg"/>
                <p class=" text-black text-xs font-medium">Collection</p>
                </li>
                <li class="mx-1 flex flex-col h-10 bg-contain sm:mx-3">
                <img class="w-8 h-10" src="./Social.svg"/>
                <p class=" text-black text-xs font-medium">Social</p>
                </li>

              </ul>
              <div class=" flex  w-52  items-center pt-10 pb-10 text-gray-200" >
              {/* <button class=" rounded-r-3xl rounded-l-3xl pl-2 pr-2 w-full h-12 bg-sky-400">Sign up</button> */}
               <Show when={!token()} fallback={<AccountMenu/>}>
                <TemporaryDrawer/>
                </Show>
              
              </div>
              <div  class=" flex  w-28"></div>
            </nav>

    </main>
  );
}
