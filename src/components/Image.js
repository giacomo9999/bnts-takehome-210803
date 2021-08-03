const Image = (props) => {
  return (
    <img
      
      className={props.className}
      height={props.height}
      src={props.src}
      alt={props.alt}
    />
  );
};

export default Image;
