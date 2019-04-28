import axios from 'axios'
import React, { useState, Component } from 'react';
import dotenv from "dotenv";

import Header from '../Header/Header'
import Form from '../Form/Form'
import PhotosContainer from '../PhotosContainer/PhotosContainer'
import DisplayCityInfo from '../DisplayCityInfo/DisplayCityInfo'
import Footer from '../Footer/Footer'

import './App.css'

dotenv.config();

class App extends Component {
  state = { 
    photos: [],
    photosHasLoaded: false,
    infoHasLoaded: false,
    cityData: {},
    searchType: 'country',
    isError: false

 }
 
  getPhotos = async (inputValue) => {
    try{
      const key = process.env.REACT_APP_FLICKR_API_KEY
      const res = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${inputValue}&format=json&nojsoncallback=1`)
      const newData = res.data.photos.photo.sort(() => 0.5 - Math.random());
      const selected = newData.slice(0, 8);
        
      this.setState({ 
        photos: selected,
        photosHasLoaded: true,
        isError: false
      }); 
      this.getCityInfo(this.state.searchType, inputValue);
    } catch (e) {
      console.log("Netwrok Error")
      this.setState({
        isError: true
      })
    }
  }
  getCityInfo = async (searchType, inputValue) => {
    try {
      let cityData = {};
      if(searchType==='capital'){
        cityData = await axios.get(`https://restcountries.eu/rest/v2/capital/${inputValue}`)
      } else if (searchType==='country'){
        cityData = await axios.get(`https://restcountries.eu/rest/v2/name/${inputValue}`)
      }
      
      this.setState({ 
        cityData: cityData.data[0],
        infoHasLoaded: true,
        isError: false

      }); 
    } catch (e) {
      console.log("Not found")
      this.setState({
        isError: true
      })
    }
  }

  handleCountryClick = () => {
    this.setState({
      searchType: 'country'
    })
  }
  
  handleCapitalClick = () => {
    this.setState({
      searchType: 'capital'
    })
  }

  render() { 
    let placeholder = this.state.searchType === 'country' ? 'Enter Country' : 'Enter Capital City'; 
    return ( 
      <div className="container-fluid h-100">
        
        {this.state.photosHasLoaded && !this.state.isError && this.state.infoHasLoaded ?
            null : <Header />
        }
        <Form 
          onButtonClick={this.getPhotos}
          placeholder={placeholder}
          handleCountryClick={this.handleCountryClick}
          handleCapitalClick={this.handleCapitalClick}
          searchType={this.state.searchType}
        />
        <div className="row body-container mt-3">
          {this.state.photosHasLoaded && !this.state.isError && this.state.infoHasLoaded ?
            <DisplayCityInfo cityData = {this.state.cityData} /> : null
          }
          {this.state.photosHasLoaded && !this.state.isError && this.state.infoHasLoaded ?
            <PhotosContainer photos={this.state.photos}/> : null}
          {this.state.isError ? <div>Country not found</div> : null}
        </div>
        <Footer />
      </div>
    );
  }
}


 
export default App;