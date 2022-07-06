import React from 'react';
import {TelaInteira, Main} from "./styled_matches"
import Header from "../../components/Header_matches/Header_matches"

export default function Matches(props) {
  return (
    <TelaInteira>

      <Header
        changeScreen={props.changeScreen}
      />

      <Main>
        {props.listMatches.map( match => {
          return <div>{match.name}</div>
        })}
      </Main>

    </TelaInteira>
  );
};