import React from "react";
import Progressbar from "../progressbar/Progressbar";
import mypic from "../../others/images/mypic.jpg";
import "./Bigphoto.scss";
export const Bigphoto = () => {
  var divImage = {
    backgroundImage: "url(" + mypic + ")",
  };
  return (
    <div className="bigphoto_wrapper">
      <div className="bigphoto" style={divImage}>
        <div className="skills">
          <Progressbar magnitude={"3010%"} title={"Python"} />
          <Progressbar magnitude={"860%"} title={"JavaScript"} />
          <Progressbar magnitude={"500%"} title={"c++"} />
          <Progressbar magnitude={"500%"} title={"React"} />
          <Progressbar magnitude={"300%"} title={"Bootstrap"} />
          <Progressbar magnitude={"300%"} title={"node.js"} />
          <Progressbar magnitude={"1900%"} title={"DS & Algo"} />
          <Progressbar magnitude={"200%"} title={"Django"} />
        </div>
      </div>
    </div>
  );
};
