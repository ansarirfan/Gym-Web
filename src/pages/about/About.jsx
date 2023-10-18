import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import VisionImage from '../../images/about2.jpg'
import StoryImage from '../../images/about1.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
   <>
    <Header title="About Us" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore libero quibusdam 
    unde eveniet. 
    Similique aliquam eligendi impedit magni velit.
      </Header>

      <section className="about_story">
        <div className="container about_story-container" >
          <div className="about_section-image">
            <img src={StoryImage} alt="stroy img" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi nam 
              repellendus Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Quam cupiditate et sapiente.
              hic error? Aspernatur, libero? Iusto est similique aliquid.</p>

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis doloribus commodi 
                impedit cumque magni quibusdam, ullam natus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Quam cupiditate et sapiente.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Quam cupiditate et sapiente.impedit cumque magni quibusdam, ullam natus. Lorem ipsum dolor sit,</p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi nam 
              repellendus Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Quam cupiditate et sapiente.
              hic error? Aspernatur, libero? Iusto est similique aliquid.</p>

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis doloribus commodi 
                impedit cumque magni quibusdam, ullam natus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Quam cupiditate et sapiente.</p>
                
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="vision img"/>
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container" >
        <div className="about_section-image">
            <img src={MissionImage} alt="mission img" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi nam 
              repellendus Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Quam cupiditate et sapiente.
              hic error? Aspernatur, libero? Iusto est similique aliquid.</p>

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis doloribus commodi 
                impedit cumque magni quibusdam, ullam natus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Quam cupiditate et sapiente.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Quam cupiditate et sapiente.impedit cumque magni quibusdam, ullam natus. Lorem ipsum dolor sit,</p>
          </div>
        </div>
      </section>
   </>
  )
}

export default About
