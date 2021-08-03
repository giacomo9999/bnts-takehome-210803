import { parseRichText, parseImage } from "../helpers";

const Container = (props) => {
  const assignComponentByType = (itemIn, index) => {
    switch (itemIn.type) {
      case "rich-text":
        return parseRichText(itemIn, index);
      case "image":
        return parseImage(itemIn, index);
      case "container":
        return parseContainerContents(itemIn, index);
      default:
        return;
    }
  };

  const parseContainerContents = (dataIn) => {
    return (
      <div
        className={"container " + dataIn.className}
        key={Math.floor(Math.random() * 10000)}
        style={{
          flexDirection: dataIn.flexDirection,
          flexWrap: dataIn.flexWrap,
          justifyContent: dataIn.justifyContent,
          alignItems: dataIn.alignItems,
          width: `${dataIn.width * 100}%`,
        }}
      >
        {dataIn.items.map((item, index) => assignComponentByType(item, index))}
      </div>
    );
  };

  return parseContainerContents(props.containerContentsData);
};

export default Container;
