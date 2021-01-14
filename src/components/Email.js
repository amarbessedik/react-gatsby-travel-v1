import React from "react"
import styled from "styled-components"
import EmailBg from "../images/EmailBg.jpg"
import { Button } from "./Button"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Exlusive Offers</h1>
        <p>
          Sign Up for our newsletter bellow to get $100 off of your first trip!
        </p>
        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input name="email" type="email" placeholder="Email" id="email" />
            </label>
            <Button
              as="button"
              type="submit"
              round="true"
              primary="true"
              css={`
                height: 48px;
                @media screen and (max-width: 768px) {
                  width: 100%;
                  min-widh: 350px;
                }
                @media screen and (max-width: 500px) {
                  width: 100%;
                  min-widh: 250px;
                } ;
              `}
            >
              Sign Up
            </Button>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
    font-weight: 200;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
    font-weight: 200;
  }

  form {
    z-index: 10;
  }
`
const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 40vw;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 50vw;
      margin-right: 0;
    }
  }
`
