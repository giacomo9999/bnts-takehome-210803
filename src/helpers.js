import Image from "./components/Image";
import RichText from "./components/RichText";
import Container from "./components/Container";

export const parseContainer = (dataIn, index) => {
  return (
    <Container
      key={Math.floor(Math.random() * 10000)}
      type={dataIn.type}
      items={dataIn.items}
      className={dataIn.className}
      flexDirection={dataIn.flexDirection}
      flexWrap={dataIn.flexWrap}
      justifyContent={dataIn.justifyContent}
      alignItems={dataIn.alignItems}
      width={dataIn.width}
    />
  );
};

export const parseRichText = (dataIn, index) => {
  return (
    <RichText
      key={Math.floor(Math.random() * 10000)}
      type={dataIn.type}
      textType={dataIn.textType}
      style={dataIn.style}
      className={dataIn.className}
      text={dataIn.text}
    />
  );
};

export const parseImage = (dataIn) => {
  return (
    <Image
      key={Math.floor(Math.random() * 10000)}
      type={dataIn.type}
      className={dataIn.className}
      alt={dataIn.alt}
      src={dataIn.src}
    />
  );
};
