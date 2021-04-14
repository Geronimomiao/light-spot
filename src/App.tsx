import React, {useState} from "react";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Transition from "./components/Transition";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./styles/index.scss";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="App">
      <Button btnType="primary" onClick={() => setShowMessage(!showMessage)}>Hello</Button>
      <Icon icon="arrow-down" theme="dark" size="lg" />
      <Transition animation="zoom-in-top" in={showMessage} timeout={3000}>
        <div>this is a disabledProps</div>
      </Transition>
    </div>
  );
}

export default App;
