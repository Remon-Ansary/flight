<template>
 <div>
 <div class="container-flex">
      <nav class="navbar navbar-light bg-light navbar-expand-lg">
        <a class="navbar-brand" href="#">
          <img
            src="https://i.ibb.co/xGgQ3dP/flight.png"
            width="100"
            height="30"
            alt="logo"
          />
          Flight  <i class="fas fa-paper-plane-o ml-1"></i>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-6"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbar-list-6"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Offer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="#">Marco Polo Club</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  <div class="container-flex">
    <div id="booking" class="section">
    <div class="row">
  <div class="col-md-12"> 
  <p style="text-align:left; padding-left:80px"> <b> <i class="fas fa-info-circle"></i> 2 latest update </b>View the latest Covid-19 restrictions and quarentine reqirements and more</p>
  </div>
  </div>
  <br/>
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
                                                class="form-control" type="text" placeholder="City or airport">   <span> {{ iata1 }} </span>
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
                                    <button  @click="getWeather()"class="submit-btn">Show flights <i class="fas fa-paper-plane-o ml-1"></i></button>
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
   <br>
   <div class="container-flex">
   <div class="row">
    <div style="text-align:left;padding-left:30px;" class="col-md-6">
    <h5 > <b>Select departing flight:</b></h5>
    From <b> <i class="fas fa-arrow-right"> </i> {{city}}</b> to <b> <i class="fas fa-arrow-right"> </i> {{city1}}</b>
  <span> <i class="fas fa-calendar-week"></i> {{dates.out}}</span>
    </div>
    <div class="col-md-6">
    </div>
   </div>
   <br>
   <div class="row"> 
   
     <div class="col-md-6">
    <section class="" style="background-color: rgb(242, 242, 242)">
      <div class="container py-5 ">
        <div class="row d-flex justify-content-left align-items-center h-100">
          <div class="row">
            <div class="wrapper">
              <div class="typing-demo"><b>{{dates.in}}</b>  Forecast For  <b>{{city}}</b><b>, {{iata}}</b></div>
            </div>
            <br />
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
                 
                  
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                     <p class="flex-grow-1">Morning</p> 
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                      {{temp12}}&deg;
                    </p>          
                       <span class="small" > <img
                        src="https://i.ibb.co/FbVyxTV/weather-icon-png-2.png"
                        width="40px"
                      /></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}% </span>
                      </div>   
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            <!-- card2 -->
              <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                      <p class="flex-grow-1">Afternoon</p> 
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                     {{temp22}}&deg;
                    </p>          
                        <span class="small" > <img
                        src="https://i.ibb.co/FbVyxTV/weather-icon-png-2.png"
                        width="40px"
                      /></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- card3 -->
               <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                  
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <p class="flex-grow-1">Evening</p>  
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                       {{temp32}}&deg;
                    </p>          
                      <span class="small" > <img
                        src="https://i.ibb.co/FbVyxTV/weather-icon-png-2.png"
                        width="40px"
                      /></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- card4 -->
            <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">                             
                
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                   <p class="flex-grow-1">Overnight</p> 
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                      {{temp42}}&deg;
                    </p>          
                       <span class="small" > <img
                        src="https://i.ibb.co/FbVyxTV/weather-icon-png-2.png"
                        width="40px"
                      /></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                  
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
    <section class="" style="background-color: rgb(242, 242, 242)">
      <div class="container py-5 ">
        <div class="row d-flex justify-content-left align-items-center h-100">
          <div class="row">
            <div class="wrapper">
              <div class="typing-demo"><b>{{dates.out}}</b>  Forecast For  <b>{{city1}}</b><b>, {{iata1}}</b></div>
            </div>
            <br />
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
                 
                  
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                     <p class="flex-grow-1">Morning</p> 
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                      {{temp1}}&deg;
                    </p>          
                       <span class="small" > <img
                        src="https://i.ibb.co/FbVyxTV/weather-icon-png-2.png"
                        width="40px"
                      /></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}% </span>
                      </div>   
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            <!-- card2 -->
              <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                      <p class="flex-grow-1">Afternoon</p> 
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                     {{temp2}}&deg;
                    </p>          
                        <span class="small" > <img
                        src="https://i.ibb.co/FbVyxTV/weather-icon-png-2.png"
                        width="40px"
                      /></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- card3 -->
               <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                  
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <p class="flex-grow-1">Evening</p>  
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                       {{temp3}}&deg;
                    </p>          
                      <span class="small" > <img
                        src="https://i.ibb.co/FbVyxTV/weather-icon-png-2.png"
                        width="40px"
                      /></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- card4 -->
            <div class="col-md-3  pb-2">
              <div class="card" style="color: #000000; border-radius: 30px">
                <div class="card-body ">
                
                                 
                
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                   <p class="flex-grow-1">Overnight</p> 
                    <p
                      class="display-8 mb-0 font-weight-bold "
                      style="color: #1c2331"
                    >
                      {{temp4}}&deg;
                    </p>          
                       <span class="small" > <img
                        src="https://i.ibb.co/FbVyxTV/weather-icon-png-2.png"
                        width="40px"
                      /></span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem">          
                      <div>
                        <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                        <span class="ms-1"> {{chanceOfRain}}%  </span>
                      </div>   
                    </div>
                    <div>
                  
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
     
    <!-- modal return go -->
    <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">
                        Select Departure City
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
                    <button class="btn btn-secondary"  data-dismiss="modal" >Select <i class="fas fa-paper-plane-o ml-1"></i></button>
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
                     <br/><br/>
                        <h5>Departure date: {{ dates.in }}</h5>
                    
                        <h5>Arrival date: {{ dates.out }}</h5>
                      
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="btn btn-secondary" data-dismiss="modal">
                        Select <i class="fas fa-paper-plane-o ml-1"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
