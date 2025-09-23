import Clock from "./pages/Clock";

function App() {
  const today = new Date();
  return <Clock today={today} />;
}
export default App;
