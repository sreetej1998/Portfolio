import React from 'react'
import './ExperienceCard.css'
import zemoso from '../../images/logos/zemosotechnologies.png';
import perfectice from '../../images/logos/perfectice.png';

const companiesMap = {
  'ZeMoSo Technologies': zemoso,
  'Perfectice': perfectice
}

const ExperienceCard = ({ experience }) => {
  let { link, company, title, dateFrom, dateTo, info, stack } = experience
  return (
    <a
      className="experience-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="experience-card-wrapper">
        <div className="experience-card">
          <div className="experience-card-top">
            <div
              className="experience-bg"
              style={{ background: experience.colourPrimary }}
            ></div>
            <h2>{company}</h2>
            <div className="image-wrapper">
              <div
                className="experience-bg logo-bg"
                style={{
                  background: experience.colourSecondary
                    ? experience.colourSecondary
                    : experience.colourPrimary,
                }}
              ></div>
              <img
                className="company-logo"
                src={companiesMap[company]}
                alt={`${company}-logo`}
                style={
                  experience.logoheight
                    ? {
                        height: `${experience.logoheight}%`,
                        borderRadius: '50%'
                      }
                    : { width: `${experience.logowidth}%`, borderRadius: '50%' }
                }
              />
            </div>
          </div>
          <div className="experience-card-bottom">
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
            <div className="experience-card-tech">
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

export default ExperienceCard
