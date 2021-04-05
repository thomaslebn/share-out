import React from "react";

import Input from "../../shared/components/FormElements/input";

import "./new-place.css";

const NewPlace = () => (
  <form className="place-form">
    <Input element="input" type="text" label="Title" />
  </form>
);

export default NewPlace;
