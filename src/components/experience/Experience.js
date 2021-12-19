import React from 'react'
import './Experience.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import config from '../../config'
import Particles from 'react-particles-js'
import ExperienceCard from '../experienceCard/ExperienceCard'
import experienceData from '../../data/experience.json'

const Experience = () => {
  return (
    
    <Section title="Experience">
       <Particles className="particles" params={config.particles} />
      <div className="experience-content">
        <ul className="experience-list">
          {experienceData.experience.reverse().map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ExperienceCard experience={exp} />
              </Fade>
            </li>
          ))}
        </ul>
        <Fade bottom duration={1200} distance="20px">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <p style={{ textAlign: 'center' }}>
              Further in-depth experience can be found on my{' '}
              <a
                href="https://www.linkedin.com/in/sreetej-reddy-nagarimadugu/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0be779',
                  cursor: 'pointer',
                }}
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </Fade>
      </div>
    </Section>
  )
}

export default Experience
