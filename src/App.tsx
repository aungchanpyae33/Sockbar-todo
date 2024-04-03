import React from "react";
import Navbar from "./component/Navbar";
import Text from "./component/Text";
import Button from "./component/Button";

function App() {
  const [click, setclick] = React.useState(false);
  return (
    <div className="bg-white py-3  rounded-lg">
      <Navbar click={click} setclick={setclick} />
      <Text />
      <Button />
    </div>
  );
}

export default App;
