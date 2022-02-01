import { gql } from "@apollo/client";

export const GET_ALL_MUNICIPALITIES = gql`
  query GetAllMunicipalities {
    getAllMunicipalities {
      _id
      municipalityName
    }
  }
`;

export const GET_MUNICIPALITY_BY_KEY = gql`
  query getMunicipalityById($_id: String!) {
    getMunicipalityByMunicipalityId(_id: $_id) {
      _id
      municipalityName
    }
  }
`;
