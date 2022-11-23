import React from "react";

export default function Alert(props) {
  return (
    <div className="mb-3" style={{height:"50px"}}>
    {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
      <strong>{props.alert.type} : {props.alert.msg} </strong>
    </div>}
    </div>
  );
}
