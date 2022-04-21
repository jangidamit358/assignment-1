import React from "react";
import "../style.css";
import { Showproduct } from "./showproduct";
import { useState, useEffect } from "react";
import axios from "axios";
import { LoadingWrapper } from "./loading/LoadingWrapper";
import { Dot } from "./loading/Dot";
import { Pagination } from "./pagination";
export default function Temple() {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(4);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://meesho-clone-123.herokuapp.com/proudcts?page=${page}&size=15`
      )
      .then((data) => {
        setData(data.data.product);
        setLoading(false);
      });
  }, [page]);
  const setPage = (value) => {
    setpage(value);
  };
  return loading == true ? (
    <div>
      <LoadingWrapper>
        <h3>Loading</h3>
        <Dot delay="0s" />
        <Dot delay="0.1s" />
        <Dot delay="0.2s" />
      </LoadingWrapper>
    </div>
  ) : (
    <>
      <div className="mainBox">
        {data.map((item) => (
          <Showproduct key={item._id} data={item} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}
