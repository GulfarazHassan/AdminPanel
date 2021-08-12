import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout/index";
import HomeScreen from "./screens/HomeSreens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
