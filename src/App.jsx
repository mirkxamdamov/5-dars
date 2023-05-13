import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/layoult"
import { Contact } from "./pages/contact";
import { ContactForm } from "./pages/contact-form/contact-form";
import { ErrorPage } from "./pages/error-page";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'contact/:id',
        element: <Contact/>
      },
      {
        path: 'add',
        element:<ContactForm/>
      },
      {
        path: 'edit',
        element:<ContactForm/>
      }
    ]
  }
]);

export function App() {
  return <RouterProvider router={routers}/>
}