import { gql } from "@apollo/client";

export const GET_ALL_DOCTORS = gql`
  query GetAllDoctors {
    getAllDoctors {
      id
      firstName
      lastName
    }
  }
`;

export const GET_DOCTOR_BY_ID = gql`
  query getDoctorById($doctorsId: Int!) {
    getDoctorById(doctorsId: $doctorsId) {
      id
      firstName
      lastName
      gender
      email
      hospital
    }
  }
`;
