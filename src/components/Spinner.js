import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "loading"
}; //jodi kono message pass na kori tahole default hishebe ei message ta dekhabe

export default Spinner;
