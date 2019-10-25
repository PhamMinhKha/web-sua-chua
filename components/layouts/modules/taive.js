import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
export default function taive() {
  return (
    <div>
      <Divider />

      <Grid
        container
        spacing={10}
        item
        style={{
          background:
            "linear-gradient(90deg, rgba(53,217,68,1) 0%, rgba(0,212,255,1) 100%)"
        }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <Card
            elevation={2}
            style={{
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: 32,
              marginTop: "20%"
            }}
          >
            <Typography variant="h3" id='taive'>Tải về</Typography>
            <Typography variant="subtitle1">
              Ứng dụng có tên là SuaChuPro ứng dụng đang trong quá trình phát
              triển và cần nhiều sự gớp ý từ khách hàng. Quý khách hàng có thể
              phản hồi hoặc gốp ý thông qua email:{" "}
              <Typography color="secondary">
                phamminhkha.tc@gmail.com
              </Typography>{" "}
              chúng tôi rất biết ơn nếu bạn có bất cứ đống gốp nào.
            </Typography>
            <Typography variant="caption">
              Mẫu máy in mã vạch mà phần mềm hổ trợ là loại máy in có chức năng
              Bluetooth
            </Typography>
            <Typography variant="caption">
              Loại giấy in mã vạch hổ trợ 50x20
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div>
            <img
              src="/img/media/handphone.png"
              style={{
                width: 600
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
