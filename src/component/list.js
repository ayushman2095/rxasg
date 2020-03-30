import React, { useState, useEffect } from "react";
import { getRx } from "../Api";
import "../css/list.css";
import ListView from "./ListView";
import GridView from "./gridView";
import Search from "./search";

function List() {
  const [data, setData] = useState({});
  const [rxList, setList] = useState({});
  const [View, setView] = useState({
    _ListView: true,
    _gridView: false
  });
  useEffect(() => {
    getRx().then(_list => {
      setList(_list);
      setData(_list);
    });
  }, []);

  function openList() {
    setView({
      _ListView: true,
      _gridView: false
    });
  }
  function SortAsc() {
    let newList = rxList.articles.sort((a, b) => {
      var dateA = new Date(a.publishedAt);
      var dateB = new Date(b.publishedAt);
      return dateA - dateB;
    });

    setList({ articles: newList });
  }
  function SortDec() {
    let newList = rxList.articles.sort((a, b) => {
      var dateA = new Date(a.publishedAt);
      var dateB = new Date(b.publishedAt);
      return dateB - dateA;
    });

    setList({ articles: newList });
  }
  function openGrid() {
    setView({
      _ListView: false,
      _gridView: true
    });
  }
  function srch(dataSet) {
    console.log("Hi", dataSet);
    setData({ articles: dataSet });
  }
  return (
    <>
      <Search onSearch={srch} _rxList={rxList}></Search>
      <div className="box">
        <div className="srtBtn">
          <i className="fas fa-list" onClick={openList}></i>
          <i className="fas fa-th" onClick={openGrid}></i>
          <i className="fas fa-sort-amount-down" onClick={SortAsc}></i>
          <i className="fas fa-sort-amount-up" onClick={SortDec}></i>
        </div>
        {View._gridView && <GridView _rxList={data}></GridView>}
        {View._ListView && <ListView _rxList={data}></ListView>}
      </div>
    </>
  );
}
export default List;
