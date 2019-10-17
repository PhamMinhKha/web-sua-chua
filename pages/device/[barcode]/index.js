import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import db from "../../../API/connectAPI";
import timelinelayout from "./../../../components/layouts/timeline";
import Searchdevice from "./../../../components/searchdevice";
export default function index() {
  const router = useRouter();
  // const barcode = router.query.barcode;
  const barcode = "5108595502";
  const [device, setdevice] = useState();
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    if (barcode)
      db.collection("device")
        .doc(barcode)
        .get()
        .then(value => {
          if (value.exists) {
            console.log(value.data());
            setdevice(value.data());
          } else {
            alert("Rất tiết nhưng không tìm thấy thiết bị này");
          }
        });
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
  return (
    <div>
      <Searchdevice />
      {hienThiThietBi()}
      {timelinelayout({ timeline: device ? device.timeline : null })}
    </div>
  );
}
