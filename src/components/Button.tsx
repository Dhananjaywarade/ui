import  { ReactNode } from 'react';
import * as React from 'react';

type PropsType={
    children:ReactNode;
    onclick?:()=>void;
};

const Button = ({children,onclick}:PropsType) => {
  return (
    <button
    onClick={onclick}
    style={{
        padding:"10px 20px",
        fontSize:"1.2em",
        borderRadius:"5px",
        cursor:"pointer",
        color:"white",
        backgroundColor:"blue",
        border:"none",
    }}
    >{children}</button>
  );
}

export {Button};