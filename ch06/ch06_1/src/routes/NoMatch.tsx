import { useCallback } from "react";
import { useNavigate } from "react-router";
export default function NoMatch() {
  const navigate = useNavigate();
  const onBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <div>
      <p className="text-xl text-center alert alert-error">No Page Found!</p>
      <button onClick={onBack} className="btn btn-primary btn-sm">
        Back
      </button>
    </div>
  );
}
