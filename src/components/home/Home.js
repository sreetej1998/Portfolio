import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import Button from '@material-ui/core/Button'
import config from '../../config'
import profile from '../../images/profile.png'
import resume from '../../data/Resume_portfolio.pdf'
import { makeStyles } from '@material-ui/core/styles'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'

const useStyles = makeStyles((theme) => ({
  submit: {
    padding: "15px",

    '&': {
      backgroundColor: 'white',
      boxShadow: 'none',
      opacity: 0.8,
      '&:hover': {
        opacity: 1,
        backgroundColor: 'white',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'black',
      fontSize: '15px',
      fontWeight: '900',
    },
  },
}))


const Home = () => {
  const classes = useStyles();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>

    <div className="home-wrapper">
      <div className="home">

        <Particles className="particles" params={config.particles} />
        
        <div className={`greeting`}>
          <Fade bottom distance="40px">
            <img
              className="profile"
              alt="m.jigalin profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Sreetej Reddy Nagarimadugu</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h3 className="greeting-text">
              <div>
                I am currently a CS grad student at UCI, and I am software engineer with a history of working in the information technology and services industry.
                Worked on products that apply computer science to disciplines like Biotechnology and Robotics.
              </div>
            </h3>
            
            <Button className={classes.submit} type="submit" variant="contained">
            <a href={resume}
             download="SreetejResume.pdf" 
             style={{color: 'inherit', fontWeight: 'inherit', textDecorationLine: 'none'}}>
              Download My Resume
              </a>
              </Button>
           

            <Bounce cascade>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/sreetej-reddy-nagarimadugu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{paddingRight: '15px'}}
                >
                  <img src={linkedin} alt="Linkedin Logo" width="50px" />
                </a>
                <a
                  href="https://github.com/sreetej1998"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Github Logo" width="50px" />
                </a>
              </div>
            </Bounce>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
