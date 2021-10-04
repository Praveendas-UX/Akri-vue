<template>
  <div class="container ">
    <div class=" d-flex align-items-center justify-content-between">
      <div
        style="padding: 13px 18px 13px 0px ;
    font-size: 22px;
    font-weight: 500;"
      >
        Users
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

    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            Name <br />
            <input type="text" />
          </th>
          <th scope="col">
            Email ID <br />
            <input type="text" />
          </th>
          <th scope="col">
            Phone Number <br />
            <input type="text" />
          </th>
          <th scope="col">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userList" v-bind:key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.user_name }}</td>
          <td>{{ item.user_id }}</td>
          <td>{{ item.phone }}</td>
          <td style="text-align: center;" class="d-flex justify-content-center">
            <span
              class="material-icons icons btn btn-outline-primary d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              title="View Details"
              @click="userDetails(item)"
            >
              visibility
            </span>
            <span
              class="material-icons icons btn btn-outline-primary d-flex align-items-center"
            >
              add
            </span>
            <span
              class="material-icons icons btn btn-outline-primary d-flex align-items-center"
            >
              remove
            </span>
            <span
              class="material-icons icons btn btn-outline-primary d-flex align-items-centers"
            >
              border_color
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- user details modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog  m-0 float-right modal-lg popupsize">
      <div class="modal-content" style="height : 100% ;">
        <div class="modal-header modal-view-head">
          <div class="col-md-12">
            <div class="row">
              <div class=" col-md-10 col-10 p-0">
                <h4 clas="modal-title">
                  <i class="fa-solid fa-file text-primary m-r-l-10"></i>
                  <b> {{ user.user_name }} </b>
                </h4>
              </div>
              <div class=" col-md-2 col-2 p-0">
                <span class="close" data-bs-dismiss="modal">
                  <i class="fa-solid fa-xmark m-r-l-10"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body ">
          <div class="view">
            <div class="row">
              <div class="col-md-6">
                <label>
                  <i class="fa-solid fa-envelope fa-lg icolor"></i>
                  &nbsp; Email ID
                </label>
                <div class="value">{{ user.user_id }}</div>
              </div>

              <div class="col-md-6 smt10">
                <label>
                  <i class="fa-solid fa-phone fa-lg icolor"></i>
                  &nbsp; Phone Number
                </label>
                <div class="value">{{ user.phone }}</div>
              </div>
            </div>

            <div class=" row m-t-20">
              <div class="col-md-6">
                <label>
                  <i class="fa-solid fa-flag fa-lg icolor"></i>
                  &nbsp; Role
                </label>
                <div class="value">Operator</div>
              </div>

              <div class="col-md-6 smt10">
                <label>
                  <i class="fa-solid fa-user fa-lg icolor"></i>
                  &nbsp; Customer
                </label>
                <div class="value">{{ user.client_name }}</div>
              </div>
            </div>

            <div class=" row m-t-20">
              <div class="col md-12">
                <label>
                  <i class="fa-solid fa-location-dot fa-lg icolor"></i>
                  &nbsp; Address
                </label>
                <div class="value">{{ user.address1 }} ,</div>
                <div class="value">{{ user.address2 }} ,</div>
                <div class="value">{{ user.city }} ,</div>
                <div class="value">{{ user.state }} ,</div>
                <div class="value">{{ user.country }} ,</div>
                <div class="value">{{ user.zip }}</div>
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
    };
  },
  mounted() {
    console.log('iagbdcixjk');
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
              user_group_type: 'CUSTOMER USER',
            },
            {
              headers: {
                Authorization: this.idToken,
              },
            }
          )
          .then((response1) => {
            console.log(response1.data.output);
            this.userList = response1.data.output;
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
  },
};
</script>
<style>
.icons {
  color: #20a8d8;
  padding: 5px;
  margin: 5px;
  font-size: 15px;
  border-color: #20a8d8;
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
button {
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  width: auto;
  margin: 5px;
}
thead {
  text-align: center;
  background-color: #20a8d8;
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

/* modal */
.btn-outline-primary:hover {
  color: #fff;
  background-color: #20a8d8;
  border-color: #20a8d8;
}
.w-5 {
  width: 5%;
}
.w20 {
  width: 20%;
}
.w15 {
  width: 15%;
}
.w25 {
  width: 25%;
}
.w17 {
  width: 17%;
}
.p-10 {
  padding: 10px;
}
.ins {
  text-align: center;
}
.p-r-10 {
  padding-right: 10px;
}
.modal-title {
  font-size: 30px;
}
.header-icon {
  color: #20a8d8;
  display: inline-block;
  margin-right: 5px;
  font-size: 20px;
  /* background-color: #20a8d8; */
}
.modal-header {
  background-color: #c3efff;
}
.modal-body .fa-solid {
  color: grey;
}

/* .operator_head {
  color: #0174b1;
  font-size: 0.975rem;
  font-weight: 600;
}
.borderbottom{
padding-bottom: 10px !important;
  border-bottom: 1px solid;
  border-bottom-color: rgb(222, 222, 222);
}
.operator_values {
  padding: 10px 15px;
  color: #3c3c3c;
  font-size: 0.975rem;
  font-weight: 600;
}
.m-10{
    margin:0 10px;
}
.m-15-10{
  margin: 15px 10px;

}
.p-l-15{
  padding: 0 0 0 15px;
}
.m-t-10{
  margin:10px 0 0 0;
}
.popupsize{
  width:50%;
  height:100%; 
}
.float-right{
  float: right;
}
.modal-content{
  border:none;  
} */

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1 rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.view label {
  padding-bottom: 7px;
  margin-bottom: 6px;
  width: 100%;
  border-bottom: 1px solid #dedede;
  color: #0174b1;
  font-weight: 600;
}

.modal-content {
  border-radius: 0;
  border: none;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  outline: 0;
}

m-0 {
  margin: 0 !important;
}
.float-right {
  float: right !important;
}

.popupsize {
  width: 50%;
  /* height:100%;  */
}

.view {
  padding: 0 7px;
}
.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
}
.icolor {
  color: #949494;
}

.fa-lg {
  font-size: 16px;
  line-height: 0.75em;
  vertical-align: -15%;
}

.value {
  font-weight: 600;
  color: #3c3c3c;
  font-size: 14px;
  word-break: break-all;
}

.m-t-20 {
  margin-top: 20px;
}

.view label {
  padding-bottom: 7px;
  margin-bottom: 6px;
  width: 100%;
  border-bottom: 1px solid #dedede;
  color: #0174b1;
  font-weight: 600;
}

.col-md-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.view {
  padding: 0 7px;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #c8ced3;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
.model-view-head {
  background-color: #c3efff;
  display: block;
}

.col-md-10 {
  flex: 0 0 83.33333333%;
  max-width: 83.33333333%;
}
.modal-title {
  word-break: break-all;
}
.m-r-5 {
  margin-right: 5px;
}

.m-r-l-10 {
  margin-right: 10px;
  margin-left: 10px;
}

.text-primary {
  color: #20a8d8 !important;
}
b,
strong {
  font-weight: bolder;
}
.col-md-2 {
  flex: 0 0 16.66666667%;
  max-width: 16.66666667%;
}

.close {
  float: right;
  font-size: 1.3125rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
.popupsize {
  width: 50%;
  height: 100%;
}
</style>
