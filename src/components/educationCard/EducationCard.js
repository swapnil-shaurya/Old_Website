import React from 'react'
import './EducationCard.css'

const EducationCard = ({ education }) => {
  let { link, company, title, dateFrom, dateTo, info, stack } = education
  return (
    <a
      className="education-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="education-card-wrapper">
        <div className="education-card">
          <div className="education-card-top">
            <div
              className="education-bg"
              style={{ background: education.colourPrimary }}
            ></div>
            <h2>{company}</h2>
            <div className="image-wrapper">
              <div
                className="education-bg logo-bg"
                style={{
                  background: education.colourSecondary
                    ? education.colourSecondary
                    : education.colourPrimary,
                }}
              ></div>
              <img
                className="company-logo"
                src={require(`../../images/logos/${company
                  .replace(/ /g, '')
                  .toLowerCase()}.png`)}
                alt={`${company}-logo`}
                style={
                    education.logoheight
                    ? {
                        height: `${education.logoheight}%`,
                      }
                    : { width: `${education.logowidth}%` }
                }
              />
            </div>
          </div>
          <div className="education-card-bottom">
            <div>
              <h2>{title}</h2>
              <h3>
                {dateFrom} - {dateTo}
              </h3>
              <ul>
                {info.map((point, idx) => (
                  <li key={`${company}-point-${idx}`}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="education-card-tech">
              <ul>
                {stack.map((tech) => (
                  <li key={`${company}-${tech}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default EducationCard
