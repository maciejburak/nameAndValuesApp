import React, { useEffect, useState } from "react";
import "./Table.css";

function Table({ user }) {
  const [userDataArray, setUsersDataArray] = useState([]);
  useEffect(() => {
    if (user !== null && !isNaN(user.value)) {
      setUsersDataArray([...userDataArray, user]);
    }
  }, [user]);

  return (
    <div>
      <div className="headers">
        <h1 className="singleHeader">Name</h1>
        <h1 className="singleHeader">Value</h1>
      </div>
      {userDataArray.map((singleUser, index) => (
        <div key={index} className={index % 2 ? "properties unpairedIndex" : "properties oddIndex"}>
          <p className="property">{singleUser.name}</p>
          <p className="property">{singleUser.value * 100}</p>
        </div>
      ))}
    </div>
  );
}

export default Table;
