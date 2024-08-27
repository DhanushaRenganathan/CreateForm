import "./App.css";
import { React, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [resume, setResume] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      name,
      email,
      contact,
      gender,
      selectedOption,
      resume,
      about
    );
  };

  const handleReset = () => {
    // Reset all state variables here
    setName("");
    setEmail("");
    setContact("");
    setGender("male");
    setResume("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="App">
      <h1> Form in React </h1>
      <fieldset>
        <form action="#" method="get">
          <label for="name"> Enter Name* </label>
          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Enter Name"
            required
          />
          <label for="email"> Enter Email* </label>
          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter email"
            required
          />
          <label for="tel"> Contact* </label>
          <input
            type="tel"
            value={contact}
            onChange={(e) =>
              setContact(e.target.value)
            }
            placeholder="Enter Mobile number"
            required
          />
          <label for="gender"> Gender* </label>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) =>
              setGender(e.target.value)
            }
          />
          Male
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) =>
              setGender(e.target.value)
            }
          />
          Female
          <input
            type="radio"
            value="other"
            checked={gender === "other"}
            onChange={(e) =>
              setGender(e.target.value)
            }
          />
          Other
          <label for="file"> Upload Resume* </label>
          <input
            type="file"
            onChange={(e) =>
              setResume(e.target.files[0])
            }
            placeholder="Enter Upload File"
            required
          />
          <label> Select your field </label>
          <select
            value={selectedOption}
            onChange={(e) =>
              setSelectedOption(
                e.target.value
              )
            }
          >
            <option
              value=""
              disabled
              selected={selectedOption === ""}
            >
              Select your Ans
            </option>
            <optgroup label="Beginners">
              <option value="1"> HTML </option>
              <option value="2"> CSS </option>
              <option value="3"> JavaScript </option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4"> React </option>
              <option value="5"> Node </option>
            </optgroup>
          </select>
          <label for="about"> About </label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) =>
              setAbout(e.target.value)
            }
            placeholder="About your self"
            required
          ></textarea>
          <button
            type="reset"
            value="reset"
            onClick={() => handleReset()}
          >
            Reset
          </button>
          <button
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
