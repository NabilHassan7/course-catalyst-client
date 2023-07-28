import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes/Routes";

function App() {
  return (
    <>
      <div>
        {/* importing the router provider */}
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </>
  );
}

export default App;
