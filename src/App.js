import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/index";
import SignInScreen from "./screens/AuthScreens/SignInScreen";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout />

        <Route path='/'>
          <SignInScreen />
        </Route>
        <Route path='/'>
          <SignInScreen />
        </Route>
        <Route path='/SignIn'>
          <SignInScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
