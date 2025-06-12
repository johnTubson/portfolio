import { BrowserRouter, Route, Routes } from "react-router";
import { LandingPage } from "./features/landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="*" Component={LandingPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
