<template>
  <section>
  <body>
    <div id="booking" class="section">
        <div class="section-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="booking-cta">
                            <h1>Book your flight today</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam at
                            </p>
                        </div>
                    </div>
                    <div class="col-md-7 col-md-offset-1">
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

</body>
  </section>
</template>
<script>
import axios from "axios";
import HotelDatePicker from "vue-hotel-datepicker";
import "vue-hotel-datepicker/dist/vueHotelDatepicker.css";
var startDate;
var endDate;
export default {
  components: {
    HotelDatePicker
  },

  data: function() {
    return {
      leaveName: "",
      destinationName: "",
      city: "",
      city1: "",
      iata: "",
      iata1: "",

      leaves: [],
      destinations: [],
      dates: {
        in: null,
        out: null
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
          console.log(res.data);
          this.weather = res.data;
        })
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
  position: relative;
  height: 100vh;
}

.section .section-center {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
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
  max-width: 642px;
  width: 100%;
  margin: auto;
  padding: 45px 25px 25px;
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
