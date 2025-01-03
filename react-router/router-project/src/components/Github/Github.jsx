import React, { useEffect, useState  } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/crwaskar")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);
  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="git_profile_pic" width={300} />
    </div>
  );
};

export default Github;


