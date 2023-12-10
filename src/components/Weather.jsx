import React, { useEffect, useState } from 'react';

const Weather = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=9ce1d6aeb5a043b95a0211b56f133162');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
        <div>
          <h1>{data}</h1>
        </div>
  );

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h1>{data.main}</h1>
//           <p>{data.body}</p>
//         </div>
//       )}
//     </div>
//   );

    // return (
    //   <div>
    //     <h2>Enter your location</h2>
    //     <input type="text" /> <button>Submit</button>
    //   </div>
    // );
};

export default Weather;
