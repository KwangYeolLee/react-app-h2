import P from "./P";

export default function App() {
  const texts = ["Hello", "World"].map((item, index) => (
    <P key={index} children={item} />
  ));
  return <div children={texts} />;
}
