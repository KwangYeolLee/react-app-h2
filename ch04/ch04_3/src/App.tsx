import NumberState from "./pages/NumberState";
import InputTest from "./pages/NumberState";
import ShowHideModal from "./pages/ShowHideModal";
import RadioInputTest from "./pages/RadioInputTest";
import HierOrderRadioInputTest from "./pages/HighOrderRadioInputTest";
import BasicForm from "./pages/BasicForm";
import ObjectState from "./pages/ObjectState";
import ArrayState from "./pages/ArrayState";
function App() {
  return (
    <div>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HierOrderRadioInputTest />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </div>
  );
}
export default App;
