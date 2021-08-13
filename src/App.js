import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout/index";
import Dashboard from "./screens/HomeSreens/Dashboard/index";
import Plans from "./screens/HomeSreens/Plans";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/'>
            {/* <Dashboard /> */}
            <Plans />
          </Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
