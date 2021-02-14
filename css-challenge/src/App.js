import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="TopBar">
          <div className="wide">
            <div className="header">Hi Jared!</div>
            <div className="subtitle">13th Febuary 2021</div>
          </div>
          <div className="narrow">
            <div className="ImageContainer">
              <img src="./bell.png"></img>
            </div>
          </div>
        </div>

        <div className="Search">
          <button className="NoBorderButton" type="submit">
            <img className="ImageContainer" src="./loupe.png" />
          </button>
          <input
            className="SearchInput"
            type="text"
            placeholder="Search"
            name="search"
          />
        </div>

        <div className="Feelings">
          <div className="smallHeader">How do you feel?</div>
          <div>
            <div className="FeelingsButtonsContainer">
              <div className="Button">
                <div className="ImageContainer">
                  <img width="32px" height="32px" src="./sad_face.png"></img>
                </div>
                <span className="marginTop8">Badly</span>
              </div>
              <div className="Button">
                <div className="ImageContainer">
                  <img width="32px" height="32px" src="./fine.png"></img>
                </div>
                <span className="marginTop8">Fine</span>
              </div>
              <div className="Button">
                <div className="ImageContainer">
                  <img width="32px" height="32px" src="./happy_face.png"></img>
                </div>
                <span className="marginTop8">Well</span>
              </div>
              <div className="Button">
                <div className="ImageContainer">
                  <img width="32px" height="32px" src="./very_happy.png"></img>
                </div>
                <span className="marginTop8">Excellent</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Activities">
        <div className="subtitle black">Exercises</div>

        <div className="ExercisesContainer">
          <div>
            <div className="Exercise">
              <div className="narrow">
                <div className="ImageContainer orange">
                  <img width="32px" height="32px" src="./heart.png"></img>
                </div>
              </div>
              <div className="wide">
                <div className="smallHeader bold">Speaking Skills</div>
                <div className="subtitle">16 Exercises</div>
              </div>
            </div>
          </div>
          <div>
            <div className="Exercise">
              <div className="narrow">
                <div className="ImageContainer Orange">
                  <img width="32px" height="32px" src="./user.png"></img>
                </div>
              </div>
              <div className="wide">
                <div className="smallHeader bold">Reading Speed</div>
                <div className="subtitle">8 Exercises</div>
              </div>
            </div>
          </div>
          <div>
            <div className="Exercise">
              <div className="narrow">
                <div className="ImageContainer pink">
                  <img width="32px" height="32px" src="./runner.png"></img>
                </div>
              </div>
              <div className="wide">
                <div className="smallHeader bold">Some Other Fun Acivity</div>
                <div className="subtitle">4 Exercises</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="MenuContainer">
        <div className="Button">
          <div>
            <img width="32px" height="32px" src="./home.png"></img>
          </div>
        </div>
        <div>
          <div className="">
            <img width="32px" height="32px" src="./menu.png"></img>
          </div>
        </div>
        <div>
          <div className="">
            <img width="32px" height="32px" src="./email.png"></img>
          </div>
        </div>
        <div>
          <div className="">
            <img width="32px" height="32px" src="./profile.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
