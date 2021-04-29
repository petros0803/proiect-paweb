import { Switch, Route } from "react-router-dom";
import Aboutme from "./pages/Aboutme";
import Navbar from "./compoenents/Navbar";
import AboutmePage from "./pages/AboutmePage";
import WhatILike from "./pages/WhatILike";

function App() {
  return (
    <Switch>
      <div>
        <Navbar />
        <Route path="/" exact>
          {" "}
          <Aboutme leftPage={<AboutmePage />} />{" "}
        </Route>
        <Route path="/whatilike">
          <Aboutme leftPage={<WhatILike />} />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
