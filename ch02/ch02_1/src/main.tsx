import { createRoot } from "react-dom/client";
import "./index.css";
import * as D from "./data";
const children = D.makeArray(3).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} alt="avatar" />
  </div>
));
const rootVirtualDOM = <div>{children}</div>;
createRoot(document.getElementById("root")!).render(rootVirtualDOM);
