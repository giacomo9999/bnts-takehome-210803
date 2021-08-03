import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./actions";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ContainerWrapper from "./components/ContainerWrapper";

function App() {
  const routesData = useSelector((state) => state.routes);
  const dispatch = useDispatch();
  const url =
    "https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main";

  useEffect(() => {
    dispatch(fetchData(url + "/routes.json", "routes"));
  }, []);

  const routeLinksList = () => {
    const routesListArr = [];
    let keyIndex = 1;
    for (let route in routesData) {
      routesListArr.push(
        <li key={keyIndex}>
          <Link to={route}>{routesData[route]}</Link>
        </li>
      );
      keyIndex += 1;
    }
    return routesListArr;
  };

  return (
    <BrowserRouter>
      <main>
        <nav>
          <ul>{routesData.length === 0 ? null : routeLinksList()}</ul>
        </nav>
      </main>
      <Route
        path="/:route"
        render={(props) => (
          <ContainerWrapper {...props} baseUrl={url} key={Math.floor(Math.random() * 10000)} />
        )}
      />
    </BrowserRouter>
  );
}

export default App;
