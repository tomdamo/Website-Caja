import React from "react";
import "./cv.css";
import cajaImage from "./img/cv/cvcaja.jpg";
export function Cv() {
  return (
    <>
      <div className="cv-container">
        <div className="cv-top">
          <div className="cv-content">
            <h4 className="display-4_cv">Exhibition</h4>
            <div className="exhibition">
              <div className="exhibition-entry">
              <div className="cv">
                  <div className="year">2023</div>
                  <div className="job">
                    <p>
                    Galerie Weisbard 
                      <br></br>
                      Rotterdam, <i>solo-show</i> (upcoming)
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">2023</div>
                  <div className="job">
                    <p>
                      Maidentrip
                      <br></br>
                      Collectie de Groen, Arnhem, <i>solo-show</i>
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">2023</div>
                  <div className="job">
                    <p>
                    Best of Graduates
                      <br></br>
                      Galerie Ron Mandos, Amsterdam,<i>groupshow</i>
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">2023</div>
                  <div className="job">
                    <p>
                      HKU Exposure 
                      <br></br>
                      HKU Fine Art, Utrecht<i>graduation show</i>
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">2023</div>
                  <div className="job">
                    <p>
                      TRAILER
                      <br></br>
                      AG, Utrecht,<i> groupshow</i>
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">2023</div>
                  <div className="job">
                    <p>
                      A Touch of Light
                      <br></br>
                      Museum Kranenburgh, Bergen,
                      <i> groupshow</i>
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">2022</div>
                  <div className="job">
                    <p>
                      PEEK Pastoe 
                      <br></br>
                      HKU Fine Art, Utrecht,<i> groupshow</i>
                    </p>
                  </div>
                </div>
                {/* hier */}
                <div className="cv">
                  <div className="year">2022</div>
                  <div className="job">
                    <p>
                      Tale of the Tape, Caja Boogers
                      <br></br>
                      Westersingel 101, Rotterdam,
                      <i> solo-show</i>

                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">
                    <p>2022</p>
                  </div>
                  <div className="job">
                    <p>
                      The NEXT: KapSalon  <br></br>Herman van
                      Veen Arts Center, Soest,
                      <i> groupshow</i>
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">
                    <p>2021</p>
                  </div>
                  <div className="job">
                    <p>
                      CURRENT CURRENT CURRENT  <br></br>OMSTAND,
                      Arnhem,
                      <i> groupshow</i>
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">
                    <p>2021</p>
                  </div>
                  <div className="job">
                    <p>
                      Virtual Empathy <br></br>AG, Utrecht, 
                      <i> groupshow</i> 
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="display-4_mid">Education</h4>
              <div className="education">
                <div className="cv">
                  <div className="year-ed">2019-2023</div>
                  <div className="job">
                    <p>BA Fine Art Hogeschool voor de Kunsten Utrecht</p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year-ed">2022</div>
                  <div className="job">
                    <p>Internship Pennie Key Rijksakademie</p>
                  </div>
                </div>
              </div>

              <h4 className="display-4_mid">Residencies</h4>
              <div className="education">
                <div className="cv">
                  <div className="job"> <p>
                  November 2023- August 2024 
                  <br></br>
                  Lakeside award resident in Depot Boijmans van Beuningen,<br></br> Rotterdam
                  </p>
                  </div>

                </div>
              </div>
              <h4 className="display-4_mid">Publications</h4>
              <div className="education">
                <div className="cv">
                  <div className="cv_publications"> <p>
                  ‘De vliegende start van drie jonge kunstenaars’
                  <br></br>
                  Anna van Leeuwen
                  <br></br>
                  <a href="https://www.volkskrant.nl/cultuur-media/net-afgestudeerd-en-nu-al-een-tentoonstelling- de-vliegende-start-van-drie-jonge-kunstenaars~b8201ff2e/">
                  de Volkskrant 10 juli 2023
                  </a>
                  <br></br>
                  <br></br>
                  Metropolis M: Inkomen & Eindexamens 2023 
                  <br></br>
                  Eli Witteman
                  </p>
                  </div>

                </div>
              </div>

             
            </div>
            <h4 className="display-4_end">Extra</h4>
              <div className="cv_end">
              <div className="cv_content">
                Works have been acquired by collections such as Museum Voorlinden, <br></br>Verder Collectie, 
                Lakeside collection and ING collectie.

              </div>
              </div>
          </div>
          
          <div className="cv-image">
            <img
              className="cajaImage"
              src={cajaImage}
              alt="Caja Boogers in front of his work"
            />
          </div>
        </div>
      </div>
    </>
  );
}
