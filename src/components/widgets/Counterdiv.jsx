import React from "react";

function Counterdiv({ count }) {
  return (
    <div className="bg-rosepink rounded-md mx-1">
      <p className="text-sm text-white px-2  ">{count}</p>
    </div>
  );
}

export default Counterdiv;
