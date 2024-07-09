import React from "react";
import Router from "./Routes/Route";
import { BrowserRouter } from "react-router-dom";
import AttendencePage from "./AttendencePage/AttendencePage";
import AppRouter from "./Routes/Route";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    // <RouterProvider router={Router}/>
    // <AttendencePage/>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
