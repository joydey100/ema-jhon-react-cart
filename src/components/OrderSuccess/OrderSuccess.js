import React from "react";
import success from "../../images/ordersuccess.gif";

const OrderSuccess = () => {
  return (
    <div className="col-md-8 mx-auto">
      <img
        src={success}
        alt="success"
        style={{ width: "80%" }}
        className="d-block mx-auto"
      />
      <h2 className="text-secondary text-center">Order Success</h2>
    </div>
  );
};

export default OrderSuccess;
