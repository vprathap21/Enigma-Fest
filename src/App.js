import { Provider } from "react-redux";
import Main from "./components/Main";
import appStore from "./utils/appStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(appStore);
function App() {
  return (
    <Provider store={appStore}>
      <PersistGate persistor={persistor} loading={null}>
      <Main />
      </PersistGate>
   
    </Provider>
  );
}

export default App;
