<template>
  <div class="container ">
    <div class=" d-flex align-items-center justify-content-between">
      <div
        style="padding: 13px 18px 13px 0px ;
    font-size: 22px;
    font-weight: 500;"
      >
        Users
        <h style="color:grey"> - {{ userList.length }}</h>
      </div>
      <div class=" d-flex align-items-center">
        <button class="btn btn-outline-primary d-flex align-items-center">
          <span class="material-icons">
            add
          </span>
          <div>Upload Users</div>
        </button>
        <button class="btn btn-outline-primary d-flex align-items-center">
          <span class="material-icons">
            add
          </span>
          <div>Add Users</div>
        </button>
      </div>
    </div>

    <!-- user details -->
    <div class="container">
      <div class="col-4 searchbar d-flex align-items-center ">
        <div class="options">
          <select id="ViewBy">
            <option value="user_name">Name</option>
            <option value="user_id">Email</option>
            <option value="phone">Phone number</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search"
          v-model="searchbyname"
          v-on:keyup="searchquery"
          style="padding:0 15px 0 5px"
        />
        <!-- <span
          class="material-icons searchIcon d-flex align-items-center"
          v-on:click="searchquery"
        >
          search
        </span> -->
      </div>

      <!-- content -->
      <div class="container">
        <div class="col-12">
          <div class=" row ">
            <div
              class="col-4"
              v-for="(item, i) in userList"
              v-bind:key="item.id"
            >
              <div
                class=" contentContainer "
                @click="displayUserDetails(i, item)"
              >
                <div
                  class="d-flex align-items-center contentBanner p-1 mb-1 justify-content-between"
                  style="color:white"
                >
                  <div class="d-flex">
                    <b>#</b>{{ i + 1 }} &nbsp;
                    <b>
                      {{ item.user_name }}
                    </b>
                  </div>
                  <div class="d-flex align-items-center ">
                    <span
                      class="material-icons bannerIcons d-flex align-items-center"
                    >
                      add
                    </span>
                    <span
                      class="material-icons bannerIcons d-flex align-items-center"
                    >
                      remove
                    </span>
                    <span
                      class="material-icons bannerIcons d-flex align-items-centers"
                    >
                      border_color
                    </span>
                  </div>
                </div>
                <div class="container " style="padding-left:10px">
                  <div class="oneLineDetails">
                    <div style="padding-right:20px">
                      <b style="color:#038ad8">Email: </b> &nbsp;
                      {{ item.user_id }}
                    </div>
                    <div>
                      <b style="color:#038ad8">Phone no: </b> &nbsp;
                      {{ item.phone }}
                    </div>
                  </div>
                  <div
                    v-if="userDetailsDropdown === i"
                    class="d-flex col-12"
                    style="margin-top:10px"
                  >
                    <div class="col-6">
                      <div class="userDetailslisting">
                        <b style="color:#038ad8">
                          <i class="fa-solid fa-flag fa-lg icolor"></i>
                          &nbsp; Role </b
                        >&nbsp;
                        <div>User</div>
                      </div>
                      <div class="userDetailslisting">
                        <b style="color:#038ad8">
                          <i class="fa-solid fa-user fa-lg icolor"></i>
                          &nbsp; Customer </b
                        >&nbsp;
                        <div class="value">{{ user.client_name }}</div>
                      </div>
                      <div style="margin-top:10px">
                        <b style="color:#038ad8">
                          <i class="fa-solid fa-location-dot fa-lg icolor"></i>
                          &nbsp; Address
                        </b>
                        <div class="value">{{ user.address1 }} ,</div>
                        <div class="value">{{ user.address2 }} ,</div>
                        <div class="value">{{ user.city }} ,</div>
                        <div class="value">{{ user.state }} ,</div>
                        <div class="value">{{ user.country }} ,</div>
                        <div class="value">{{ user.zip }}</div>
                      </div>
                    </div>

                    <div>
                      <div class="userDetailslisting">
                        <b style="color:#038ad8">
                          <i class="fa-solid fa-filter"></i>
                          &nbsp; Number of Filters </b
                        >&nbsp;
                        <div>0</div>
                      </div>
                      <div class="userDetailslisting">
                        <b style="color:#038ad8">
                          <i class="fa-solid fa-filter"></i>
                          &nbsp; Number of Filter Graphs </b
                        >&nbsp;
                        <div class="value">0</div>
                      </div>

                      <div class="userDetailslisting">
                        <b style="color:#038ad8">
                          <i class="fa-brands fa-gg"></i>
                          &nbsp; Number of Workflows </b
                        >&nbsp;
                        <div>0</div>
                      </div>
                      <div class="userDetailslisting">
                        <b style="color:#038ad8">
                          <i class="fa-brands fa-gg-circle"></i>
                          &nbsp; Number of Workflow Groups </b
                        >&nbsp;
                        <div class="value">0</div>
                      </div>

                      <div class="userDetailslisting">
                        <b style="color:#038ad8">
                          <i class="fa-solid fa-user fa-lg icolor"></i>
                          &nbsp; Added By </b
                        >&nbsp;
                        <div>{{ user.created_by }}</div>
                      </div>
                      <div class="userDetailslisting">
                        <b style="color:#038ad8">
                          <i class="fa-solid fa-calendar-alt"></i>
                          &nbsp; Added On </b
                        >&nbsp;
                        <div class="value">
                          {{ time_convert(user.updated_at) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
  data() {
    return {
      userList: '',
      user: '',
      idToken: '',
      time: '',
      searchFilter: 'Search by name',
      userDetailsDropdown: '',
      searchbyname: '',
      filterName: '',
      copyUserList: '',
    };
  },
  mounted() {
    axios
      .post('https://cpapitest2.akrimanager.akridataeng.com/api/LoginUser', {
        username: 'admin1@cpt15.ai',
        password: 'Akridata@123',
      })
      .then((response) => {
        this.idToken = response.data.idToken;
        console.log(response.data.idToken);

        axios
          .post(
            'https://cpapitest2.akrimanager.akridataeng.com/api/SearchUsers',
            {
              currentpage: 0,
              filters: {},
              maxperpage: 25,
              user_group_types  : ['CUSTOMER USER']            },
            {
              headers: {
                Authorization: this.idToken,
              },
            }
          )
          .then((response1) => {
            console.log(response1.data.output);
            let dataArr=response1.data.output;
            
            this.userList = dataArr
            this.copyUserList = dataArr
          })
          .catch((error) => {
            console.log(error);
          });
      });
  },
  methods: {
    time_convert(timestamp) {
      this.time = moment(timestamp).format('MMMM DD, YYYY, hh:mm:ss A');
      return this.time;
    },
    userDetails(item) {
      this.user = item;
    },

    displayUserDetails(i, item) {
      this.user = item;
      let containerSelector = document.querySelectorAll('.contentContainer');
      let oneLineDetails = document.querySelectorAll('.oneLineDetails');

      containerSelector.forEach((e, index) => {
        if(i===index)
        e.classList.toggle('highlightContainer') 
        if (i !== index) {e.parentElement.classList.remove('col-8');
        e.classList.remove('highlightContainer') }
      });
      oneLineDetails.forEach((e, index) => {
        if (i !== index) e.classList.remove('d-flex');
      });

      containerSelector[i].parentElement.classList.toggle('col-8');
      oneLineDetails[i].classList.toggle('d-flex');
      if (this.userDetailsDropdown !== i) {
        this.userDetailsDropdown = i;
      } else {
        this.userDetailsDropdown = '';
      }
    },

    searchquery() {
      this.userDetailsDropdown="";
      let containerSelector = document.querySelectorAll('.contentContainer');
      let oneLineDetails = document.querySelectorAll('.oneLineDetails');

      containerSelector.forEach((e) => {
      e.parentElement.classList.remove('col-8');
      e.classList.remove('highlightContainer')
      });
      oneLineDetails.forEach((e) => {
      e.classList.remove('d-flex');
      });

            let e = document.getElementById('ViewBy');
      this.filterName = e.value;
      if (this.searchbyname) {
        this.userList = this.copyUserList.filter((item) => {
          return item[this.filterName]
            .toLowerCase()
            .includes(this.searchbyname.toLowerCase());
        });
      } else this.userList = this.copyUserList;

      console.log(this.userList);
    },
  },
};
</script>

<style>
button {
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  width: auto;
  margin: 5px;
  border-color: #038ad8 !important;
  color: #038ad8 !important;
}
.btn-outline-primary:hover {
  color: #fff !important;
  background-color: #038ad8;
  border-color: #038ad8;
}
thead {
  text-align: center;
  background-color: #038ad8;
  color: white;
}
tbody {
  vertical-align: baseline !important;
}
input {
  width: 100%;
  border: white;
  margin-top: 2px;
}

/*searchbar*/
.searchbar {
  border: 0.5px solid #bdc3c7 !important;
  box-sizing: border-box;
  border-radius: 20.5px;
  padding: 5px;
}

select {
  background-color: #e0e0e0;
  border: 0.5px solid #e0e0e0;
  border-radius: 20.5px;
  padding: 5px;
  z-index: 1;
  margin-right: 5px;
}

option {
  background-color: white;
}

.searchIcon {
  color: #038ad8;
  background-color: white;
  border: 0.5px solid #038ad8;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
}

.searchIcon:hover {
  background-color: #038ad8;
  color: white;
}

/* content */
.bannerIcons {
  color: white;
  padding: 5px;
  margin: 5px;
  font-size: 15px;
  border: 0.5px solid white;
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
.bannerIcons:hover {
  color: #038ad8;
  background-color: white;
  border-color: #038ad8;
}

.contentContainer {
  background: #ffffff;
  border: 1px solid #ecf0f1;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);

  height: auto;
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
}

.container {
  padding: 0;
}

.highlightContainer{
  border: 1.8px solid #ffc107;
  }

.contentBanner {
  background-color: #038ad8;
  border-radius: 5px;
  padding: 2px 10px 2px 10px !important;
}

.userDetailslisting {
  display: flex;
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
}
</style>
