import React from "react";

const Quote = () => {
  const { quote } = useParams;

  return <p className={`${quote}`}>{quote}</p>;
};

export default Quote;