<!--json part-->
<br>
<div class="row">
<div class="col-md-6">
<div class="row">

<div style="padding-left:30px" class="col-md-3">
<h6>Sort By:</h6>
</div>
<div class="col-md-3">
<u>Recommended</u>
</div>
<div class="col-md-3">
<p>Departure Time</p>
</div>
<div class="col-md-3">
<p>Arrival time</p>
</div>
</div>
</div>
</div>
<div class="row">
<p style="padding-left:30px"><b>3</b>  Flights Found &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:green">Filter <i class="fas fa-caret-down"></i></span>  </p>
</div>
<div class="container-flex">
<div class="row">
<div class="col-md-6">
    <div class="row ">
    </div>
    <div class="row ">
      <div class="col-md-4" style="text-align: center">
        <div class="row ">
          <div class=" col-md-6">
             
          </div>
        </div>
        <div class="row ">
          <div class="col-md-6" >
            <div >  
            
              <span></span><br>
              <span>{{flightdata.time1.start}} <br>
              <span>{{iata}} <i class="fas fa-plane"></i></span>
              </span>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class=" col-md-6" >
            <div >        
            
              <span></span><br>
             <span>{{flightdata.time1.start}} </i><br>
              <span>{{  iata}}<i class="fas fa-plane"></i></span>
              </span>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-6">
            <div>
             
              <span></span><br>
             <span>{{flightdata.time1.start}} </i><br>
              <span>{{  iata}}<i class="fas fa-plane"></i></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    <div class="col-md-4" style="text-align: center">
        <div class="row ">
          <div class=" col-md-6">
             
          </div>
        </div>
        <div class="row ">
          <div class="col-md-6" >
            <div >  
            
              <span></span><br>
              <span>{{flightdata.time1.end}} </i><br>
              <span><i class="fas fa-plane"></i>{{  iata1}}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class=" col-md-6" >
            <div >        
            
              <span></span><br>
             <span>{{flightdata.time1.end}} </i><br>
              <span> <i class="fas fa-plane"></i>{{  iata1}}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-6">
            <div>

              <span></span><br>
             <span>{{flightdata.time1.end}} </i><br>
              <span> <i class="fas fa-plane"></i>{{  iata1}}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
       <div class="col-md-4" style="text-align: center">
        <div class="row ">
          <div class=" col-md-6">
             
          </div>
        </div>
        <div class="row ">
          <div class="col-md-6" >
            <div >  
            
              <span></span><br>
              <span>{{flightdata.flightnumber}} </i><br>
              
              </span>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class=" col-md-6" >
            <div >        
            
              <br><br>
             <span>{{flightdata.flightnumber}} </i><br>
            
              </span>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-6">
            <div>

             <br><br><br>
             <span>{{flightdata.flightnumber}} </i><br>
             
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

