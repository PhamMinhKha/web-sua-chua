import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import Nav from "../components/nav";
import db from "./../API/connectAPI";
const Home = () => {
  const [barcode, setbarcode] = useState("");
  function handleInputText(text) {
    setbarcode(text.target.value);
    if (text.target.value.length === 10) {
      db.collection("device")
        .doc(text.target.value)
        .get()
        .then(value => {
          console.log(value.exists);
          if (value.exists) {
            Router.push("/device/" + value.id);
          } else {
            alert("Rất tiết nhưng không tìm thấy thiết bị này");
          }
        });
    }
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="hero">
        <input
          placeholder="Nhập mã thiết bị"
          value={barcode}
          onChange={text => {
            handleInputText(text);
          }}
        />
      </div>
    </div>
  );
};

export default Home;
