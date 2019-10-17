import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import db from "../../../API/connectAPI";
import timelinelayout from "./../../../components/layouts/timeline";
export default function index() {
  const router = useRouter();
  // const barcode = router.query.barcode;
  const barcode = "5108595502";
  const [device, setdevice] = useState();
  useEffect(() => {
    getData()
  }, [])
  function getData()
  {
    if (barcode)
    db.collection("device")
      .doc(barcode)
      .get()
      .then(value => {
        if (value.exists) {
          console.log(value.data());
          setdevice(value.data())
        } else {
          alert("Rất tiết nhưng không tìm thấy thiết bị này");
        }
      })
  }

  function hienThiThietBi()
  {
    if(device)
    {
      return(
        <div>
          <p>{device.barcode}</p>
          <p>{device.diachi}</p>
          <p>{device.sodienthoai}</p>
          <p>{device.tenkhach}</p>
          <p>{device.tenthietbi}</p>
          <p>{device.time}</p>
          <p>{device.timespan}</p>
          <p>{device.typeofdevice}</p>
          {/* {timeline} */}
        </div>
      )
    }
  }
  return (
    <div>
      da vao {barcode}
      {hienThiThietBi()}
      {timelinelayout('123xx')}
    </div>
  );
}
