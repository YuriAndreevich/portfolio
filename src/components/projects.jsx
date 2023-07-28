import React from "react";
import { data } from "./data";
import Card from "./card";

function projects() {
  console.log(data);
  return (
    <div>
      projects:
      <div className="display flex gap-5 justify-center">
        {data.map((product, idx) => (
          <Card key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}

export default projects;
