import React from "react";
import "../css/gridView.css";

function GridView(props) {
  return (
    <div className="box">
      <div className="row">
        {props._rxList.articles !== undefined ? (
          props._rxList.articles.map((_list, index) => {
            return (
              <div className="column" key={index}>
                <img src={_list.urlToImage}></img>
                <p>
                  <b>{_list.author}</b>
                </p>
                <p>
                  {new Date(_list.publishedAt).toLocaleDateString("en-GB", {
                    timeZone: "UTC"
                  })}
                </p>
                <p className="cnt">
                  <i>{_list.content}</i>
                </p>
              </div>
            );
          })
        ) : (
          <h3>Loading data....</h3>
        )}
      </div>
    </div>
  );
}
export default GridView;
