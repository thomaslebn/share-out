import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/button";

import { useForm } from "../../shared/hooks/form-hook";

import "./place-form.css";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Eiffel Tower",
    description: "The most beautiful tower in the world ! 😍",
    imageUrl:
      "https://www.sortiraparis.com/images/80/1467/535466-la-tour-eiffel-fete-la-saint-valentin.jpg",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
    location: {
      lat: 48.858093,
      lng: 2.294694,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Tokyo Skytree",
    description: "The second tallest structure in the world 🇯🇵",
    imageUrl: "https://scitechdaily.com/images/Tokyo-Skytree-Night.jpg",
    address: "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634, Japan",
    location: {
      lat: 35.710064,
      lng: 139.810699,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world !",
    imageUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.748817,
      lng: -73.985428,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
