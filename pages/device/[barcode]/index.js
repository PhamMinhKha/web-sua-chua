import React, { useState, useEffect } from "react";
import { useRouter, Router } from "next/router";
import db from "../../../API/connectAPI";
import timelinelayout from "./../../../components/layouts/timeline";
import Searchdevice from "./../../../components/searchdevice";
// import Header from "./../../../components/layouts/modules/header";
import Header from "next/head";
export default function index() {
  const router = useRouter();
  // const barcode = ;
  // const barcode = "5108595502";
  const [device, setdevice] = useState();

  const [barcode, setbarcode] = useState(router.query.barcode);
  const [loading, setloading] = useState("none");
  useEffect(() => {
    barcode;
    getData(router.query.barcode);
  }, [barcode]);
  // while(!router.query.barcode){
  //   setbarcode(router.query.barcode)
  // }
  if (barcode === null) {
    // console.log('vao roi', router.query.barcode)
    setbarcode(router.query.barcode);
    getData(router.query.barcode);
  }
  // console.log(router.query)
  // setbarcode(router.query.barcode);
  function getData(barcode2) {
    let checkbarcode = "";
    if (barcode2) checkbarcode = barcode2;
    else checkbarcode = barcode;
    if (checkbarcode) {
      setloading("block");
      //  console.log(checkbarcode, 'xxx');
      db.collection("device")
        .doc(checkbarcode)
        .get()
        .then(value => {
          if (value.exists) {
            console.log(value.data());
            setdevice(value.data());
            setloading("none");
          } else {
            alert("Rất tiết nhưng không tìm thấy thiết bị này");
            setloading("none");
          }
        });
    }
  }

  function hienThiThietBi() {
    if (device) {
      return (
        <div
          style={{
            width: 400,
            backgroundColor: "rgba(0,255,0,0.5)",
            borderRadius: 15,
            padding: 15
          }}
        >
          <p className="text"> Barcode: {device.barcode}</p>
          <p className="text">{device.tenkhach}</p>
          <p className="text">SĐT: {device.sodienthoai}</p>
          <p className="text">Địa chỉ: {device.diachi}</p>
          <p className="text">Thiết bị: {device.tenthietbi}</p>
          <p className="text">Thời gian nhận: {device.time}</p>
          <p className="text">Loại thiết bị: {device.typeofdevice}</p>
          {/* {timeline} */}
          <style jsx>
            {`
              .text {
                font-weight: 600;
                font-size: 20px;
              }
            `}
          </style>
        </div>
      );
    }
  }
  function getBarcode(barcode) {
    setbarcode(barcode);
    console.log("test", barcode);
    if (barcode.length >= 10) {
      getData(barcode);
      clearInterval();
    }
  }
if(router.query.barcode && barcode !== router.query.barcode )
{
  setTimeout(() => getBarcode(router.query.barcode), 2000)
}
  console.log("test", router.query.barcode);

  return (
    <div>
      {/* <Header/> */}
      <Header>
        <title>Tìm thiết bị sửa chữa</title>
        <link rel="stylesheet" type="text/css" href="/css/timelinecss.css" />
      </Header>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundColor: "black",
          opacity: 0.5,
          display: loading
        }}
      >
        {" "}
        Loading
      </div>
      <Searchdevice
        barcode={getBarcode}
        barcodeFromRouter={router.query.barcode}
      />
      {hienThiThietBi()}
      {timelinelayout({ timeline: device ? device.timeline : null })}
    </div>
  );
}
