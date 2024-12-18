import axios from "axios";
import React, { useEffect, useState } from "react";

const Body = async () => {
  const response = await axios.get("http://127.0.0.1:1337/api/camps");
  const data = response.data.data;

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );

  // Bug -- api not working
  // return data ? (
  //   <div>
  //     {data.map((camp: any) => (
  //       <div key={camp.id}>
  //         <h2>{camp.name}</h2>
  //         <p>{camp.description}</p>
  //       </div>
  //     ))}
  //   </div>
  // ) : null;
};

export default Body;
