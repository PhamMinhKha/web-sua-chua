import React from "react";
import { useRouter } from "next/router";
import db from "../../../API/connectAPI";
export default function index() {
  const router = useRouter();
  const barcode = router.query.barcode;
  db.collection("device")
    .where("barcode", ">=", 0)
    .get()
    .then(value => console.log(value));

  console.log(db);
  return <div>da vao {barcode}</div>;
}
