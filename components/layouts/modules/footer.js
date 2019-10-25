import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { Button } from "@material-ui/core";
export default function footer() {
  return (
    <div style={{ marginTop: "5%", textAlign: "center" }}>
      <Typography variant="h3" id='lienhe'>Liên hệ</Typography>
      <Grid container item style={{ padding: 36 }}>
        <Grid xs={12} sm={6} md={6} item>
            <Typography variant='h3'>
                    Hãy cho chúng tôi biết suy nghỉ của bạn
            </Typography>
            <div style={{width:200, height:'1rem', backgroundColor:'#35D944'}}>

            </div>
            <Typography variant='subtitle2' style={{marginTop:'5%', textAlign:'left'}}>
                    Hãy cho chúng tôi biết suy nghỉ của bạn
            </Typography>
            <Typography variant='subtitle2' style={{marginTop:'5%', textAlign:'left'}}>
                    Các bạn có thể liên hệ trực tiếp với thông thông qua địa chỉ và số điện thoại
                    <Typography color='secondary'noWrap style={{marginTop:'5%'}}>
                        Email:<Typography display='inline' color='textPrimary' style={{fontWeight:600}}> phamminhkha.tc@gmail.com</Typography>
                    </Typography>
                    <Typography color='secondary'noWrap >
                        Điện thoại:<Typography display='inline' color='textPrimary' style={{fontWeight:600}}> 034.9501.403</Typography>
                    </Typography>
            </Typography>
        </Grid>
        <Grid xs={12} sm={6} md={6} item>
          <Grid xs={12} item>
            <TextField
              id="email"
              label="Email"
              defaultValue=""
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              id="sdt"
              label="Số điện thoại"
              defaultValue=""
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              id="noidung"
              label="Nội dung"
              defaultValue=""
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Button variant='contained' color='secondary' style={{alignItems:'left', alignContent:'left', alignSelf:'left'}}>Gửi</Button>
        </Grid>
      </Grid>
    </div>
  );
}
