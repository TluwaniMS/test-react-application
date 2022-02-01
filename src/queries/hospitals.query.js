import { gql } from "@apollo/client";

export const GET_ALL_HOSPITALS = gql`
  query GetAllHospitals {
    getAllHospitals {
      _id
      hospitalName
    }
  }
`;

export const GET_HOSPITAL_BY_KEY = gql`
  query GetHospitalByHospitalId($_id: String!) {
    getHospitalByHospitalById(_id: $_id) {
      _id
      hospitalName
      municipality
    }
  }
`;
