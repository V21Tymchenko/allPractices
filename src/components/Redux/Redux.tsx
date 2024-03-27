import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTask } from "../../redux/fetchApi";

const ReduxComp: FC = () => {
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTask());
//   }, []);
  return <div></div>;
};

export default ReduxComp;
