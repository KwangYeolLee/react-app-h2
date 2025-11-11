import { Routes, Route } from "react-router";
import NoMatch from "./NoMatch";

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