<div class="col-md-6">
    <div class="row ">
      <div class="col-md-6" style="text-align: center">
        <div class="row ">
          <div class="col-md-12" style="background-color:rgb(37, 115, 187)">
              <span>Economy</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12" style="border-bottom-style: solid; border-bottom-color: black">
            <div>
              <span>From</span><br>
              <span>{{flightdata.premium.price1}}</span><br>
              <span >View fare   <i class="fas fa-caret-down"></i></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12" style="border-bottom-style: solid; border-bottom-color: black">
            <div>
           
              <span>From</span><br>
              <span>{{flightdata.premium.price2}}</span><br>
              <span>View fare  <i class="fas fa-caret-down"></i></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12" style="border-bottom-style: solid; border-bottom-color: black">
            <div>     
              <span>From</span><br>
              <span>{{flightdata.premium.price3}}</span><br>
              <span>View fare  <i class="fas fa-caret-down"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6" style="text-align: center">
        <div class="row ">
          <div class="col-md-12" style="background-color:LightCoral">
              <span >Premium Economy</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12" style="border-bottom-style: solid; border-bottom-color: black;">
            <div>    
              <span>From</span><br>
              <span>{{flightdata.economy.price1}}</span><br>
              <span>View fare  <i class="fas fa-caret-down"></i> </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12" style="border-bottom-style: solid; border-color: black">
            <div>       
              <span >From</span><br>
              <span>{{flightdata.economy.price2}}</span><br>
              <span>View fare  <i class="fas fa-caret-down"></i></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12" style="border-bottom-style: solid; border-bottom-color: black">
            <div>
              <span >From</span><br>
              <span>{{flightdata.economy.price3}}</span><br>
              <span>View fare  <i class="fas fa-caret-down"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>





</div>
<div>
</div>
<div>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<footer class="footer_area section_padding_130_0">
      <div class="container">
        <div class="row">
          <!-- Single Widget-->
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="single-footer-widget section_padding_0_130">
              <!-- Footer Logo-->
              <div class="footer-logo mb-3"></div>
              <h1>Flight</h1>
              <!-- Copywrite Text-->
              <div class="copywrite-text mb-5">
               
              </div>
              <!-- Footer Social Area-->
              <div class="footer_social_area"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i class="fa fa-pinterest"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype"><i class="fa fa-skype"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></div>
            </div>
          </div>
          <!-- Single Widget-->
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              <!-- Widget Title-->
              <h5 class="widget-title">About</h5>
              <!-- Footer Menu-->
              <div class="footer_menu">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Corporate Sale</a></li>
                  <li><a href="#">Terms &amp; Policy</a></li>
                  <li><a href="#">Community</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Single Widget-->
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              <!-- Widget Title-->
              <h5 class="widget-title">Support</h5>
              <!-- Footer Menu-->
              <div class="footer_menu">
                <ul>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Term &amp; Conditions</a></li>
                  <li><a href="#">Help &amp; Support</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Single Widget-->
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              <!-- Widget Title-->
              <h5 class="widget-title">Contact</h5>
              <!-- Footer Menu-->
              <div class="footer_menu">
                <ul>
                  <li><a href="#">Call Centre</a></li>
                  <li><a href="#">Email Us</a></li>
                  <li><a href="#">Term &amp; Conditions</a></li>
                  <li><a href="#">Help Center</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer></div>
</div>
 </div>
</template>
<script>
import axios from "axios";
import HotelDatePicker from "vue-hotel-datepicker";
import "vue-hotel-datepicker/dist/vueHotelDatepicker.css";
import flightdata from "./flightdata.json";
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
var t12=0;
var t22=0;
var t32=0;
var t42=0;


