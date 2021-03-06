import { useEffect, useState } from 'react'
import './index.scss';
import {
  faNode,
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    function animate() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }
    animate();
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious full-stack developer looking for a role in an established company with the opportunity to work with the latest technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            While I may be new to software development, I believe my eagerness and quick ability to learn and adapt quickly gives me an advantage in the workforce, allowing me to contribute to projects and help out my fellow peers.
          </p>
          <p>
            Growing up, I was always considered a tech-savvy person. Even taking an application-building class in high school. Deciding to look for a career change, I remembered how challenging and gratifying it was, I decided to pursue a higher education experience in it. I signed up at DeVry University in August 2021 and not long after that I signed up for the Thinkful Coding Bootcamp in September 2021.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGit} color="#f34f29" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#f7df1e" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#2965f1" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNode} color="#6cc24a" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default About
