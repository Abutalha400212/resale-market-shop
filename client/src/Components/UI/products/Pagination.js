import React from "react";

export default function Pagination({ setPage, meta, page }) {
  console.log("meta", meta);
  const keys = meta && meta.total && Math.ceil(meta.total / meta?.limit);
  console.log(keys);
  return (
    <div className="grid place-content-center">
      {/* <h1 className="text-xl font-semibold text-center mb-2">Pagination</h1> */}
      <ul className="join flex flex-wrap justify-center items-center">
        <li onClick={() => setPage(page - 1)} className="join-item btn">
          Previous page
        </li>
        {keys &&
          [...Array(keys).keys()].map((key) => (
            <li
              onClick={() => setPage(key + 1)}
              key={key}
              className="join-item btn"
            >
              {key + 1}
            </li>
          ))}
        <li onClick={() => setPage(page + 1)} className="join-item btn ">
          Next
        </li>
      </ul>
    </div>
  );
}
