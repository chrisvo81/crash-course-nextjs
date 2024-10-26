import React, { useEffect, useState } from "react";

const Body = async () => {
  const response = await fetch("http://localhost:1337/api/camps");
  console.log("🚀 ~ Body ~ response:", response);

  // const data = response.json();
  return (
    <div>
      {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>} */}
    </div>
  );
};

export default Body;
