import React, { useState } from "react";

let colour = useState("white");

function Button() {
  return (
    <>
          <button className="p-4 ">{colour}</button>
    </>
  );
}

export default Button;
