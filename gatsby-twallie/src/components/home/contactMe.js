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

import 'react-datepicker/dist/react-datepicker.css'
import Button from '../button'
import colors from '../colors'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  min-height: 544px;
  padding: 69px 85px;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
`

const FlexRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-end;
  margin-bottom: 22px;
`

const Title = styled.h1`
  font-size: 72px;
  line-height: 100px;
  margin: 0;
  margin-bottom: 15px;
  &::after {
    content: '';
    border-bottom: 3px solid ${colors.primaryaccent};
    width: 155px;
    display: block;
  }
`

const FormInput = styled.div`
  position: relative;
  margin: 12px 0;

  textarea {
    resize: none;
    height: 195px;

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
    width: 350px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colors.foreground + 'A8'};
    box-shadow: none;
    &:focus {
      outline: none;
    }
    &:focus ~ .bar:before {
      width: 350px;
    }

    &:focus ~ .form-icons {
      color: ${colors.primaryaccent};
      transition: ease 0.3s;
    }
  }

  .react-datepicker-wrapper {
    &:focus-within ~ .bar:before {
      width: 350px;
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
    width: 350px;
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
  color: ${colors.foreground + '80'};
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
      <Flex>
        <IconContext.Provider value={{ className: 'form-icons' }}>
          <FlexCol>
            <Title>BOEKEN?</Title>
            <FormInput>
              <input
                name="Full Name"
                type="text"
                required
                placeholder="Voornaam & Naam*"
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <FaUserCircle />
            </FormInput>
            <FormInput>
              <input name="Email" type="text" required placeholder="E-mail*" />
              <span className="highlight"></span>
              <span className="bar"></span>
              <FaEnvelope />
            </FormInput>
            <FormInput>
              <DatePicker
                className="datepicker"
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
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <FaCalendarAlt />
            </FormInput>
            <FormInput>
              <input
                name="Location"
                type="text"
                placeholder="Naam & Locatie Event"
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <FaMapMarkerAlt />
            </FormInput>
            <Note>Velden met een * zijn verplicht</Note>
          </FlexCol>
          <FlexCol>
            <FlexRight>
              <FormInput>
                <textarea name="Message" required placeholder="Bericht*" />
                <span className="highlight"></span>
                <span className="bar"></span>
                <FaCommentAlt />
              </FormInput>
              <Button text="Verstuur" external form />
            </FlexRight>
          </FlexCol>
        </IconContext.Provider>
      </Flex>
    )
  }
}

export default ContactMe
