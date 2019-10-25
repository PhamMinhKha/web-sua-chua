import React, { useContext, useState, useEffect } from "react";

export default function Searchdevice(t) {
  // const test = useContext();
  const [barcode, setbarcode] = useState(t.barcodeFromRouter);
  function handleInputText(text) {
    setbarcode(text.target.value);
    if (text.target.value.length === 10) {
      t.barcode(text.target.value);
    }
  }

  return (
    <div>
      {/* <Bar.Consumer>
            {(context) => console.log(context)}
            </Bar.Consumer> */}
      <input
        placeholder="Vui lòng nhập mã thiết bị vào"
        style={{
          width: "50%",
          height: 30,
          fontSize: 25,
          fontWeight: 600,
          borderRadius: 8,
          marginBottom: 30
        }}
        value={barcode}
        onChange={text => {
          handleInputText(text);
        }}
      />
    </div>
  );
}
