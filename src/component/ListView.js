import React from "react";
import "../css/ListView.css";

function ListView(props) {
  console.log(props);
  return (
    <div className="j">
      <div className="column1">
        {props._rxList.articles !== undefined ? (
          props._rxList.articles.map((_list, index) => {
            return (
              <div className="row1" key={index}>
                <div className="img_box">
                  <img src={_list.urlToImage}></img>
                </div>

                <div className="list_img">
                  <p className="_Right">
                    <b>{_list.author}</b>
                    <span className="_left">
                      {new Date(_list.publishedAt).toLocaleDateString("en-GB", {
                        timeZone: "UTC"
                      })}
                    </span>
                  </p>
                  <div className="txt">{_list.description}</div>
                  <div className="txt">
                    <i>{_list.content}</i>
                  </div>
                </div>
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
export default ListView;
