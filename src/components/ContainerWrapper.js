import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../actions";
import { parseRichText } from "../helpers";

import Container from "./Container";

const ContainerWrapper = (props) => {
  const {
    params: { route },
  } = props.match;

  const wrapperData = useSelector((state) => state[route]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(props.baseUrl + `/${route}.json`, route));
  }, []);

  return (
    <div className="body">
      {wrapperData ? parseRichText(wrapperData[0]) : null}
      {wrapperData ? (
        <Container key={Math.floor(Math.random() * 10000)} containerContentsData={wrapperData[1]} />
      ) : null}
    </div>
  );
};

export default ContainerWrapper;
