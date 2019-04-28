import React from 'react';

const DisplayCityInfo = (props) => {
  const {name, capital, region, population, currencies, languages, flag} = props.cityData
  
  return (
    <div className="col-md-6 table-condensed">
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th scope="row">Capital City</th>
            <td>{capital}</td>
          </tr>
          <tr>
            <th scope="row">Region</th>
            <td>{region}</td>
          </tr>
          <tr>
            <th scope="row">Population</th>
            <td>{population}</td>
          </tr>
          <tr>
            <th scope="row">Currencies</th>
            <td>
              {currencies.map((cur,index) => {
                if(index === currencies.length-1){
                  return <span key={index}>{cur.name} </span>
                }
                return <span key={index}>{cur.name}, </span>
              })}
            </td>
          </tr>
          <tr>
            <th scope="row">Languages</th>
            <td>
            {languages.map((lang,index) => {
              if(index === languages.length-1){
                return <span key={index}>{lang.name} </span>
              }
              return <span key={index}>{lang.name}, </span>
            })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}



export default DisplayCityInfo;