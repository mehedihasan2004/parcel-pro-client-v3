import React, { useEffect, useState } from "react";
import TableForPendingOrders from "../../components/TableForPendingOrders";

const PendingOrders = () => {
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    fetch("https://parcel-pro-server.vercel.app/parcel_info")
      .then((res) => res.json())
      .then((data) => setPendingOrders(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(pendingOrders);

  return (
    <div>
      <TableForPendingOrders />
    </div>
  );
};

export default PendingOrders;
