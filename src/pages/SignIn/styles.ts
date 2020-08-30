import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImage from '../../assets/sign_in_background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 8px;
      }

      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }
    }

    button {
      margin-top: 16px;
      height: 56px;
      padding: 0 16px;
      width: 100%;

      background: #ff9000;
      border-radius: 10px;
      border: 0;
      color: #312e38;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      margin-top: 24px;

      text-decoration: none;
      color: #f4ede8;
      display: block;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 24px;

    text-decoration: none;
    color: #ff9000;
    display: block;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${signInBackgroundImage}) no-repeat center;
  background-size: cover;
`;
