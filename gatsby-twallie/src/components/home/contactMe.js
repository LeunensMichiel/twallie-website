import React from 'react'
import styled from 'styled-components'

import Button from '../button'
import colors from '../colors'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 544px;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

const Divider = styled.span`
  margin: 0 93px;
  display: inline-block;
  width: 1px;
  background-color: ${colors.foreground + 'A8'};
`

const Title = styled.h1`
  font-size: 72px;
  line-height: 100px;
  margin: 0;
  margin-bottom: 15px;
  &::after {
    content: '';
    border-bottom: 4px solid ${colors.primaryaccent};
    width: 155px;
    display: block;
  }
`

const FormInput = styled.div`
  position: relative;
  margin: 12px 0;

  textarea {
    resize: none;
    height: 160px;
  }

  input,
  textarea {
    background: none;
    color: ${colors.foreground};
    font-size: 16px;
    padding: 15px 5px;
    display: block;
    width: 330px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colors.foreground + 'A8'};
    &:focus {
      outline: none;
    }
    &:focus ~ label,
    &:valid ~ label {
      top: -14px;
      transform: scale(0.8);
      transform-origin: left;
      color: ${colors.primaryaccent};
    }
    &:focus ~ .bar:before {
      width: 330px;
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  label {
    color: ${colors.foreground + 'A8'};
    font-size: 16px;
    line-height: 24px;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease;
  }

  .bar {
    position: relative;
    display: block;
    width: 320px;
    &:before {
      content: '';
      height: 2px;
      width: 0;
      bottom: 0px;
      position: absolute;
      background: ${colors.primaryaccent};
      transition: 0.2s ease;
      left: 0%;
    }
  }
`

const Note = styled.small`
  color: ${colors.foreground + 'A8'};
`

const ContactMe = () => {
  return (
    <Flex>
      <FlexCol>
        <Title>BOEKEN?</Title>
        <FormInput>
          <input name="test" type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Voornaam & Naam *</label>
        </FormInput>
        <FormInput>
          <input name="test" type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>E-mail *</label>
        </FormInput>
        <FormInput>
          <input name="test" type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Datum & Tijd Event</label>
        </FormInput>
        <FormInput>
          <input name="test" type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Naam & Locatie Event</label>
        </FormInput>
        <Note>Velden met een * zijn verplicht</Note>
      </FlexCol>
      {/* <Divider /> */}
      <FlexCol>
        <FormInput>
          <textarea name="test" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Naam & Locatie Event</label>
        </FormInput>
        <Button text="Verstuur" external />
      </FlexCol>
    </Flex>
  )
}

export default ContactMe
