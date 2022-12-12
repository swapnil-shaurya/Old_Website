import React from 'react'
import './Resume.css'
import Section from '../section/Section'
import resume from '../../data/Swapnil_Shaurya_Resume.pdf'

const Resume = () => {
  return (
    <Section title="Resume">
      <div className='home'>
        <object data={resume} type="application/pdf" width="100%" height="100%">
            <p>Resume not loaded, please refer to LinkedIn instead.</p>
        </object>
      </div>
    </Section>
  )
}

export default Resume
