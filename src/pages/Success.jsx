import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from "react-router-dom";

export const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user?.currentUser.others);
  const [setOrderId] = useState(null);
  console.log(data.billing_details.address);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/order/create", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser, setOrderId]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h2>Order Receipt</h2>
        <p>Id: {currentUser._id}</p>
        <p>Amount: {cart.total}</p>
        <p>{`Address: ${data.billing_details.address.line1} ${data.billing_details.address.city}`}</p>
        <p>Status: SUCCESS</p>
      </div>

      <Link to="/">
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>
  );
};
