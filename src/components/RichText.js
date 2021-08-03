import parse from "html-react-parser";

const RichText = (props) => {
  return (
    <div className={props.className}>
      {parse(props.text)}
    </div>
  );
};

export default RichText;
