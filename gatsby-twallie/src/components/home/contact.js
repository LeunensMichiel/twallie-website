import React from 'react'
import styled from 'styled-components'
import {
  FaUserCircle,
  FaEnvelope,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCommentAlt,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import DatePicker from 'react-datepicker'
import nl from 'date-fns/locale/nl'

import '../../stylesheets/datetimepicker.css'
import colors from '../colors'
import { device } from '../device'

const Flex = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${device.laptop} {
    min-height: 544px;
    flex-direction: row;
    padding: 69px 85px;
    align-items: flex-start;
  }
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &.selfalign {
    align-self: flex-end;
  }

  @media ${device.laptop} {
    justify-content: stretch;
    align-items: flex-start;
  }
`

const FlexRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-end;
  width: 100%;
  max-width: 350px;
`

const Title = styled.h1`
  font-size: 48px;
  line-height: 71px;
  margin: 0;
  margin-bottom: 15px;
  &::after {
    content: '';
    border-bottom: 3px solid ${colors.primaryaccent};
    width: 155px;
    display: block;
  }

  @media ${device.laptop} {
    font-size: 72px;
    line-height: 100px;
  }
`

const FormInput = styled.div`
  position: relative;
  margin: 12px 0;
  width: 100%;
  max-width: 350px;

  &.field__hidden {
    display: none;
  }

  textarea {
    resize: none;
    height: 162px;

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* Chrome/Safari/Webkit */
    }
  }

  input,
  textarea {
    background: none;
    color: ${colors.foreground};
    font-size: 16px;
    padding: 15px 30px 15px 0;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colors.foreground + 'A8'};
    box-shadow: none;
    &:focus {
      outline: none;
    }
    &:focus ~ .bar:before {
      width: 100%;
    }

    &:focus ~ .form-icons {
      color: ${colors.primaryaccent};
      transition: ease 0.3s;
    }
  }

  .react-datepicker-wrapper {
    width: 100%;
    z-index: 44;
    & > div {
      width: 100%;
    }
    & ~ div {
      z-index: 6;
    }
    &:focus-within ~ .bar:before {
      width: 100%;
    }
    &:focus-within ~ .form-icons {
      color: ${colors.primaryaccent};
      transition: ease 0.3s;
    }
  }

  .form-icons {
    color: ${colors.foreground + 'A8'};
    position: absolute;
    top: 18px;
    right: 0px;
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: '';
      height: 2px;
      width: 0;
      bottom: 0;
      position: absolute;
      background: ${colors.primaryaccent};
      transition: 0.2s ease;
      left: 0%;
    }
  }
`

const Note = styled.small`
  margin: 12px 0;
  color: ${colors.foreground + '80'};
`

const StyledButton = styled.button`
  background: none;
  border: 2px solid ${colors.foreground};
  border-radius: 4px;
  transition-duration: ease 0.3s;
  width: 154px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${colors.foreground};
  text-transform: uppercase;
  font-size: 18px;
  line-height: 27px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  z-index: 4;
  margin-top: 25px;

  &:before {
    position: relative;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
    width: 100%;
    height: 0;
    top: 50%;
    left: 50%;
    background: ${colors.secondaryaccent};
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }

  &:hover,
  &:active {
    cursor: pointer;
    border-color: ${colors.secondaryaccent};
    transition: all 0.3s;
  }

  &:hover:after {
    height: 260%;
    opacity: 1;
  }

  &:active:after {
    height: 400%;
    opacity: 1;
  }
`

class ContactMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }
  render() {
    return (
      <form
        name="contactform"
        method="POST"
        action="/thanks"
        data-netlify="true"
        netlify-honeypot="bot"
      >
        <Flex>
          <IconContext.Provider value={{ className: 'form-icons' }}>
            <FlexCol>
              <Title>BOEKEN?</Title>
              <FormInput className="field__hidden">
                <input name="bot" />
              </FormInput>
              <FormInput>
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Voornaam & Naam*"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <FaUserCircle />
              </FormInput>
              <FormInput>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="E-mail*"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <FaEnvelope />
              </FormInput>
              <FormInput>
                <DatePicker
                  locale={nl}
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  timeIntervals={15}
                  timeFormat="HH:mm"
                  dateFormat="d.M.yyyy HH:mm"
                  timeCaption="Uur"
                  minDate={new Date()}
                  placeholderText="Datum & Tijd Event"
                  name="dateTime"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <FaCalendarAlt />
              </FormInput>
              <FormInput>
                <input
                  name="eventAndLocation"
                  type="text"
                  placeholder="Naam & Locatie Event"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <FaMapMarkerAlt />
              </FormInput>
            </FlexCol>
            <FlexCol className="selfalign">
              <FlexRight>
                <FormInput>
                  <textarea name="message" required placeholder="Bericht*" />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <FaCommentAlt />
                </FormInput>
                <StyledButton type="submit">VERSTUUR</StyledButton>
                <Note>Velden met een * zijn verplicht</Note>
              </FlexRight>
            </FlexCol>
          </IconContext.Provider>
        </Flex>
      </form>
    )
  }
}

export default ContactMe
