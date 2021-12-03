import React, { useState, useEffect } from "react";
import Weather2 from "./Weather2";

const Weather = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("karachi");
  const [err,setErr] = useState("")
  const [apiWeather,setapiWeather] = useState([])

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2`
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [search]);

  console.log(data);

  



  const getVAl = (e) => {
      let a = e.target.value
      setSearch(a)

  }

console.log(apiWeather  )


const btnFn = () => {
    setapiWeather({data:data})
      setErr("Enter location")

      if(search === "" ) {
          alert("Enter Location & UPdate deFAult location")
          setSearch("karachi")
      }

    //   alert("Enter Location & UPdate deFAult location")
    //   setSearch("karachi")
    // if(search === ""){
    //     alert("Enter Location")
    //     setSearch("karachi")
    // }

}



console.log(apiWeather.data)









  return (
    <div className="weathe_main">
      <div className="in_btn"> 
      <input
        type="text "
        placeholder="Search"
        value={search}
        onChange={(e) => {
          getVAl(e);
        }}
      />
      <button onClick={btnFn}>+</button>
      </div>




      {apiWeather.data !== undefined ? (
          <div>
             
              <Weather2 
                   datas={apiWeather.data}
                   
              />
          </div>
      )
      :(null)

      }

    </div>
  );
};

export default Weather;
