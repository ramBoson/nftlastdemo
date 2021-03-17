import React from "react";
import history from "./utils/history";

function First() {
  return (
    <>
      <div class="display-4 mb-1">This is the Dem Route</div>
      <button
        class="btn btn-info btn-block"
        type="button"
        onClick={() => {
          history.push("/nft");
        }}
      >
        Nft
      </button>
      <button
        class="btn btn-info btn-block"
        type="button"
        onClick={() => {
          history.push("/second");
        }}
      >
        Second
      </button>
    </>
  );
}

export default First;
