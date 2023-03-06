import React, { useEffect, useState } from "react";
import TableForPendingOrders from "../../components/TableForPendingOrders";

const PendingOrders = () => {
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/pending_orders")
      .then((res) => res.json())
      .then((data) => setPendingOrders(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(pendingOrders);

  return (
    <div>
      <TableForPendingOrders pendingOrders={pendingOrders} />
    </div>
  );
};

export default PendingOrders;
