<template>
  <section>
    <div class="container-flex">
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <a class="navbar-brand" href="#">
          <img
            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png"
            width="30"
            height="30"
            alt="logo"
          />
          BootstrapBay
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
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="container">
      <div class="row" style="padding: 25px;">
        <div
          class="col-md-8"
          style="height:30px;background-color:rgb(213, 213, 213)"
        >
          <span>
            <p>
              <b>2 latest update</b> View the lastest covid 19 travel
              restrictions
            </p>
          </span>
        </div>
        <div class="row ">
          <div class=" col-md-8">
            <div class="row ">
              <div class=" col-md-12">
                <div
                  style=" background-color: white; border-style: groove; padding: 20px;"
                >
                  <div class="row no-gutters">
                    <div class="col-lg-6 col-md-6 p-0">
                      <div>
                        Flights
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div
                      class="col-md-3 "
                      data-toggle="modal"
                      data-target="#modalLoginForm"
                      style="border-style: outset;"
                    >
                      <div
                        style="background-color: rgb(255, 255, 255); height: 154px"
                      >
                        <p>Leaving from</p>
                        <p>Leaving</p>
                        <span>Leaving from</span>
                      </div>
                    </div>

                    <div
                      data-toggle="modal"
                      data-target="#modalLoginForm"
                      class=" col-md-3 "
                      style="border-style: outset;"
                    >
                      <div>
                        <p>Going to</p>
                        <p>Leaving</p>
                        <span>Leaving from</span>
                      </div>
                    </div>

                    <div
                      class="col-md-3 "
                      data-toggle="modal"
                      data-target="#modalSubscriptionForm1"
                      style="border-style: outset;"
                    >
                      <div class="">
                        <!-- <button type="button" class="btn btn-info">Info</button> -->
                        <span>Departing on</span>
                        <span>Departing on</span>
                        <hr />
                        <span>Returning on</span>
                        <span>Returning on</span>
                      </div>
                    </div>
                    <div class="col-md-3" style="border-style: outset;">
                      <div class="">
                        <span>Submit</span>
                      </div>
                    </div>
                  </div>
                  <div class="row no-gutters">
                    <div class="col-md-6">
                      <div>
                        <a href="#" style="color: darkcyan"
                          >Return<i class="bi bi-chevron-down"></i></a
                        ><span style="padding: 0px 20px 0px 0px"></span
                        ><a href="#" style="color: darkcyan"
                          >Economy, 1 Audlt<i class="bi bi-chevron-down"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="padding: 10px">
              <div
                class="col-md-3 "
                style="width:100px; height:40px;background-color:red"
              ></div>
              <div
                class="col-md-3"
                style="width:100px; padding-left: 10px; height:40px;background-color:green"
              ></div>
              <div
                class="col-md-3"
                style="width:100px; padding-left: 10px; height:40px;background-color:blue"
              ></div>
              <div
                class="col-md-3"
                style="width:100px; padding-left: 10px; height:40px;background-color:yellow"
              ></div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                src="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?b=1&k=20&m=155439315&s=170667a&w=0&h=N2BzlH2GYabhWN0LXZTqTkVODuTb8qDAESQYCPzIig8="
                height=""
                width=""
              />
              <!-- </div> -->
            </div>
            <!-- <div class="icon-box" style="background-image: url(assets/img/slide/slide-1.jpg);"> -->
          </div>
        </div>
        <!-- modal for location-->
        <div
          class="modal fade"
          id="modalLoginForm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">
                  Select Deperture City
                </h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body mx-3">
                <div class="md-form mb-5">
                  <input
                    type="text"
                    v-model="uname"
                    @input="getUser"
                    id="defaultForm-email"
                    class="form-control validate"
                  />

                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                    >Leaving from
                  </label>
                </div>

                <div class="md-form mb-4">
                  <input
                    type="text"
                    v-model="uname"
                    @input="getUser"
                    id="defaultForm-email"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-pass"
                    >Going to</label
                  >
                </div>
                <div>
                  <!-- Filter by input text to only show the matching results -->

                  <div v-for="user in users">
                    <div v-if="users.length > 0">
                      <div class="p-2" :key="user.id">
                        <p @click="setState(user)">
                          {{ user.city }} - {{ user.name }}
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

        <!-- modal for date -->
        <div
          class="modal fade"
          id="modalSubscriptionForm1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Select Date</h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body mx-3">
                <div class="md-form mb-5">
                  <HotelDatePicker />
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
    </div>
  </section>
</template>
<script>
import axios from "axios";
import HotelDatePicker from "vue-hotel-datepicker";
import "vue-hotel-datepicker/dist/vueHotelDatepicker.css";

export default {
  components: {
    HotelDatePicker
  },

  data: function() {
    return {
      uname: "",
      users: {},
      selected: {}
    };
  },
  methods: {
    getUser() {
      console.log(this.uname);
      axios
        .get(
          "https://api.sharetrip.net/api/v1/flight/search/airport?name=" +
            this.uname
        )
        .then(res => {
          console.log(res.data);
          this.users = res.data.response;
        })
        .catch(err => {
          console.log(err);
        });
    },
    setState(user) {
      console.log(user);
      this.uname = user.name;
      console.log(user.name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
