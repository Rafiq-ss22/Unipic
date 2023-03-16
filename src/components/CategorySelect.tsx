import { createSignal, createEffect ,Index, onMount} from 'solid-js';

function CategorySelect(props:any) {
  const [selectedOption, setSelectedOption] = createSignal('');
  onMount(()=>setSelectedOption(props.options[0][0]))

//   createEffect(() => {
//     props.onChange(selectedOption());
//   });

const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    console.log(`Selected option: ${selectedOption}`);
    props.onChange(selectedOption);
  };


  return (
    <div class=" h-12  basis-full flex">
    <div class="custom-select rounded-l-full flex border-gray-100 border-r-2 bg-yellow-50 pr-12">
    
            <div class="custom-select text-start  border-none rounded-l-full pl-10 bg-yellow-50  " >
            <select class="focus:outline-none rounded-l-full bg-yellow-50 p-4 text-black text-sm pr-12  "  onChange={handleSelectChange} >
            <Index each={props.options}>{(item:any)=>(<option class=' relative ' value={item()}>
                    {item}
                </option>)}
                </Index>
            </select>
            </div>
     
       
    </div>
            <div class="relative  focus:outline-none bg-yellow-50 rounded-r-full flex   w-full">
            <svg aria-hidden="true" class=" w-8  h-8 mt-2" fill="none" stroke="skyblue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
                <input type="search" id="search-dropdown" class="block focus:outline-none rounded-r-full  bg-yellow-50 p-2.5 w-96 z-20 text-sm text-gray-900 "  required/>

            </div>

    </div>
    
  );
}


export default CategorySelect