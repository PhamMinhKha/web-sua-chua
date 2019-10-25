import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
export default function menu() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography> */}
          {/* <Button color="secondary">Trang chủ</Button> */}
          <Button color="secondary"><a href='#chucnang' style={{color:'white', textDecoration:'none'}}>Chức năng</a></Button>
          <Button color="secondary"><a href='#taive' style={{color:'white', textDecoration:'none'}}>Tải về</a></Button>
          <Button color="secondary"><a href='#lienhe' style={{color:'white', textDecoration:'none'}}>Liên hệ</a></Button>
       
        </Toolbar>
      </AppBar>
    </div>
  );
}
