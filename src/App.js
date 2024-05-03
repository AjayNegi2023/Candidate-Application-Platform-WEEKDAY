import { Provider } from "react-redux";
import Intro from "./Components/Intro";
import appStore from "./Redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Intro/>
    </Provider>
  );
}

export default App;
