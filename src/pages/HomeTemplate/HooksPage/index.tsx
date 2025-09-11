import { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";
import Products from "./products";
import CustomHook from "./custom-hooks";

export default function HooksPage() {
  const [number, setNumber] = useState<number>(0);
  const [like, setLike] = useState<number>(0);

  const listProduct = [
    { name: "Iphone 14 Pro Max", price: 3000 },
    { name: "Samsung Galaxy Z Fold 4", price: 2500 },
  ];

  const listProductMemo = useMemo(() => listProduct, []);

  // const [state,setState] = useState({
  //   number:0,
  //   like:0
  // });

  useEffect(() => {
    console.log("useEffect - tương đương componentDidMount bên class");
  }, []);

  useEffect(() => {
    console.log("useEffect - tương đương componentDidUpdate bên class");
  }, [number]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Hello Cybersoft");
    }, 1000);

    return () => {
      console.log("useEffect - tương đương componentWillUnMount bên class");
      clearInterval(interval);
    }
  }, []);

  const renderLikeNumber = () => {
    return `Số like: ${like}`;
  };

  const renderLikeNumberCallback = useCallback(renderLikeNumber, [like]);

  return (
    <div>
      <h3>HooksPage</h3>
      <h4>Number: {number} </h4>
      <button className="btn btn-success" onClick={() => {
        setNumber(number + 1);
      }}>Increment Number</button>

      <h4>Like: {like}</h4>
      <button className="btn btn-danger" onClick={() => {
        setLike(like + 1);
      }}>Increment Like</button>

      <hr />

      <Child renderLike={renderLikeNumberCallback} />

      <hr />

      <Products listProduct={listProductMemo} />

      <hr />

      <CustomHook />

    </div>
  )
}
