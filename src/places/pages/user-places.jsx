import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/place-list/place-list";

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

const UserPlaces = () => {
  const userId = useParams().userId;
  const filteredPlaces = DUMMY_PLACES.filter(
    (place) => place.creator === userId
  );
  return <PlaceList items={filteredPlaces} />;
};

export default UserPlaces;
