

function renderSkillSection() {
const skillSection = `
        <div class="main-text">
        <span>technical and professional</span>
        <h2>My Skills</h2>
      </div>

      <div class="skill-main">
        <div class="skill-left scroll-scale">
          <h3>Technical Skills</h3>
          <div class="skill-bar">
            <div class="info">
              <p>HTML</p>
              <p class="percentage">72%</p>
            </div>
            <div class="bar">
              <span class="html js-bar"></span>
            </div>
          </div>

          <div class="skill-bar">
            <div class="info">
              <p>Javascript</p>
              <p class="percentage">93%</p>
            </div>
            <div class="bar">
              <span class="javascript js-bar"></span>
            </div>
          </div>

          <div class="skill-bar">
            <div class="info">
              <p>CSS</p>
              <p class="percentage">62%</p>
            </div>
            <div class="bar">
              <span class="html js-bar"></span>
            </div>
          </div>

          <div class="skill-bar">
            <div class="info">
              <p>Node.js</p>
              <p class="percentage">60%</p>
            </div>
            <div class="bar">
              <span class="node.js js-bar"></span>
            </div>
          </div>

        </div>
        
        <div class="skill-right scroll-scale">
          <h3>Professional Skills</h3>
          <div class="professional">
            <div class="box">
              <div class="circle" data-dots="80" data-percent="90">
              </div>
              <div class="text">
                <small>Team Work</small>
              </div>
            </div>

            <div class="box">
              <div class="circle" data-dots="80" data-percent="92">
              </div>
              <div class="text">
                <small>Creativity</small>
              </div>
            </div>

            <div class="box">
              <div class="circle" data-dots="80" data-percent="87">

              </div>
              <div class="text">
                <small>Project Management</small>
              </div>
            </div>

            <div class="box">
              <div class="circle" data-dots="80" data-percent="85">
              </div>
              <div class="text">
                <small>Comunication</small>
              </div>
            </div>
          </div>
        </div>
      </div>
`

document.querySelector('.js-skills-section').innerHTML = skillSection
}

renderSkillSection()

