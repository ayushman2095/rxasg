import React from "react";
import "../css/search.css";

function Search(props) {
  let upData = new Array();
  const Search = event => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        props.onSearch(props._rxList.articles);
        return;
      }
      props._rxList.articles.map(e => {
        if (e.author != null)
          if (e.author.search(event.target.value) !== -1) {
            upData = [...upData, e];
          }
        if (e.title != null)
          if (e.title.search(event.target.value) !== -1) {
            upData = [...upData, e];
          }
        if (e.description != null)
          if (e.description.search(event.target.value) !== -1) {
            upData = [...upData, e];
          }
        if (e.content != null)
          if (e.content.search(event.target.value) !== -1) {
            upData = [...upData, e];
          }
      });
      props.onSearch(upData);
    }
  };

  return (
    <>
      <div className="searchbox">
        <span className="srcBtn">
          <i className="fa fa-search fa-2x"></i>
        </span>
        <input type="search" className="t" id="e" onKeyPress={Search}></input>
      </div>
    </>
  );
}

export default Search;
