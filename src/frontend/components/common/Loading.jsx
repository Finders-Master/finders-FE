import React from 'react';

function Loading() {
  return (
    <>
      <div className="loading-component">
        <h1 className="">Loading...</h1>
        <progress max="100" />
      </div>
    </>
  );
}

export default Loading;
