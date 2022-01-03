import { gql } from "@apollo/client";

const DELETE_HOSPITAL_BY_ID = gql`
  mutation DeleteHospitalById($hospitalKey: String!) {
    deleteHospitalById(hospitalKey: $hospitalKey)
  }
`;
