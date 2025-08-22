import { useState } from "react";
import ReactSwitch from "react-switch";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(""); // start empty
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialCharacter, setIncludeSpecialCharacter] = useState(true);

  const generatePassword = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const specialChars = "!@#$%^&*()";

    let validChars = lowerCaseChars;

    if (includeUpperCase) validChars += upperCaseChars;
    if (includeNumber) validChars += numbers;
    if (includeSpecialCharacter) validChars += specialChars;

    // enforce upper limit
    const maxLength = 20;
    const finalLength = Math.min(Number(passwordLength) || 0, maxLength);

    let generatedPassword = "";
    for (let i = 0; i < finalLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="pt-8 text-white font-bold">
      <div className="flex flex-col items-center">
        <div className="w-[350px] p-3">
          {/* Password length input */}
          <div className="mb-4 flex items-center justify-between">
            <label className="font-medium">Password Length:</label>
            <input
              value={passwordLength}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "" || (Number(val) >= 1 && Number(val) <= 20)) {
                  setPasswordLength(val);
                }
              }}
              type="number"
              min="1"
              max="20"
              className="h-8 w-20 bg-white text-black rounded-md text-center appearance-none"
            />
          </div>

          {/* Uppercase switch */}
          <div className="mb-4 flex items-center justify-between">
            <label className="font-medium">Include Uppercase</label>
            <ReactSwitch
              checked={includeUpperCase}
              onChange={() => setIncludeUpperCase(!includeUpperCase)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>

          {/* Numbers switch */}
          <div className="mb-4 flex items-center justify-between">
            <label className="font-medium">Include Numbers</label>
            <ReactSwitch
              checked={includeNumber}
              onChange={() => setIncludeNumber(!includeNumber)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>

          {/* Special characters switch */}
          <div className="mb-4 flex items-center justify-between">
            <label className="font-medium">Include Special Characters</label>
            <ReactSwitch
              checked={includeSpecialCharacter}
              onChange={() =>
                setIncludeSpecialCharacter(!includeSpecialCharacter)
              }
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>

          {/* Generate button */}
          <button
            onClick={generatePassword}
            disabled={!passwordLength}
            className="bg-gradient-to-r from-green-400 to-blue-500 disabled:opacity-50 text-white font-bold py-2 px-4 rounded-md w-full mt-4 shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Generate Password
          </button>
        </div>

        {/* Show generated password */}
        {password && <h2 className="mt-4 text-lg">{password}</h2>}
      </div>
    </div>
  );
};

export default PasswordGenerator;
