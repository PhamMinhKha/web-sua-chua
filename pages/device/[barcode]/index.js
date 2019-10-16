import React, {useState} from "react";
import { useRouter } from "next/router";
import db from "../../../API/connectAPI";
export default function index() {
  const router = useRouter();
  const barcode = router.query.barcode;
  const [device, setdevice] = useState();
  if(barcode)
  db.collection("device")
    .doc(barcode)
    .get()
    .then(value => {
      if (value.exists) {
        console.log(value.data());
      } else {
        alert("Rất tiết nhưng không tìm thấy thiết bị này");
      }
    });

  return <div>da vao {barcode}</div>;
}
