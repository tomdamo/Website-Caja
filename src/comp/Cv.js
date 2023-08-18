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
                      HKU Exposure <i>graduation show (upcoming)</i>
                      <br></br>
                      HKU Fine Art, Utrecht
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">2023</div>
                  <div className="job">
                    <p>
                      TRAILER
                      <i>groupshow</i>
                      <br></br>
                      AG, Utrecht
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">2023</div>
                  <div className="job">
                    <p>
                      A Touch of Light
                      <i> groupshow</i>
                      <br></br>
                      Museum Kranenburgh, Bergen
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">2022</div>
                  <div className="job">
                    <p>
                      PEEK Pastoe <i>groupshow</i>
                      <br></br>
                      HKU Fine Art, Utrecht
                    </p>
                  </div>
                </div>
                {/* hier */}
                <div className="cv">
                  <div className="year">2022</div>
                  <div className="job">
                    <p>
                      Tale of the Tape, Caja Boogers
                      <i> solo-show</i>
                      <br></br>
                      Westersingel 101, Rotterdam
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">
                    <p>2022</p>
                  </div>
                  <div className="job">
                    <p>
                      The NEXT: KapSalon <i>groupshow</i> <br></br>Herman van
                      Veen Arts Center, Soest
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">
                    <p>2021</p>
                  </div>
                  <div className="job">
                    <p>
                      CURRENT CURRENT CURRENT <i>groupshow</i> <br></br>OMSTAND,
                      Arnhem
                    </p>
                  </div>
                </div>
                <div className="cv">
                  <div className="year">
                    <p>2021</p>
                  </div>
                  <div className="job">
                    <p>
                      Virtual Empathy <i>groupshow</i> <br></br>AG, Utrecht
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

              <h4 className="display-4_end">Extra</h4>
              <div className="cv_end">
                Bookcover for novel
                <i> Wij zijn van Diamant</i>
                <br></br>
                by Alex Boogers,
                <br></br>
                Hollands Diep, Overamstel uitgevers
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
