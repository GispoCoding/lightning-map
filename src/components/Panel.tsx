const Panel = ({ text }: { text: string }) => {
  return (
    <div className="panel" style={{ zIndex: 10, position: "absolute" }}>
      {text}
    </div>
  );
};

export default Panel;
