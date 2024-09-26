import { Provider } from "react-redux";
import AppLayout from "./ui/AppLayout";
import appStore from "./store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <AppLayout />
    </Provider>
  );
}

export default App;
