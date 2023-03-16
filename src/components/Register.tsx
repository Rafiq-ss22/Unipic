import { Component, createMemo, createSignal } from "solid-js";
import { render } from "solid-js/web";
import { Form, FormType } from "solid-js-form";
import * as Yup from "yup";
import { createGraphQLClient, gql } from "@solid-primitives/graphql";
import { useGlobalContext } from "../GlobalContext/store";
import { redirect, createServerData$ } from "solid-start/server";
import axios from "axios";


// const newQuery = createGraphQLClient("http://localhost:8000/graphQl");
// const [data, { refetch }] = newQuery(
//   gql`
//   mutation{
//     Adduser(username:"goku",password:"12354"){
//       Id
//       username
//       password
//     }
//   }
//   `,
//   { path: "home" },
// );

  const Register = () => {
    const {loggedIn, setLoggedIn} =useGlobalContext()
    const {setForm,form} = useGlobalContext()

    const handleRegister =()=>{
      setForm(!form())
    }


  return (
    <Form
      initialValues={{ name: "",mobileNumber:"",email:"", password: "" }}
      // validation={{
      //   username: Yup.string().required(),
      //   password: Yup.string().required(),
      // }}
      
      onSubmit={async (form:any) => {
        const res = await axios.post("http://localhost:8000/register",{
          "username": form.values.name,
          "password": form.values.password,
          "mobile":  form.values.mobileNumber,
          "email": form.values.email  
          })

          setLoggedIn(true)
 
      }}
    >
      {(form?: any) => {
        const formHandler = form.formHandler;
        const usernameError = createMemo(() =>
          form.errors.username && form.touched.username
            ? form.errors.username
            : ""
        );
        const passwordError = createMemo(() =>
          form.errors.password && form.touched.password
            ? form.errors.password
            : ""
        );
        return (
          <div class=" flex justify-around flex-col ml-6 mr-9 w-96 mt-60 h-80 z-30 mb-20 ">
            <div class="flex vertical-center space-between" style="margin-bottom: 10px;">
             <h2 class="styles_signInHeader__SO4xX" style="font-weight: 600; font-size: 18px;">Welcome to the amazing world of Unipick!</h2><div class="styles_closeIcon__Lkujf">
          </div></div>
              <div>
              <p>Your gateway to all things sustainable, creative, cultural and handcrafted with love!</p>
                </div>    
  
            <div class=" mt-10 flex justify-evenly">
            <input 
               name="name"
               class=" h-14 p-5 focus:outline-none bg-gray-100 w-96 rounded-l-3xl rounded-r-3xl"
               placeholder="Name"
                value={form.values.name}
                //@ts-ignore
                use:formHandler
            />
            </div>
            <span class="place-self-center">{usernameError()}</span>
            <br />
            <div class=" flex justify-evenly">
            <input 
               name="mobileNumber"
               class=" h-14 p-5 focus:outline-none bg-gray-100 w-96 rounded-l-3xl rounded-r-3xl"
               placeholder="Mobile Number"
                value={form.values.mobileNumber}
                //@ts-ignore
                use:formHandler
            />
           
            </div>
            <span class="place-self-center">{usernameError()}</span>
            <br />
            <div class="  flex justify-evenly">
            <input 
               name="email"
               class=" h-14 p-5 focus:outline-none bg-gray-100 w-96 rounded-l-3xl rounded-r-3xl"
               placeholder="Email"
                value={form.values.email}
                //@ts-ignore
                use:formHandler
            />
           
            </div>
            <span class="place-self-center">{usernameError()}</span>
            <br />
            <div  class="flex justify-evenly">
            <input 
              name="password"
                value={form.values.password}
                class=" h-14 p-5 focus:outline-none bg-gray-100 w-96 rounded-l-3xl rounded-r-3xl"
                placeholder="Password"
                //@ts-ignore
                use:formHandler 
            />
         
            </div>
            <span  class="place-self-center">{passwordError()}</span>
            <br />
            <div class="flex justify-start ">
              <span onclick={handleRegister} class=" underline text-gray-400">sign In</span>

              </div>
            <div class="flex justify-center">
            <button class=" h-14 p-5 focus:outline-none bg-yellow-400 w-96 rounded-l-3xl font-medium rounded-r-3xl" type="submit">Sign Up</button>
            </div>
            <div class=" justify-center text-center mt-10"><p class="styles_notes__lm54Q">By clicking Sign in or Sign in with Google or Facebook or WhatsApp, you agree to Unipick's </p>
            <p><span class="styles_hyperlinks__tkkLu">Terms of Use</span> and 
            <span class="styles_hyperlinks__tkkLu">Privacy Policy</span>. 
            Unipick may send you communications. You may change your preferences in your account settings.</p>

</div>
          </div>
        );
      }}
    </Form>
  );
};



export default Register;