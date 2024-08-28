import { useState } from "react";

const Home = () => {
  const [number, setNumber] = useState('');
  const [boxes, setBoxes] = useState({});
  const [usedNumbers, setUsedNumbers] = useState([]);

  const handleGenerate = () => {
    const num = parseInt(number, 10);
    if (!isNaN(num) && num > 0) {
      const initialBoxes = Array.from({ length: num }, (_, index) => ({
        id: index + 1,
        value: index + 1, // Initial value is the box number
      }));
      setBoxes(initialBoxes.reduce((acc, box) => {
        acc[box.id] = box;
        return acc;
      }, {}));
      setUsedNumbers([]);
    } else {
      setBoxes({});
    }
  };

  const handleClickBox = (boxId) => {
    const num = parseInt(number, 10);
    if (!isNaN(num) && num > 0) {
      let newRandomNumber;
      do {
        newRandomNumber = Math.floor(Math.random() * num) + 1;
      } while (usedNumbers.includes(newRandomNumber)); // Ensure the number is not already used

      setUsedNumbers([...usedNumbers, newRandomNumber]);

      // Update the specific box value
      setBoxes(prevBoxes => ({
        ...prevBoxes,
        [boxId]: {
          ...prevBoxes[boxId],
          value: newRandomNumber,
        }
      }));
    }
  };

  return (
    <>
      <div className='flex items-center flex-col justify-center min-h-screen from-white-200 via-white-400 to-white-600 bg-gradient-to-br'>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleGenerate}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Generate
          </button>
        </div>

        {Object.keys(boxes).length > 0 && (
          <div className="flex flex-row gap-2 mt-4">
            {Object.values(boxes).map((box) => (
              <div
                key={box.id}
                onClick={() => handleClickBox(box.id)}
                className="w-32 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
              >
                <p className="text-white text-xl font-semibold">
                  {box.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
