//   import { fontWeight } from "@mui/system";
import "./weather.css"

function Weather2(props) {
  const { datas } = props;
  console.log(datas);
  



                 const iconUrl =
                 "http://openweathermap.org/img/wn/" +
                 `${datas.cod != 404 ? datas.weather[0].icon : null}`+
                 ".png";
  return (
    <div>
        {datas.cod != 404 ? (
             <div>              
              <div className="portion_1">
                  <span>{datas.name}, {datas.sys.country}. Weather</span>
            
              
                  <h5>As of : {new Date().toLocaleTimeString()}</h5>
            
              </div>
              
              

            
              <div className="portion_2">
                <div >
                <img src={iconUrl} alt="icon"/> 
                
                </div>
            
                  <h1 >
                  
                    {Math.floor(datas.main.temp - 273.15)}
                    <sup>o</sup>
                    c
                  </h1>
                  <span
                    style={{
                        margin:"0.8rem 0",
                        fontWeight:"bold",
                      
                    }}
                  >{datas.weather[0].description}</span>
                
            
              </div>
      
       
              <div className="section2">
              <table>
                  <div className="desk">
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>
                    <span>{Math.floor((datas.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Wind Direction</h4>
                  </td>
                  <td>
                    <span>
                      {datas.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>

                </div>


                <div className="desk">
                <tr>
                  <td>
                    <h4>Sunrise</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(datas.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunset</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(datas.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                </div>
              </table>
            </div> 
            </div>

        ) : (<h1>{datas.message}</h1>)}
     
    </div>
  );
}

export default Weather2;
