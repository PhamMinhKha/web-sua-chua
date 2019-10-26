import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import Head from 'next/head';
import "react-image-lightbox/style.css";
export default function timeline(child) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [IMAGES, setIMAGES] = useState([]);
  function hinh(hinh) {
    if (hinh.length > 0) {
      let tmp = [];
      let tmp2 = [];
      for (let n of hinh) {
        let link =
          "https://firebasestorage.googleapis.com/v0/b/suachuabaohanh-b99ee.appspot.com/o/thumb%2F" +
          n.id +
          "?alt=media";
        let link2 =
          "https://firebasestorage.googleapis.com/v0/b/suachuabaohanh-b99ee.appspot.com/o/" +
          n.id +
          "?alt=media";
        tmp2.push(link2);
        tmp.push(
          <img
            onClick={() => {setIsOpen(true); handleOnlickImage(tmp2);}}
            src={link}
            key={n.id}
            style={{
              borderWidth: 2,
              borderColor: "white",
              marginLeft: 5,
              marginRight: 5
            }}
          />
        );
      }
      // handleOnlickImage(tmp2);
      return tmp;
    }
  }
  function timeline() {
    console.log("vao function", console.log(child));
    let html = [];
    if (child.timeline)
      for (let n of child.timeline) {
        let backgroundColor = "rgba(255, 255, 255, 0.2)";
        switch (n.status) {
          case 0:
            backgroundColor = "rgba(230, 55, 125, 0.2)";
            break;
          case 1:
            backgroundColor = "rgba(235, 235, 52, 0.2)";
            break;
          case 2:
            backgroundColor = "rgba(52, 135, 235, 0.2)";
            break;
          case 3:
            backgroundColor = "rgba(0, 255, 0, 0.2)";
            break;
        }
        let tam = null;
        if (n.status === 0)
          tam = (
            <li style={{ backgroundColor, display: "table" }} key={n.time}>
              <span></span>
              <div>
                <div className="title">{n.check}</div>
                <div className="info">Phụ kiện: {n.phukienkemtheo}</div>
                <div className="type">Trạng thái: {n.tinhtrangthietbi}</div>
                <div style={{ float: "left" }}>{hinh(n.hinh)}</div>
              </div>{" "}
              <span className="number">
                <span>{n.time}</span> <span></span>
              </span>
            </li>
          );
        else if (n.status === 3)
          // sửa thành công
          tam = (
            <li style={{ backgroundColor, display: "table"  }} key={n.time}>
              <span></span>
              <div>
                <div className="title">Thực hiện: {n.check}</div>
                <div className="info">Kết quả: {n.result}</div>
                <div className="type">
                  Bảo hành:{" "}
                  {n.baohanh > 0 ? n.baohanh + "ngày" : "Không bảo hành"}{" "}
                </div>
                <div style={{ float: "left" }}>{hinh(n.hinh)}</div>
              </div>{" "}
              <span className="number">
                <span>{n.time}</span> <span></span>
              </span>
            </li>
          );
        else
          tam = (
            <li style={{ backgroundColor, display: "table"  }} key={n.time}>
              <span></span>
              <div>
                <div className="title">Thực hiện: {n.check}</div>
                <div className="info">Kết quả: {n.result}</div>
                <div style={{ float: "left" }}>{hinh(n.hinh)}</div>
              </div>{" "}
              <span className="number">
                <span>{n.time}</span> <span></span>
              </span>
            </li>
          );
        html.push(tam);
      }
    return html;
  }
  function handleOnlickImage(hinh) {
    setIMAGES(hinh);
  }
  return (
    <div className="container">
      <ul>{timeline()}</ul>
      {isOpen && (
        <Lightbox
          mainSrc={IMAGES[photoIndex]}
          nextSrc={IMAGES[(photoIndex + 1) % IMAGES.length]}
          prevSrc={IMAGES[(photoIndex + IMAGES.length - 1) % IMAGES.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + IMAGES.length - 1) % IMAGES.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % IMAGES.length)
          }
        />
      )}
    </div>
  );
}
