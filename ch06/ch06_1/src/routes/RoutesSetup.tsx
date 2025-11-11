import { Routes, Route } from "react-router";
import NoMatch from "./NoMatch";
import Home from "./Home";
import Board from "./Board";
import Post from "./Post";
import Layout from "./Layout";

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/welcome" element={<Home title="Welcome" />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<Post />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
