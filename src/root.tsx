// @refresh reload
import { Suspense,createSignal, onMount ,Show, createEffect} from "solid-js";
import { GlobalContextProvider } from "./GlobalContext/store";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@suid/material";import { SelectChangeEvent } from "@suid/material/Select";
import CategorySelect from "./components/CategorySelect";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import TemporaryDrawer from "./components/SignupDrawer";
import axios from "axios";
import AccountMenu from "./components/ProfileDropdown";





// export const client = createClient({
//   url: "http://localhost:8000",
//   exchanges: [
//     ...defaultExchanges,
//     subscriptionExchange({
//       forwardSubscription: (operation) =>
//         subscriptionClient.request(operation) as any,
//     }),
//   ],
// });

// interface User {
//   username: string;
//   password: string;
// }

// const [user, setUser] = createSignal<User[]>([]);

export default function Root() {
  const location = useLocation();
  const [age, setAge] = createSignal("");
  // 


  const [token, setToken] =createSignal()
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";




  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
          <GlobalContextProvider>

            <Routes>
              <FileRoutes />
            </Routes>
            </GlobalContextProvider>

          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
