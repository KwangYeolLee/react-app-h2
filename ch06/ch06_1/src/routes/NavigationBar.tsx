import { Link } from "../components/Link";

export default function NavitationBar() {
  return (
    <div className="flex p-2 bg-base-200 navbar">
      <Link to="/">Home</Link>
      <Link to="/welcome" className="ml-4">
        Welcome
      </Link>
      <Link to="/board" className="ml-4">
        Board
      </Link>
    </div>
  );
}
