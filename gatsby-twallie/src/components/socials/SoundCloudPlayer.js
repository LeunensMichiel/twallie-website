import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  PlayButton,
  Progress,
  VolumeControl,
} from 'react-soundplayer/components'
import { withSoundCloudAudio } from 'react-soundplayer/addons'
import styled from 'styled-components'

import colors from '../colors'
import SeekIcon from '../../images/seekicon.svg'

const PlayerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-image: url(${props => (props.imgSrc ? props.imgSrc : '')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${colors.background + 'A8'};
  padding: 15px;
  border-radius: 4px;

  .overlay {
    background-color: ${colors.background + 'A8'};
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`

const PlayerTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  justify-self: center;

  .username,
  .trackname {
    margin: 0;
    word-wrap: break-word;
    letter-spacing: 3px;
  }

  .username {
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
  }

  .trackname {
    font-weight: 700;
  }
`

const PlayerButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;

  .icon {
    width: 33px;
    height: 33px;
    position: relative;
    vertical-align: middle;
  }

  .progressbar {
    height: 8px;
    width: 100%;
    overflow: hidden;
    background: ${colors.foreground + '55'};
    border-radius: 15px;
    cursor: pointer;
  }

  .progressbar-inner {
    height: 100%;
    transition: width 0.2s ease-in;
    background: #ff5501;
  }

  .playerBtn {
    min-width: 33px;
    width: 33px;
    height: auto;
    border: none;
    background: transparent;
    color: ${colors.foreground};
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    -webkit-appearance: none;
    transition: 0.2s ease all;
    outline: none;
    margin-right: 16px;

    &:focus {
      transform: scale(0.9375);
    }

    &:hover {
      color: #ff5501;
    }
  }

  .volumeBtn {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 16px;
    margin-left: 16px;

    div {
      overflow: hidden;
      width: 0;
      transition: width 0.2s ease-out;
      position: relative;
    }

    &:hover {
      div {
        width: 80px;
      }
    }
  }

  input[type='range'] {
    vertical-align: middle;
    background-color: transparent;
  }

  .volumeRange {
    -webkit-appearance: none;
    width: 98%;
    min-height: 22px;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 0.2em;
      cursor: pointer;
      animate: 0.2s;
      background: ${colors.foreground + '55'};
      border-radius: 1.3px;
    }
    &::-moz-range-track {
      width: 100%;
      height: 0.2em;
      cursor: pointer;
      animate: 0.2s;
      background: ${colors.foreground + '55'};
      border-radius: 1.3px;
    }
    &::-ms-track {
      width: 100%;
      height: 0.2em;
      cursor: pointer;
      animate: 0.2s;
      background: ${colors.foreground + '55'};
      border-radius: 1.3px;
    }

    &::-moz-range-thumb {
      height: 1em;
      width: 1em;
      border-radius: 1em;
      background: ${colors.foreground};
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -0.4em;
    }
    &::-webkit-slider-thumb {
      height: 1em;
      width: 1em;
      border-radius: 1em;
      background: ${colors.foreground};
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -0.4em;
    }
    &::-ms-thumb {
      height: 1em;
      width: 1em;
      border-radius: 1em;
      background: ${colors.foreground};
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -0.4em;
    }

    /* progress fill */
    &::-ms-fill-lower {
      background: ${colors.background};
    }
  }
`

class SoundCloudPlayer extends Component {
  render() {
    const { track, duration, currentTime, seeking, imgSrc } = this.props

    return (
      <PlayerWrapper imgSrc={imgSrc}>
        <div className="overlay" />
        <PlayerTextContainer className="center py4 relative z1">
          <h3 className="username">{track ? track.user.username : ''}</h3>
          <h2 className="trackname">{track ? track.title : ''}</h2>
        </PlayerTextContainer>
        <PlayerButtons>
          <PlayButton
            className="playerBtn"
            {...this.props}
            seeking={seeking}
            seekingIcon={<SeekIcon />}
          />
          <VolumeControl
            className="volumeBtn"
            buttonClassName="playerBtn"
            rangeClassName="volumeRange"
            {...this.props}
          />
          <Progress
            className="progressbar"
            innerClassName="progressbar-inner"
            value={(currentTime / duration) * 100 || 0}
            {...this.props}
          />
        </PlayerButtons>
      </PlayerWrapper>
    )
  }
}

SoundCloudPlayer.propTypes = {
  resolveUrl: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired,
}

export default withSoundCloudAudio(SoundCloudPlayer)
