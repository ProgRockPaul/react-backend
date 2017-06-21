import React, { Component } from 'react';
import './drummachine.css';
import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick2.wav';
import openhat from './sounds/openhat.wav';
import boom from './sounds/kick1.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tom from './sounds/tom.wav';
import fx from './sounds/fx.wav';


class DrumMachine extends Component {
  render(){
    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;
      key.classList.add('keydown');
      setTimeout(function(){
        key.classList.remove("keydown")},200);
      audio.currentTime = 0;
      audio.play();
    }

    const keys = Array.from(document.querySelectorAll('.key'));

    window.addEventListener('keydown', playSound);
    console.log(keys);
    return(
      <div>
        <div>
          <div className="keys">
            <div data-key="65" className="key">
              <kbd>A</kbd>
              <span className="sound">clap</span>
            </div>
            <div data-key="83" className="key">
              <kbd>S</kbd>
              <span className="sound">hihat</span>
            </div>
            <div data-key="68" className="key">
              <kbd>D</kbd>
              <span className="sound">kick</span>
            </div>
          </div>
          <div className="keys">
            <div data-key="70" className="key">
              <kbd>F</kbd>
              <span className="sound">openhat</span>
            </div>
            <div data-key="71" className="key">
              <kbd>G</kbd>
              <span className="sound">boom</span>
            </div>
            <div data-key="72" className="key">
              <kbd>H</kbd>
              <span className="sound">ride</span>
            </div>
          </div>
          <div className="keys">
            <div data-key="74" className="key">
              <kbd>J</kbd>
              <span className="sound">snare</span>
            </div>
            <div data-key="75" className="key">
              <kbd>K</kbd>
              <span className="sound">tom</span>
            </div>
            <div data-key="76" className="key">
              <kbd>L</kbd>
              <span className="sound">fx</span>
            </div>
          </div>
        </div>
        <audio data-key="65" src={clap}></audio>
        <audio data-key="83" src={hihat}></audio>
        <audio data-key="68" src={kick}></audio>
        <audio data-key="70" src={openhat}></audio>
        <audio data-key="71" src={boom}></audio>
        <audio data-key="72" src={ride}></audio>
        <audio data-key="74" src={snare}></audio>
        <audio data-key="75" src={tom}></audio>
        <audio data-key="76" src={fx}></audio>

      </div>
    )
  }
}

export default DrumMachine;
