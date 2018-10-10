import React from "react";

const UserRepo = props => {
  const options = props.results.map((result, i) => (
    <div key={i}>
      <img src={result.avatar_url} alt={"image"} />
      <p>{result.login}</p>
    </div>
  ));
  return <div>{options}</div>;
};

export default UserRepo;
