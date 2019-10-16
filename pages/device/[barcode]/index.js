import React from "react";
import { useRouter } from "next/router";
import db from "../../../API/connectAPI";
export default function index() {
  const router = useRouter();
  const barcode = router.query.barcode;
  db.collection("device")
    .where("email", "==", 'admin@shopbentre.com')
    .get()
    .then(querySnapshot =>{
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
    });

  return <div>da vao {barcode}</div>;
}
