import React from 'react'
import styled from 'styled-components'

import Button from '../button'
import colors from '../colors'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const Divider = styled.span`
  margin: 0 93px;
  display: inline-block;
  width: 1px;
  background-color: ${colors.foreground};
`

const ContactMe = () => {
  return (
    <Flex>
      <FlexCol>
        <h2>Boeken?</h2>
        <input name="test" />
        <input name="test" />
        <input name="test" />
        <input name="test" />
      </FlexCol>
      {/* <Divider /> */}
      <FlexCol>
        <input name="test" />
        <Button text="Verstuur" external />
      </FlexCol>
    </Flex>
  )
}

export default ContactMe
