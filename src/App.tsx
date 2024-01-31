import "./App.css";
import Private from "./component-props/Private";
import Profile from "./component-props/Profile";
import Counter from "./components/Counter";
import { Greet } from "./components/Greet";

import User from "./components/User";
import CustomButton from "./html/CustomButton";
import CustomComponent from "./html/CustomComponent";
import Input from "./html/Input";
import Text from "./polymorphic/Text";
import DomRef from "./ref/DomRef";
import MutableRef from "./ref/MutableRef";
import RandomNumber from "./restriction/RandomNumber";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomButton variant="primary">Button Label</CustomButton>
        <CustomButton variant="secondary">Button Label</CustomButton>
        <CustomButton
          variant="primary"
          size="icon"
          onClick={() => console.log("hello icon")}
        >
          +
        </CustomButton>
        <Input
          name="shiv"
          placeholder="hello shiv"
          onChange={(e) => console.log(e.target.value)}
        />
        <CustomComponent name="shiv" />

        <Text size="lg" as="h1" color="primary">
          Heading
        </Text>
        <Text size="md" as="p">
          Paragraph
        </Text>
        <Greet name="shiv" />
      </header>
    </div>
  );
}

export default App;
