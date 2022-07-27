import { useState } from "react";
import * as s from './styled-ListTripsPage'
import Card from '../../components/CardList/Card';
import Header from '../../components/HeaderListTripsPage/Header';
import { useGetTrips } from "./../../hooks/useRequestData";

export default function ListTripsPage() {

  const [searchName, setSearchName] = useState("");
  const [minimunDuration, setMinimunDuration] = useState("");
  const [maximunDuration, setMaximunDuration] = useState("");
  const [ordenation, setOrdenation] = useState("título");

  const trips = useGetTrips('/trips',[])

  const onMinimunDuration = (event) => {
    setMinimunDuration(event.target.value);
  }

  const onMaximunDuration = (event) => {
    setMaximunDuration(event.target.value);
  }

  const onSearchName = (event) => {
    setSearchName(event.target.value);
  }

  const updateOrdenation = (event) => {
    setOrdenation(event.target.value)
  }

  const listaTrips = trips
    .filter( trip => {
      return minimunDuration === "" || Number(trip.durationInDays) >= minimunDuration
    })
    .filter( trip => {
      return maximunDuration === "" || Number(trip.durationInDays) <= minimunDuration
    })
    .filter( trip => {
      return trip.planet.toLowerCase().includes(searchName.toLowerCase())
    })
    .sort( (currentTrip, nextTrip) => {
      if (ordenation === "planet") {
        return (1) * currentTrip.planet.localeCompare(nextTrip.planet)
      } else if (ordenation === "date") {
        return (1) * (new Date(currentTrip.dueDate).getTime() - new Date(nextTrip.dueDate).getTime())
      } else if (ordenation === "duration-cre") {
        return (1) * (currentTrip.durationInDays - nextTrip.durationInDays)
      } else {
        return (-1) * (currentTrip.durationInDays - nextTrip.durationInDays)
      }
    })
    .map( trip => {
      return (
        <Card key={trip.id}
        name={trip.name}
        description={trip.description}
        planet={trip.planet}
        durationInDays={trip.durationInDays}
        date={trip.date}
        />
      )
    })

  return (
    <s.Geral>

      <Header
        onSearchName={onSearchName}
        searchName={searchName}
        updateOrdenation={updateOrdenation}
        onMinimunDuration={onMinimunDuration}
        onMaximunDuration={onMaximunDuration}
        minimunDuration={minimunDuration}
        maximunDuration={maximunDuration}
      />

      <s.Title>
        <s.Text>
          Lista de viagens disponíveis
        </s.Text>
      </s.Title>

      <s.List>
        {listaTrips}
      </s.List>

    </s.Geral>
  );
};