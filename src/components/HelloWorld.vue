<template>
 <div>
 
  <div class="container-flex">
    <div id="booking" class="section">
        <div class="section-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="booking-cta">
                            <h1>Book your flight today</h1>
                           
                        </div>
                    </div>
                    <div class="col-md-8 ">
                        <div class="booking-form">
                            <form>
                                <div class="form-group">
                                    <div class="form-checkbox">
                                        <label for="roundtrip">
                                            <input type="radio" id="roundtrip" name="flight-type">
                                            <span></span>Roundtrip
                                        </label>
                                        <label for="one-way">
                                            <input type="radio" id="one-way" name="flight-type">
                                            <span></span>One way
                                        </label>
                                        <label for="multi-city">
                                            <input type="radio" id="multi-city" name="flight-type">
                                            <span></span>Multi-City
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Flying from</span>

                                            <span data-toggle="modal" data-target="#modalLoginForm"
                                                class="form-control" type="text" placeholder="City or airport">
                                            {{ iata }} 
                                            {{ city }} </span>
                                             </input>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Flying to</span>
                                            <span data-toggle="modal" data-target="#modalLoginForm"
                                                class="form-control" type="text" placeholder="City or airport">   {{ iata1 }} 
                                           {{ city1 }} </span>
                                               
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Departing</span>
                                            <span data-toggle="modal" data-target="#modalSubscriptionForm1"
                                                class="form-control"  required> {{ dates.in }}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <span class="form-label">Returning</span>
                                            <span data-toggle="modal" data-target="#modalSubscriptionForm1"
                                                class="form-control"  required> 
                                           {{ dates.out }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <span class="form-label">Adults </span>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                            <span class="select-arrow"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <span class="form-label">Children (0-17)</span>
                                            <select class="form-control">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                            <span class="select-arrow"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <span class="form-label">Travel class</span>
                                            <select class="form-control">
                                                <option>Economy class</option>
                                                <option>Business class</option>
                                                <option>First class</option>
                                            </select>
                                            <span class="select-arrow"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-btn">
                                    <button  @click="getWeather()"class="submit-btn">Show flights</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    

   <!-- weather data -->
   <div class="container-flex">
   <div class="row"> 
    <div class="col-md-6">
    <section class="" style="background-color: rgb(242, 242, 242)">
      <div class="container py-5 ">
        <div class="row d-flex justify-content-left align-items-center h-100">
          <div class="row">
            <div class="wrapper">
              <div class="typing-demo">Weather data in <b>{{cityName}}</b></div>
            </div>
            <br />
            <!-- hello -->
            <div class="row">
              <div class="col-md-4">
              
              </div>
            </div>

            <!-- card1 -->
            <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                  <div class="d-flex">
                    <p class="flex-grow-1">Morning</p>               
                  </div>
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                      {{temp1}}
                    </p>          
                    <span class="small" style="color: #868b94"></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}% </span>
                      </div>   
                    </div>
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                        width="30px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- card2 -->
              <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                  <div class="d-flex">
                    <p class="flex-grow-1">Afternoon</p>               
                  </div>
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                     {{temp2}}
                    </p>          
                    <span class="small" style="color: #868b94"></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                        width="30px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- card3 -->
               <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                  <div class="d-flex">
                    <p class="flex-grow-1">Evening</p>               
                  </div>
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                       {{temp3}}
                    </p>          
                    <span class="small" style="color: #868b94"></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                        width="30px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- card4 -->
            <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                  <div class="d-flex">
                    <p class="flex-grow-1">Overnight</p>               
                  </div>
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                      {{temp4}}
                    </p>          
                    <span class="small" style="color: #868b94"></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                        width="30px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
 
    <div class="col-md-6"> 
     <div class="container-flex">
    <section class="" style="background-color: rgb(242, 242, 242)">
      <div class="container py-5 ">
        <div class="row d-flex justify-content-left align-items-center h-100">
          <div class="row">
            <div class="wrapper">
              <div class="typing-demo">Weather data in <b>{{cityName}}</b></div>
            </div>
            <br />
            <!-- hello -->
            <div class="row">
              <div class="col-md-4">
              
              </div>
            </div>

            <!-- card1 -->
            <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                  <div class="d-flex">
                    <p class="flex-grow-1">Morning</p>               
                  </div>
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                      {{temp1}}
                    </p>          
                    <span class="small" style="color: #868b94"></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}% </span>
                      </div>   
                    </div>
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                        width="30px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- card2 -->
              <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                  <div class="d-flex">
                    <p class="flex-grow-1">Afternoon</p>               
                  </div>
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                     {{temp2}}
                    </p>          
                    <span class="small" style="color: #868b94"></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                        width="30px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- card3 -->
               <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                  <div class="d-flex">
                    <p class="flex-grow-1">Evening</p>               
                  </div>
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                       {{temp3}}
                    </p>          
                    <span class="small" style="color: #868b94"></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                        width="30px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- card4 -->
            <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                  <div class="d-flex">
                    <p class="flex-grow-1">Overnight</p>               
                  </div>
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                      {{temp4}}
                    </p>          
                    <span class="small" style="color: #868b94"></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                        width="30px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
   </div>
   </div>
     
    <!-- modal return go -->
    <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">
                        Select Deperture City
                    </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3">
                    <div class="md-form mb-5">
                        <input type="text" v-model="leaveName" @input="getUser" id="defaultForm-email"
                            class="form-control validate" />

                        <label data-error="wrong" data-success="right" for="defaultForm-email">Leaving from
                        </label>
                    </div>

                    <div class="md-form mb-4">
                        <input type="text" v-model="destinationName" @input="getDestination" id="defaultForm-email"
                            class="form-control validate" />
                        <label data-error="wrong" data-success="right" for="defaultForm-pass">Going to</label>
                    </div>
                    <div>
                        <!-- Filter by input text to only show the matching results -->

                        <div v-for="leave in leaves">
                            <div v-if="leaves.length > 0">
                                <div class="p-2" :key="leave.id">
                                    <p @click="setState(leave)">
                                        {{ leave.city }} - {{ leave.name }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-for="destination in destinations">
                            <div v-if="destinations.length > 0">
                                <div class="p-2" :key="destination.id">
                                    <p @click="setDestination(destination)">
                                        {{ destination.city1 }} - {{ destination.name }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="btn btn-default">Select</button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal date -->
    <div class="modal fade" id="modalSubscriptionForm1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Select Date</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3">
                    <div class="md-form mb-5">
                       
                        <HotelDatePicker @check-in-changed="checkIn" @check-out-changed="checkOut" />
                        <h3>CheckIn:</h3>
                        <pre>{{ dates.in }}</pre>
                        <h3>CheckOut:</h3>
                        <pre>{{ dates.out }}</pre>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="btn btn-indigo">
                        Send <i class="fas fa-paper-plane-o ml-1"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>


 </div>
</template>
<script>
import axios from "axios";
import HotelDatePicker from "vue-hotel-datepicker";
import "vue-hotel-datepicker/dist/vueHotelDatepicker.css";
var startDate;
var endDate;
var t1=0;
var ta1=0;
var t2=0;
var ta2=0;
var t3=0;
var ta3=0;
var t4=0;
var ta4=0;
export default {
  components: {
    HotelDatePicker
  },

  data: function() {
    return {
      chanceOfRain: "",
      leaveName: "",
      destinationName: "",
      cityName: "China",
      city: "Dhaka",
      city1: "China",
      iata: "DAC",
      iata1: "DEX",
      hours: "",
      temp1:"13.05",
      temp2:"15.01",
      temp3:"12.04",
      temp4:"10.07",
      leaves: [],
      destinations: [],
      dates: {
        in: '2022-01-07',
        out: '2022-01-08'
      }
    };
  },
  methods: {
    getUser() {
      console.log(this.leaveName);
      axios
        .get(
          "https://api.sharetrip.net/api/v1/flight/search/airport?name=" +
            this.leaveName
        )
        .then(res => {
          console.log(res.data);
          this.leaves = res.data.response;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getDestination() {
      axios
        .get(
          "https://api.sharetrip.net/api/v1/flight/search/airport?name=" +
            this.destinationName
        )
        .then(res => {
          console.log(res.data);
          this.destinations = res.data.response;
        })
        .catch(err => {
          console.log(err);
        });
    },
    setState(leave) {
      console.log(leave);
      this.leaveName = leave.name;
      this.city = leave.city;
      this.iata = leave.iata;
      console.log(leave.name);
      this.leaves = [];
    },
    setDestination(destination) {
      console.log(destination);
      this.destinationName = destination.name;
      this.city1 = destination.city;
      this.iata1= destination.iata;
      console.log(destination.name);
      this.destinations = [];
    },
    checkIn(val) {
      this.dates.in = val.toString().slice(4, 16);
      console.log(val.toString().slice(4, 16));
    },
    checkOut(val) {
      this.dates.out = val.toString().slice(4, 16);
      console.log(endDate);
    },
    getWeather(){
      axios
        .get(
           "http://api.weatherapi.com/v1/forecast.json?key=eb7d27b37d204bbbb2241423213112&q=" +
          this.city1 +
          "&dt=" +
          this.dates.out         
           
        )
        .then(res => {
          // console.log(res.data.forecast.forecastday[0].hour[0].cloud);
          this.hours = res.data.forecast.forecastday[0].hour;
          this.chanceOfRain = res.data.forecast.forecastday[0].day.daily_chance_of_rain;
          console.log('rain'+this.chanceOfRain);
         // console.log(this.hours);
          this.weather = res.data;
          this.cityName = res.data.location.name;
        for (var i = 0; i < 24; i++) {
        if (i >= 0 && i < 6) {
         // console.log(this.hours[i].temp_c);
        t1 = t1+ this.hours[i].temp_c;     
      }
        else if (i >= 6 && i < 12) {
          t2 = t2+ this.hours[i].temp_c; 
        
      } else if (i >= 12 && i < 18) {
        t3 = t3+ this.hours[i].temp_c;  
      } else if (i >= 18 && i < 24) {
       t4 = t4+ this.hours[i].temp_c;  
      } 
      }
      this.temp1 = (t1/6).toFixed(2); 
      this.temp2 = (t2/6).toFixed(2);
      this.temp3 = (t3/6).toFixed(2);
      this.temp4 = (t4/6).toFixed(2); 
      console.log(this.temp1);
        
        }
        )
        .catch(err => {
          console.log(err);
        });

   
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.section {
  padding-top: 40px;
  padding-bottom: 100px;
}

#booking {
  font-family: "Lato", sans-serif;
  background-image: url("https://i.ibb.co/kKQkC6M/background.jpg");
  background-size: cover;
  background-position: center;
  color: #191a1e;
}

.booking-form {
  position: relative;
  background: #fff;
  
  width: 100%;
  margin: auto;
  padding: 45px 25px 25px 25px;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
}

.booking-form .form-group {
  position: relative;
  margin-bottom: 20px;
}

.booking-form .form-control {
  background-color: #fff;
  height: 65px;
  padding: 0px 15px;
  padding-top: 24px;
  color: #191a1e;
  border: 2px solid #dfe5e9;
  font-size: 16px;
  font-weight: 700;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 4px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.booking-form .form-control::-webkit-input-placeholder {
  color: #dfe5e9;
}

.booking-form .form-control:-ms-input-placeholder {
  color: #dfe5e9;
}

.booking-form .form-control::placeholder {
  color: #dfe5e9;
}

.booking-form .form-control:focus {
  background: #f9fafb;
}

.booking-form input[type="date"].form-control:invalid {
  color: #dfe5e9;
}

.booking-form select.form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.booking-form select.form-control + .select-arrow {
  position: absolute;
  right: 6px;
  bottom: 6px;
  width: 32px;
  line-height: 32px;
  height: 32px;
  text-align: center;
  pointer-events: none;
  color: #dfe5e9;
  font-size: 14px;
}

.booking-form select.form-control + .select-arrow:after {
  content: "\279C";
  display: block;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.booking-form .form-label {
  position: absolute;
  top: 6px;
  left: 20px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 24px;
  height: 24px;
  font-size: 12px;
  color: #98c9ee;
}

.booking-form .form-checkbox input {
  position: absolute !important;
  margin-left: -9999px !important;
  visibility: hidden !important;
}

.booking-form .form-checkbox label {
  position: relative;
  padding-top: 4px;
  padding-left: 30px;
  font-weight: 700;
  color: #191a1e;
}

.booking-form .form-checkbox label + label {
  margin-left: 15px;
}

.booking-form .form-checkbox input + span {
  position: absolute;
  left: 2px;
  top: 4px;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid #dfe5e9;
  border-radius: 50%;
}

.booking-form .form-checkbox input + span:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  background-color: #4fa3e3;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.booking-form .form-checkbox input:not(:checked) + span:after {
  opacity: 0;
}

.booking-form .form-checkbox input:checked + span:after {
  opacity: 1;
  width: 10px;
  height: 10px;
}

.booking-form .submit-btn {
  color: #fff;
  background-color: #4fa3e3;
  font-weight: 400;
  height: 65px;
  font-size: 18px;
  border: none;
  width: 100%;
  border-radius: 4px;
  text-transform: uppercase;
}

.booking-cta {
  margin-top: 45px;
}

.booking-cta h1 {
  font-size: 52px;
  text-transform: uppercase;
  color: #4fa3e3;
  font-weight: 400;
}

.booking-cta p {
  font-size: 22px;
  color: #191a1e;
}
</style>
