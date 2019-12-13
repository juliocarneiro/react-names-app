import styled from "styled-components";

export const MainStyled = styled.div`
  background: ${props => (props.dark ? "#202D36" : "#fafafa")};
  color: ${props => (props.dark ? "white" : "black")};
`;

export const CountryStyled = styled.div`
  font-size: 16px;
  color: ${props => (props.dark ? "white" : "black")};
  background: ${props => (props.dark ? "#202D36" : "#fafafa")};
  height: 100vh;
  svg,
  img {
    width: 100%;
    height: auto;
  }
  .container .row .btn,
  .container .row .btn:active {
    background: ${props => (props.dark ? "#2b3743" : "white")};
    border: 0;
    color: ${props => (props.dark ? "white" : "black")};
    box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
    padding: 5px 20px;
    font-size: 14px;
  }
  .container .row .btn:hover {
    box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 1);
    -webkit-box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 1);
    -moz-box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 1);
    transition: all 0.3s ease;
  }
  .border-countries {
    p:first-child {
      margin: 0;
      font-size: 16px;
    }
    p:not(:first-child) {
      background: ${props => (props.dark ? "#2b3743" : "white")};
      box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: -1px 5px 13px -10px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      padding: 3px 15px;
      margin: 0 5px;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 375px) {
    h3 {
      margin-top: 30px;
    }
    .border-countries {
      display: block !important;
    }
  }
`;
