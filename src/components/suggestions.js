import React from "react";
import { Link } from "react-router-dom";

const Suggestions = props => {
  const options = props.results.map((result, i) => (
    <div key={i}>
      <p>{result.login}</p>
      <Link to="/userrepo">
        <img src={result.avatar_url} alt={"image"} />
      </Link>
    </div>
  ));
  return <div>{options}</div>;
};

export default Suggestions;
