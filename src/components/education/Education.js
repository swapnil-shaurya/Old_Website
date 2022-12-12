import React from 'react'
import './Education.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import EducationCard from '../educationCard/EducationCard'
import educationData from '../../data/education.json'

const Education = () => {
  return (
    <Section title="Education">
      <div className="education-content">
        <ul className="education-list">
          {educationData.education.map((exp) => (
            <li key={`education-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <EducationCard education={exp} />
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
              In-depth information on my education, experience, and skills can be found on my{' '}
              <a
                href="https://www.linkedin.com/in/swapnil-shaurya/"
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
              , or resume below.
            </p>
          </div>
        </Fade>
      </div>
    </Section>
  )
}

export default Education
