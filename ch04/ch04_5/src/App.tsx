import ClickTest from "./pages/ClickTest";
import FileDrop from "./pages/FileDrop";
import InputFocusTest from "./pages/InputFocus";
import InputValueTest from "./pages/InputValue";
import ForwardRefTest from "./pages/ForwardRefTest";
import ValidatableInputTest from "./pages/ValidatableInputTest";
export default function App() {
  return (
    <main>
      <ValidatableInputTest />
      <ForwardRefTest />
      <InputValueTest />
      <InputFocusTest />
      <FileDrop />
      <ClickTest />
    </main>
  );
}
