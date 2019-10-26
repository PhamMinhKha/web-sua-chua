import React from "react";
import Head from 'next/head';
import css from './../../../public/css/style.css'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => css);
export default function Header() {
  const classes = useStyles();
  return (
    <Head>
      <title>Ứng dụng quản lý sửa chữa | SuaChuaPro</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
  );
}
