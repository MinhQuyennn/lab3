import React from 'react';
import './App.css'; // Import your CSS file here

const MyCV = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
 <div className="menu">
        <h1>THE CV</h1>
        <ul>
          <div>
            <li>
              <a href="#" onClick={() => scrollToSection('profile')}>
                Profile
              </a>
            </li>
          </div>
          <div>
            <li>
              <a href="#" onClick={() => scrollToSection('experiences')}>
                Experiences
              </a>
            </li>
          </div>
          <div>
            <li>
              <a href="#" onClick={() => scrollToSection('abilities')}>
                Abilities
              </a>
            </li>
          </div>
        </ul>
      </div>
      <section className="The_CV">
        <div className="CV">
      <div className="pro5">
        <div className="pro5_1" id="profile">
          <div className="pro5_3">
            <h1 className="text_pro5_1">Profile</h1>
            <p>I'm a student</p>
          </div>
          <div className="pro5_2">
            <div className="About_me">
              <h2 className="text_pro5">About me</h2>
              <p>
                I am a lovely duck. I have passion in IT and I want to become
                data analyst
              </p>
            </div>
            <div className="pic1">
              <img
                src="https://pm1.narvii.com/7253/411d6c6372b905c0016ad0ff212c4e636bb53a00r1-1092-650v2_hq.jpg"
                alt="img1"
                title="Duckk"
                width={250}
                height={250}
              />
            </div>
            <div className="Detail">
              <h2 className="text_pro5">Detail</h2>
              <h3>Name:</h3>
              <p>Phạm Hà Minh Quyên</p>
              <h3>Age:</h3>
              <p>5 years</p>
              <h3>Location</h3>
              <p>UIT, VNU-HCM</p>
            </div>
          </div>
        </div>
        <div className="Exp" id="experiences">
          <div className="Exp1">
            <h1 className="text_pro5_1">Experiences</h1>
          </div>
          <div className="edu">
            <div className="edu1">
              <h2 className="text_pro5">Educations</h2>
              <div className="edu1_0">
                <div className="edu1_1">
                  <h3>UIT, VNU-HCM</h3>
                  <p>2020-2024</p>
                </div>
                <div className="content">
                  <h3>Information Technology</h3>
                  <p>
                    The education was mainly System desgin-basic course, but I
                    also learned about Web. Data analyst and more. During my
                    time in college, I specialized in OOP, data science. Now,
                    I'm learning web development
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="working">
            <div className="edu1">
              <h2 className="text_pro5">Working Experiences</h2>
              <div className="working1">
                <div className="edu1_1">
                  <h3>Facebook | Fresher Engineer</h3>
                  <p>2020-2024</p>
                </div>
                <div className="content">
                  <h3>Partime - Fresher Web Development</h3>
                  <p>
                    Working as Fresher Developer on a dating function on
                    Facebook page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CV2" id="abilities">
          <div className="Exp1">
            <h1 className="text_pro5_1">Abilities</h1>
          </div>
          <div className="skill">
            <h2 className="text_pro5">Skills</h2>
            <div className="contentSkill">
              <table className="skills1">
                <tbody>
                  <tr>
                    <td className="tdtile">HTML/CSS</td>
                    <td>
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i className="fa-regular fa-square" />
                      <i className="fa-regular fa-square" />
                    </td>
                  </tr>
                  <tr>
                    <td className="tdtile">SQL</td>
                    <td>
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i className="fa-regular fa-square" />
                      <i className="fa-regular fa-square" />
                    </td>
                  </tr>
                  <tr>
                    <td className="tdtile">JQuery</td>
                    <td>
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i className="fa-regular fa-square" />
                    </td>
                  </tr>
                  <tr>
                    <td className="tdtile">Javascript</td>
                    <td>
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="skills2">
                <tbody>
                  <tr>
                    <td className="tdtile">OOP</td>
                    <td>
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i className="fa-regular fa-square" />
                      <i className="fa-regular fa-square" />
                    </td>
                  </tr>
                  <tr>
                    <td className="tdtile">SEO</td>
                    <td>
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i className="fa-regular fa-square" />
                      <i className="fa-regular fa-square" />
                    </td>
                  </tr>
                  <tr>
                    <td className="tdtile">React</td>
                    <td>
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i className="fa-regular fa-square" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="Git">
            <p>
              <i className="textGit">See my profile on github</i>
            </p>
            <button className="Gitbut">
              <a className="Gitbut" href="https://github.com/MinhQuyennn">
                See project on Github
              </a>
            </button>
          </div>
          <div className="lang">
            <h2 className="text_pro5">Languages</h2>
            <div className="contentSkill">
              <table className="skills1">
                <tbody>
                  <tr>
                    <td className="tdtile">VietNamese</td>
                    <td>
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i className="fa-regular fa-square" />
                      <i className="fa-regular fa-square" />
                    </td>
                  </tr>
                  <tr>
                    <td className="tdtile">English</td>
                    <td>
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i className="fa-regular fa-square" />
                      <i className="fa-regular fa-square" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="skills2">
                <tbody>
                  <tr>
                    <td className="tdtile">Cat</td>
                    <td>
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i className="fa-regular fa-square" />
                      <i className="fa-regular fa-square" />
                    </td>
                  </tr>
                  <tr>
                    <td className="tdtile">Dog</td>
                    <td>
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i
                        className="fa-regular fa-square"
                        style={{ color: "rgb(54, 185, 185)" }}
                      />
                      <i className="fa-regular fa-square" />
                      <i className="fa-regular fa-square" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  );
};

export default MyCV;
