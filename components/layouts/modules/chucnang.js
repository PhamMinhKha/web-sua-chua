import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import css from "./../../../public/css/style.css";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  mauchuchin: {
    color: "#35D944",
    textAlign:'center'
  },
  wrapperChucNang: {
    padding: 12
  }
}));
export default function chucnang() {
  const classes = useStyles();
  return (
    <Grid container spacing={10} style={{marginTop:'-20%'}} alignContent='center' alignItems='center'>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.mauchuchin} id='chucnang'>
          Chức năng
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} md={3}>
        <Paper className={classes.wrapperChucNang}>
          <div style={{textAlign:'center'}}>
            <Icon color="primary" fontSize='large'>speed</Icon>
          </div>
          <Typography align='center'>
            Giúp bạn quản lý thiết bị tốt hơn nhanh chống dễ dàng khi sử dụng
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3} md={3}>
        <Paper className={classes.wrapperChucNang}>
          <div style={{textAlign:'center'}}>
            <Icon color="primary" fontSize='large'>cropfreeoutlined</Icon>
          </div>
          <Typography align='center'>
            Quản lý thiết bị bằng mã vạch, kiểm tra nhanh chống và bạn sẽ không quên những gì đã sửa 
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3} md={3}>
        <Paper className={classes.wrapperChucNang}>
          <div style={{textAlign:'center'}}>
            <Icon color="primary" fontSize='large'>panoramaoutlined</Icon>
          </div>
          <Typography align='center'>
            Chụp ảnh thiết bị và chụp ảnh khi sửa giúp bạn sửa tiếp dễ dàng
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3} md={3}>
        <Paper className={classes.wrapperChucNang}>
          <div style={{textAlign:'center'}}>
            <Icon color="primary" fontSize='large'>printoutlined</Icon>
          </div>
          <Typography align='center'>
            Hổ trợ in mã và hóa đơn thông qua bluetooth không dây đầy tiện lợi
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
