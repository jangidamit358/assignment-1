import React from "react";
import "../style.css";

export const Pagination = ({page,setPage}) => {
  return (
    <div className="pagination">
    <div
      className="paginationButtonPrevious"
      style={{ color: page == 1 ? "white" : "" }}
      onClick={() => {
        if (page > 1) setPage(page - 1);
        console.log(page);
      }}
    >
      PREVIOUS
    </div>
    <div
      className="pageNumber"
      style={{
        color: page == 1 ? "white" : "",
        backgroundColor: page == 1 ? "black" : ""
      }}
      onClick={() => {
        setPage(1);
        console.log(page);
      }}
    >
      1
    </div>
    <div
      className="pageNumber"
      style={{
        color: page == 2 ? "white" : "",
        backgroundColor: page == 2 ? "black" : ""
      }}
      onClick={() => {
        setPage(2);
        console.log(page);
      }}
    >
      2
    </div>
    <div
      className="pageNumber"
      style={{
        color: page == 3 ? "white" : "",
        backgroundColor: page == 3 ? "black" : ""
      }}
      onClick={() => {
        setPage(3);
        console.log(page);
      }}
    >
      3
    </div>
    <div
      className="pageNumber"
      style={{
        color: page == 4 ? "white" : "",
        backgroundColor: page == 4 ? "black" : ""
      }}
      onClick={() => {
        setPage(4);
        console.log(page);
      }}
    >
      4
    </div>
    <div
      className="pageNumber"
      style={{
        color: page == 5 ? "white" : "",
        backgroundColor: page == 5 ? "black" : ""
      }}
      onClick={() => {
        setPage(5);
        console.log(page);
      }}
    >
      5
    </div>
    <div
      className="pageNumber"
      style={{
        color: page == 6 ? "white" : "",
        backgroundColor: page == 6 ? "black" : ""
      }}
      onClick={() => {
        setPage(6);
        console.log(page);
      }}
    >
      6
    </div>
    <div
      className="pageNumber"
      style={{
        color: page == 7 ? "white" : "",
        backgroundColor: page == 7 ? "black" : ""
      }}
      onClick={() => {
        setPage(7);
        console.log(page);
      }}
    >
      7
    </div>

    <div
      className="paginationButtonNext"
      onClick={() => {
        setPage(page + 1);
        console.log(page);
      }}
    >
      NEXT
    </div>
  </div>
  );
};
