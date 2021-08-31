import React from "react";
import { getRepos } from "../service";
import RepoTable from "../components/RepoTable";

const initialState = {
  status: "idle",
  error: null,
  data: [],
  page: 0,
};

function repoReducer(state, action) {
  switch (action.type) {
    case "fetching":
      return { ...initialState, status: "fetching" };
    case "success":
      return { ...initialState, status: "success", repos: action.payload };
    case "error":
      return { ...initialState, status: "error", error: action.payload };
    default:
      console.log("Impossible state being reached");
      return state;
  }
}

function RepoListPage() {
  const [repoState, dispatch] = React.useReducer(repoReducer, initialState);

  React.useEffect(() => {
    dispatch({ type: "fetching" });
    getRepos()
      .then((data) => {
        dispatch({ type: "success", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "error", payload: error });
      });
  }, []);

  if (repoState.status === "idle") {
    return null;
  }

  if (repoState.status === "fetching") {
    return <h2>Loading</h2>;
  }

  if (repoState.status === "error") {
    return repoState.error;
  }

  if (repoState.status === "success") {
    return (
      <>
        <h1>Github Repo List</h1>
        <RepoTable repos={repoState.repos} />
      </>
    );
  }
}

export default RepoListPage;
