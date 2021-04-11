import React from "react";
import styled from "styled-components";

const TokenizeForm = () => {
  return (
    <Form>
      <FormSection>
        <p>
          <label htmlFor="deed">Deed</label>
        </p>
        <input type="file" id="deed" />
        <p>
          <label htmlFor="street-address">Property Address</label>
        </p>
        <input id="street-address" name="street-address" row="4" columns="50" />
        <Row>
          <div>
            <p>
              <label htmlFor="city">City</label>
            </p>
            <input type="text" id="city" name="city" />
          </div>
          <div>
            <p>
              <label htmlFor="state">State or Province</label>
            </p>
            <input type="text" id="state" name="state" />
          </div>
        </Row>
        <Row>
          <div>
            <p>
              <label htmlFor="country">Country</label>
            </p>
            <input type="text" id="country" name="country" />
          </div>
          <div>
            <p>
              <label htmlFor="postal-code">Postal Code</label>
            </p>
            <input type="text" id="postal-code" name="postal-code" />
          </div>
        </Row>
      </FormSection>
      <p>
        By clicking TOKENIZE PROPERTY, <br />I agree to the following: <br />
        I) I am the owner of this home. <br />
        II) I will comply with Bridges Terms of Use.
      </p>
      <button>Tokenize Property</button>
    </Form>
  );
};

export default TokenizeForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
  }

  label {
    padding: 2rem 0;
    margin-top: 2rem;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input,
  textarea {
    border: none;
    background-color: ${(props) => props.theme.green};
    border-bottom: thin solid ${(props) => props.theme.white};
    padding: 0.5rem 0;
    color: ${(props) => props.theme.white};
    font-family: termina, sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.05em;
    margin-bottom: 2rem;
    width: 100%;
    resize: none;
    ::placeholder {
      justify-self: flex-end;
    }

    ::focus {
      outline: none;
      border: none;
      background-color: ${(props) => props.theme.green};
      border-bottom: thin solid ${(props) => props.theme.neon};
    }

    :hover {
      outline: none;
      border: none;
      background-color: ${(props) => props.theme.green};
      border-bottom: thin solid ${(props) => props.theme.neon};
    }
    ::active {
      outline: none;
      border: none;
      background-color: ${(props) => props.theme.green};
      border-bottom: thin solid ${(props) => props.theme.neon};
    }
  }

  input[type="file"]::-webkit-file-upload-button {
    border: thin solid ${(props) => props.theme.white};
    padding: 0.5em 1em;
    background-color: ${(props) => props.theme.green};
    transition: all 0.3s ease;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    font-weight: 600;
    font-family: termina, sans-serif;
    letter-spacing: 0.05em;
    border-radius: 0;
    margin-right: 1rem;
    cursor: pointer;
  }

  input[type="file"]::file-selector-button {
    border: thin solid ${(props) => props.theme.white};
    padding: 0.5em 1em;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.green};
    transition: all 0.3s ease;
    font-family: termina, sans-serif;
    letter-spacing: 0.05em;
    border-radius: 0;
    margin-right: 1rem;
    cursor: pointer;
  }

  input[type="file" i] {
    font-family: termina, sans-serif;
    letter-spacing: 0.05em;
    border-radius: 0;
  }

  input[type="file"]::-webkit-file-upload-button:hover,
  ::-webkit-file-upload-button::active,
  ::-webkit-file-upload-button::focus {
    outline: none;
    border: thin solid ${(props) => props.theme.neon};
    background-color: ${(props) => props.theme.lilac};
    color: ${(props) => props.theme.green};
    border-radius: 0;
  }

  input[type="file"]::file-selector-button:hover,
  ::file-selector-button:active,
  ::file-selector-button:focus {
    outline: none;
    border: thin solid ${(props) => props.theme.neon};
    background-color: ${(props) => props.theme.lilac};
    color: ${(props) => props.theme.green};
    border-radius: 0;
  }
`;

const FormSection = styled.section`
  padding: 2rem;
  border: thin solid ${(props) => props.theme.white};
  width: 100%;
  margin: 2rem 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  button {
    margin: 0;
    margin-bottom: 2rem;
    border: thin solid ${(props) => props.theme.white};
    padding: 0.5em 1em;
    background-color: ${(props) => props.theme.green};
    transition: all 0.3s ease;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    font-weight: 600;
    font-family: termina, sans-serif;
    letter-spacing: 0.05em;
    border-radius: 0;
    margin-left: 1rem;
    cursor: pointer;
    :hover {
      outline: none;
      border: thin solid ${(props) => props.theme.neon};
      background-color: ${(props) => props.theme.lilac};
      color: ${(props) => props.theme.green};
      border-radius: 0;
    }
  }
  div {
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    :first-of-type {
      margin-right: 1rem;
    }
  }
`;

// const Address = styled.p`
//   font-size: 1.2rem;
//   color: ${(props) =>
//     props.connected ? props.theme.lilac : props.theme.white};
//   margin-bottom: ${(props) => (props.connected ? "1rem" : 0)};
// `;
