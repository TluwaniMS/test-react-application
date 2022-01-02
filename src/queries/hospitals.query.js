import { gql } from "@apollo/client";

export const GET_ALL_HOSPITALS = gql`
  query GetAllHospitals {
    getAllHospitals {
      hospitalName
      hospitalKey
    }
  }
`;

export const GET_HOSPITAL_BY_KEY = gql`
  query GetHospitalByHospitalKey($hospitalKey: String!) {
    getHospitalByHospitalKey(hospitalKey: $hospitalKey) {
      hospitalName
      hospitalKey
      municipality
    }
  }
`;