export default {
  components: {
    HotelDatePicker
  },

  data: function() {
    return {
      flightdata: flightdata,
      chanceOfRain: "0",
      leaveName: "",
      destinationName: "",
      cityName: "Dhaka",
      city: "Departure",
      city1: "Destination",
      iata: "Select",
      iata1: "Select",
      hours: "",
      temp1:"0",
      temp2:"0",
      temp3:"0",
      temp4:"0",
      temp12:"0",
      temp22:"0",
      temp32:"0",
      temp42:"0",
      leaves: [],
      destinations: [],
      dates: {
        in: 'Select Date',
        out: 'Select Date'
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
      var options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {q: this.city1, days: '14', dt: this.dates.out},
  headers: {
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    'x-rapidapi-key': '9b2bc1d5edmsheaa734db28b42abp1bafd8jsn9d1a768758f9'
  }
};

axios.request(options)
        .then(res => {
          // console.log(res.data.forecast.forecastday[0].hour[0].cloud);
          this.hours = res.data.forecast.forecastday[0].hour;
          this.chanceOfRain = res.data.forecast.forecastday[0].day.daily_chance_of_rain;
          console.log('rain'+this.chanceOfRain);
    
          this.weather = res.data;
          this.cityName = res.data.location.name;
        for (var i = 0; i < 24; i++) {
        if (i >= 0 && i < 6) {
       
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

   

       var options2 = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {q: this.city, days: '14', dt: this.dates.in},
  headers: {
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    'x-rapidapi-key': '9b2bc1d5edmsheaa734db28b42abp1bafd8jsn9d1a768758f9'
  }
};

axios.request(options2)
        .then(res => {
          // console.log(res.data.forecast.forecastday[0].hour[0].cloud);
          this.hours2 = res.data.forecast.forecastday[0].hour;
          this.chanceOfRain2 = res.data.forecast.forecastday[0].day.daily_chance_of_rain;
          console.log('rain'+this.chanceOfRain);
         // console.log(this.hours);
          this.weather2 = res.data;
          this.cityName2 = res.data.location.name;
        for (var i = 0; i < 24; i++) {
        if (i >= 0 && i < 6) {
   
        t12 = t1+ this.hours2[i].temp_c;     
      }
        else if (i >= 6 && i < 12) {
          t22 = t2+ this.hours2[i].temp_c; 
        
      } else if (i >= 12 && i < 18) {
        t32 = t3+ this.hours2[i].temp_c;  
      } else if (i >= 18 && i < 24) {
       t42 = t4+ this.hours2[i].temp_c;  
      } 
      }
      this.temp12 = (t12/6).toFixed(2); 
      this.temp22 = (t22/6).toFixed(2);
      this.temp32 = (t32/6).toFixed(2);
      this.temp42 = (t42/6).toFixed(2); 
      console.log(this.temp12);
        
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

body{margin-top:20px;}
.footer_area {
    position: relative;
    z-index: 1;
    overflow: hidden;
webkit-box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);
    box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);
    padding:60px;
}
.footer_area .row {
    margin-left: -25px;
    margin-right: -25px;
}

.single-footer-widget {
    position: relative;
    z-index: 1;
}
.single-footer-widget .copywrite-text a {
    color: #747794;
    font-size: 1rem;
}
.single-footer-widget .copywrite-text a:hover,
.single-footer-widget .copywrite-text a:focus {
    color: #3f43fd;
}
.single-footer-widget .widget-title {
    margin-bottom: 1.5rem;
}
.single-footer-widget .footer_menu li a {
    color: #747794;
    margin-bottom: 1rem;
    display: block;
    font-size: 1rem;
}
.single-footer-widget .footer_menu li a:hover,
.single-footer-widget .footer_menu li a:focus {
    color: #3f43fd;
}
.single-footer-widget .footer_menu li:last-child a {
    margin-bottom: 0;
}

.footer_social_area {
    position: relative;
    z-index: 1;
}
.footer_social_area a {
    border-radius: 50%;
    height: 40px;
    text-align: center;
    width: 40px;
    display: inline-block;
    background-color: #f5f5ff;
    line-height: 40px;
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-right: 10px;
}
.footer_social_area a i {
    line-height: 36px;
}
.footer_social_area a:hover,
.footer_social_area a:focus {
    color: #ffffff;
}

@-webkit-keyframes bi-cycle {
    0% {
        left: 0;
    }
    100% {
        left: 100%;
    }
}

@keyframes bi-cycle {
    0% {
        left: 0;
    }
    100% {
        left: 100%;
    }
}
ol li, ul li {
    list-style: none;
}

ol, ul {
    margin: 0;
    padding: 0;
}

</style>
