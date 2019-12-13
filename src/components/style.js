import styled from "styled-components";

export const HeaderStyled = styled.div`
  padding: 20px 0;

  background: ${props => (props.dark ? "#2b3743" : "white")};
  h1 {
    font-size: 22px;
    color: ${props => (props.dark ? "white" : "black")};
    margin: 0;
  }
  box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
  .col-md-6 {
    display: flex;
    align-items: center;
    &:last-child {
      justify-content: flex-end;
    }
  }
  p {
    margin: 0;
    text-align: right;
  }
  .darkmode {
    cursor: pointer;
  }
`;

export const LoaderStyled = styled.div`
  #loader {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
    float: none;
    margin-bottom: 20px;
  }
  .loader-title {
    color: ${props => (props.dark ? "white" : "black")};
  }
  .load {
    text-align: center;
    padding-top: 16%;
    font-size: 18px;
    color: black;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const CountryListStyled = styled.div`
  font-size: 14px;
  padding-top: 30px;
  min-height: 100vh;
  .wrapper-country {
    img {
      border-radius: 4px 4px 0 0;
    }
    .country-data {
      padding: 20px;
      p {
        margin: 0;
      }
    }
    padding: 0;
    border-radius: 4px;
    background: ${props => (props.dark ? "#2b3743" : "white")};
    box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
  }
  a {
    color: ${props => (props.dark ? "white" : "black")};
  }
  svg,
  img {
    width: 100%;
    height: 165px;
  }
  @media screen and (max-width: 375px) {
    svg,
    img {
      width: 100%;
      height: 265px;
    }
  }
`;
