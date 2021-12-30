import { gql } from "@apollo/client";

export const GET_ALL_MUNICIPALITIES = gql`
  query getAllMunicipalities {
    municipalityName
    municipalityKey
  }
`;

export const GET_MUNICIPALITY_BY_KEY = gql`
  query getMunicipalityByKey($municipalityKey: String!) {
    getMunicipalityByMunicipalityKey(municipalityKey: $municipalityKey) {
      municipalityName
      municipalityKey
    }
  }
`;
