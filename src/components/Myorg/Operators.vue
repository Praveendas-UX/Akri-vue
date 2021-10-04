<template>
<div class ="col-md-12">
  <div class ="row">
    <div class ="col-6 p-0">
      <div class ="title-header p-l-0">
        Operators
        <span class ="count">
          <b> {{item_.length}} </b>
        </span>
      </div>
    </div>
    <div class = "col-6 smpl text-left-sm text-right">
    <button class="button-upload btn-sm-mobile btn btn-outline-primary m-r-0 sm0"><i class="fa-solid fa-plus p-5"></i><b>Upload Operators</b></button>
    <button class="button-upload btn-sm-mobile btn btn-outline-primary m-r-0 sm0"><i class="fa-solid fa-plus p-5"></i><b>Add Operators</b></button>
    
    </div>
  </div>

  <div class="tab-content bornome customertable">
    <div class="mobilepad10-left mobilepad10 customertable">
      <div class="table-responsive table-responsive-sm">
        <div class="mobtable p-l-0">
          <table class="table table-bordered"> 
          <thead class = "table-filter">
            <tr>
            <th style="width: 8%;"> # </th>
            <th class="w15" > Name
              <input type="text" class = "form-control form-control-sm searchakriID"> 
            </th>
            <th class ="w20"> Email ID
              <input type= "text" class = "form-control form-control-sm searchname">
              </th>
            <th class ="w20"> Phone Number
              <input type="text" class = "form-control form-control-sm searchakriID">
              </th>
            <th class ="w17" > Details </th>
            <th class ="w25" > Soft Insert / Remove (Demo Only) </th>
            </tr>
          </thead>
          

          <tbody id = "tablediv">
            <tr v-for="item in operatorList" v-bind:key="item.id">
            <td class="text-center" style="width:8% ;">{{item.id}}</td>
            <td class="ellipsistooltip20 w15">{{item.user_name}}</td>
            <td class="ellipsistooltip20 w20">{{item.user_id}}</td>
            <td class="ellipsistooltip20 w20">{{item.phone}}</td>
            <td class ="text-center w17">
               <button
                type="button"
                class="btn btn-outline-primary btn-circle"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                title="View Details"
                v-on:click="viewmethod(item)"
              >
                <i class="fa-regular fa-eye"></i>
              </button>
              <button 
              class= "btn btn-outline-primary btn-circle"
              title= "Edit user" >
              <i class="fa-regular fa-pen-to-square"></i>
              </button>
              </td>
            <td class ="text-center w25">
              <button class="btn btn-outline-primary btn-circle">
                <i class="fab fa-bandcamp"></i>
              </button>
            </td>

            </tr>
          </tbody>
          </table>


              </div>
      </div>
    </div>
  </div>

        








  <!-- <div class="Topend p-10">
    <div class="col-12 p-0 d-flex align-items-center top">
      <div class="col-6 p-0">
        <span>Operators</span>
      </div>
      <div class="col-6 d-flex justify-content-end p-0">
        <button class="btn btn-outline-primary float-right addoperator">+ Add Operator</button>
        <button class="btn btn-outline-primary float-right uploadoperator">+ Upload Operator</button>
      </div>
    </div>

    <div class="col-12">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th class="w-5" scope="col">#</th>
            <th class="w-20" scope="col">
              Name
              <br />
              <input class="filter" />
            </th>
            <th class="w-20" scope="col w-20">
              Email ID
              <br />
              <input class="filter" />
            </th>
            <th class="w-20" scope="col">
              Phone Number
              <br />
              <input class="filter" />
            </th>
            <th class="w-25" scope="col">Details</th>
            <th class="w-15" scope="col">Soft Insert / Remove (Demo only)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in operatorList" v-bind:key="item.id">
            <td class="w-5">{{item.index}}</td>
            <td class="w-20">{{item.user_name}}</td>
            <td class="w-20">{{item.user_id}}</td>
            <td class="w-20">{{item.phone}}</td>
            <td class="ins w-25" style="display:flex w-20">
              <button
                class="edit"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                v-on:click="viewmethod(item)"
              >
                <i class="fa-regular fa-eye"></i>
              </button>
              <button class="edit">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
            </td>
            <td class="ins" scope="row w-15">
              <button class="edit">
                <i class="fab fa-bandcamp"></i>
              </button>.title-header {
    padding: 13px 18px;
    font-size: 22px;
    font-weight: 500;
}
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog  m-0 float-right modal-lg popupsize">
        <div class="modal-content" style= "height : 100% ;" >
          <div class="modal-header modal-view-head" >
            <div class ="col-md-12">
              <div class ="row">
                <div class =" col-md-10 col-10 p-0">
                  <h4 clas= "modal-title">
                    <i class="fa-solid fa-file text-primary m-r-l-10"></i>
                    <b > {{item_.user_name}} </b>
                    </h4>

            <!-- <i class="header-icon fa-solid fa-file"></i>
            <h5 class="modal-title" id="exampleModalLabel">{{item_.user_name}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
          </div>
          <div class =" col-md-2 col-2 p-0">
            <span class= "close" data-bs-dismiss ="modal"> 
              <i class="fa-solid fa-xmark m-r-l-10"></i>
            </span>
            <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
            </div>

          </div>
          </div>
          </div>
          <div class="modal-body ">

            <div class="view">
            <div class = "row">
              <div class = "col-md-6">
                <label>
                  <i class="fa-solid fa-envelope fa-lg icolor"></i>
                   &nbsp; Email ID </label>
                   <div class="value"> {{item_.user_id}} </div>

                   </div>

                  <div  class ="col-md-6 smt10">
                    <label>
                  <i class="fa-solid fa-phone fa-lg icolor"></i>
                   &nbsp; Phone Number </label>
                   <div class="value"> {{item_.phone}} </div>
                    
                     </div>
                   </div>

                   <div class = " row m-t-20">

                     <div class = "col-md-6">
                  <label>
                  <i class="fa-solid fa-flag fa-lg icolor"></i>
                   &nbsp; Role </label>
                   <div class="value"> Operator </div>

                   </div>

                  <div  class ="col-md-6 smt10">
                    <label>
                  <i class="fa-solid fa-user fa-lg icolor"></i>
                   &nbsp; Customer </label>
                   <div class="value"> {{item_.client_name}} </div>
                    
                     </div>
                     
                     
                     </div> 

                     <div class = " row m-t-20">
                       <div class = "col md-12">

                         <label>
                  <i class="fa-solid fa-location-dot fa-lg icolor"></i>
                   &nbsp; Address </label>
                   <div class ="value" > {{item_.address1}} , </div>
                   <div class ="value" > {{item_.address2}} ,</div>
                   <div class ="value" > {{item_.city}} , </div>
                   <div class ="value" > {{item_.state}} ,</div>
                   <div class ="value" > {{item_.country}} ,</div>
                   <div class ="value" > {{item_.zip}} </div>

                       </div>
                       </div>

                  <div class = " row m-t-20">

                     <div class = "col-md-6">
                  <label>
                  <i class="fa-solid fa-user fa-lg icolor"></i>
                   &nbsp; Added By </label>
                   <div class="value"> {{item_.created_by}} </div>

                   </div>

                  <div  class ="col-md-6 smt10">
                    <label>
                  <i class="fa-solid fa-calendar-days fa-lg icolor"></i>
                   &nbsp; Added On </label>
                   <div class="value"> {{time_convert(item_.created_at)}} </div>
                    
                     </div>
                     
                     
                     </div> 


                     <div class = " row m-t-20">

                     <div class = "col-md-6">
                  <label>
                  <i class="fa-solid fa-qrcode fa-lg icolor"></i>
                   &nbsp; QR Code </label>
                   <qrcode-vue bind: value="item_.qr_code" > </qrcode-vue> 

                   </div>

                  <div  class ="col-md-6 smt10">
                    <label>
                  <i class="fa-solid fa-location-dot fa-lg icolor"></i>
                   &nbsp; Location ID </label>
                   <div class="value"> {{item_.location_akri_id}} </div>
                    
                     </div>
                     
                     
                     </div> 

                     <div class = " row m-t-20">

                     <div class = "col-md-6">
                  <label>
                  <i class="fa-solid fa-earth-asia fa-lg icolor"></i>
                   &nbsp; Web Access </label>
                   <div class="value" v-if = "item_.has_web_access"> 
                     Authorized
                   </div>
                   <div class ="value" v-else >
                     Not Authorized

                   </div>

                   </div>
                   </div>


                   </div>



<!--             
            <div class="row m-10">
              <div class="col-6 borderbottom d-flex align-items-center">
                <i class="fa-solid fa-envelope p-r-10"></i>
                <span class="operator_head">Email ID</span>
              </div>
    
                <div class="borderbottom col-6 borderbottom d-flex align-items-center">
                <i class="fa-solid fa-phone p-r-10"></i>
                <span class= "operator_head"> Phone Number </span>
              </div>
              </div.modal-content {
    border-radius: 0;
    border: none;
}div class ="operator_values col-6 "> {{item_.phone}}</div>
                  
                   </div>

              <div class = " row m-15-10"> 
                <div class ="col-6  borderbottom d-flex align-items-center">
                <i class="fa-solid fa-flag p-r-10 "></i>  
                <span class ="operator_head"> Role </span>
              </div>

              <div class ="col-6  borderbottom d-flex align-items-center">
                <i class="fa-solid fa-user p-r-10"></i>
                <span class ="operator_head"> Customer </span>
              </div>

               <div class ="row m-0 p-0">
                  <div class =" operator_values col-6 "> Operator </div>
                  <div class ="operator_values col-6 "> {{item_.client_name}}</div>
                  
                   </div>
            </div>

             <div class = " row m-15-10"> 
                <div class ="col-12  borderbottom d-flex align-items-center ">
                <i class="fa-solid fa-location-dot p-r-10"></i>
                <span class ="operator_head"> Address </span>
              </div>
              <div class="operator_values p-l-15 m-t-10"> {{item_.address1}}</div>
              <div class="operator_values p-l-15 "> {{item_.address2}}</div>
              <div class="operator_values p-l-15"> {{item_.city}}</div>
              <div class="operator_values p-l-15"> {{item_.country}}</div>
              <div class="operator_values p-l-15"> {{item_.zip}}</div>
              </div>

              <div class ="row m-15-10">
                <div class ="col-6  borderbottom d-flex align-items-center">
                <i class="fa-solid fa-user p-r-10"></i>
                <span class ="operator_head"> Added By </span>
              </div>

              <div class ="col-6  borderbottom d-flex align-items-center">
              <i class="fa-solid fa-c
            <div class="row m-10">
              <div class="col-6 borderbottom d-flex align-items-center">
                <i class="fa-solid fa-envelope p-r-10"></i>
                <span class="operator_head">Email ID</span>
              </div>
    
                <div class="borderbottom col-6 borderbottom d-flex align-items-center">
                <i class="fa-solid fa-phone p-r-10"></i>
                <span class= "operator_head"> Phone Number </span>
              </div><div class = " row m-t-20">

                     <div class = "col-md-6">
                  <label>
                  <i class="fa-solid fa-user fa-lg icolor"></i>
                   &nbsp; Added By </label>
                   <div class="value"> {{item_.created_by}} </div>

                   </div>

                  <div  class ="col-md-6 smt10">
                    <label>
                  <i class="fa-solid fa-calendar-days fa-lg icolor"></i>
                   &nbsp; Added On </label>
                   <div class="value"> {{time_convert(item_.created_at)}} </div>
                    {{item_.created_by}}
                     </div>
                     
                     
                     </div> 
                  <div class =" operator_values col-6"> {{item_.user_id}} </div>
                  <div class ="operator_values col-6 "> {{item_.phone}}</div>
                  
                   </div>

              <div class = " row m-15-10"> 
                <div class ="col-6  borderbottom d-flex align-items-center">
                <i class="fa-solid fa-flag p-r-10 "></i>  
                <span class ="operator_head"> Role </span>
              </div>

              <div class ="col-6  borderbottom d-flex align-items-center">
                <i class="fa-solid fa-user p-r-10"></i>
                <span class ="operator_head"> Customer </span>
              </div>

               <div class ="row m-0 p-0">
                  <div class =" operator_values col-6 "> Operator </div>
                  <div class ="operator_values col-6 "> {{item_.client_name}}</div>
                  
                   </div>
            </div>

             <div class = " row m-15-10"> 
                <div class ="col-12  borderbottom d-flex align-items-center ">
                <i class="fa-solid fa-location-dot p-r-10"></i>
                <span class ="operator_head"> Address </span>
              </div>
              <div class="operator_values p-l-15 m-t-10"> {{item_.address1}}</div>
              <div class="operator_values p-l-15 "> {{item_.address2}}</div>
              <div class="operator_values p-l-15"> {{item_.city}}</div>
              <div class="operator_values p-l-15"> {{item_.country}}</div>
              <div class="operator_values p-l-15"> {{item_.zip}}</div>
              </div>

              <div class ="row m-15-10">
                <div class ="col-6  borderbottom d-flex align-items-center">
                <i class="fa-solid fa-user p-r-10"></i>
                <span class ="operator_head"> Added By </span>
              </div>

              <div class ="col-6  borderbottom d-flex align-items-center">
              <i class="fa-solid fa-calendar-days p-r-10"></i>
                <span class ="operator_head"> Added on </span>
              </div>.modal-content {
    border-radius: 0;
    border: none;
}


               <div class ="row m-0 p-0">
                  <div class =" operator_values col-6 "> {{item_.created_by}} </div>
                  <div class ="operator_values col-6 "> {{time_convert(item_.created_at)}}</div>
                  
                   </div>

              </div>

               <div class ="row m-15-10">
                <div class ="col-6  borderbottom d-flex align-items-center">
                <i class="fa-solid fa-qrcode p-r-10"></i>
                <span class ="operator_head"> QR Code </span>
              </div>

              <div class ="col-6  borderbottom d-flex align-items-center">
              <i class="fa-solid fa-location-dot p-r-10"></i>
                <span class ="operator_head"> Location ID </span>
              </div>
              <div class ="row m-0 p-0">
                  <div class =" operator_values col-6 "> 
                   <qrcode-vue bind: value="item_.qr_code" > </qrcode-vue> </div>
                  <div class ="operator_values col-6 f-r "> {{item_.location_akri_id}}</div>
                  
                   </div>


               <div class ="row m-0 p-0">
                  <div class =" operator_values col-6 "> {{item_.created_by}} </div>
                  <div class ="operator_values col-6 "> {{time_convert(item_.created_at)}}</div>
                  
                   </div>

              </div>

               <div class ="row m-15-10">
                <div class ="col-6  borderbottom d-flex align-items-center">
                <i class="fa-solid fa-qrcode p-r-10"></i>
                <span class ="operator_head"> QR Code </span>
              </div>

              <div class ="col-6  borderbottom d-flex align-items-center">
              <i class="fa-solid fa-location-dot p-r-10"></i>
                <span class ="operator_head"> Location ID </span>
              </div>
              <div class ="row m-0 p-0">
                  <div class =" operator_values col-6 "> 
                   <qrcode-vue bind: value="item_.qr_code" > </qrcode-vue> </div>
                  <div class ="operator_values col-6 f-r "> {{item_.location_akri_id}}</div>
                  
                   </div> -->

               </div>

            <!-- <QrcodeVue /> -->


            <!-- <div class="mail-in col-md- d-flex"></div> -->
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>

</template>

//Script starts here


<script>
import axios from "axios";
import moment from "moment";
import QrcodeVue from 'qrcode.vue'
export default {
  data() {
    return {
      viewM: false,
      operatorList: undefined,
      id_token: undefined,
      item_: 0,
      time : undefined
    };
  },

  components:{
     QrcodeVue,
  },
  mounted() {
    
    axios.post("https://cpapitest2.akrimanager.akridataeng.com/api/LoginUser",
{
	username: 'admin1@cpt15.ai',
    password: 'Akridata@123'
} )
.then(response =>{
    this.id_token = response.data.idToken ;

axios.post('https://cpapitest2.akrimanager.akridataeng.com/api/SearchUsers', 
                {
                    "currentpage": 0,
                    "filters": {},
                    "maxperpage": 25,
                    "user_group_type": "CUSTOMER OPERATOR"
                },
                {
                headers : {
                    'Authorization': this.id_token,
                }}).then((response1)=>{
                    this.operatorList= response1.data.output
                    console.log(response1.data.output)
                }).catch((error) => {
                    console.log(error)
                })



    // console.warn(this.id_token);
});


// axios.post('https://cpapitest2.akrimanager.akridataeng.com/api/GetUserCount', 
//                 {
//                     "currentpage": 0,
//                     "filters": {},
//                     "maxperpage": 25,
//                     "user_group_type": "CUSTOMER OPERATOR"
//                 },
//                 {
//                 headers : {
//                     'Authorization': this.id_token,
//                 }}).then((response1)=>{
//                     console.log(response1)
//                 }).catch((error) => {
//                     console.log(error)
//                 })
  },
  methods: {
      time_convert(timestamp){
        // this.time= new Date(timestamp)
        this.time = moment(timestamp).format("MMMM DD, YYYY, hh:mm:ss A")
        return(this.time)
      },

      viewmethod(item){
        this.item_ = item
        
      }
      }
  }
</script>

<style scoped>
/* th {
  background-color: #20a8d8;
  color: white;
  padding: 10px 10px;
}

.filter {
  width: 100%;
}
.Topend {
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
  font-size: 16px;
  padding: 13px 12px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

button.uploadoperator {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: white;
  border-color: #20a8d8;
  cursor: pointer;
  padding: 10px 14px;
  box-sizing: border-box;
  color: #20a8d8;
}
.addoperator {
  text-align: center;
  right: 0;
  background-color: white;
  color: #20a8d8;
}
.edit {
  width: 35px;
  color: #20a8d8;
  cursor: pointer;
  padding: 6px;
  text-align: center;
  font-size: 15px;
  border-color: #20a8d8;
  background-color: white;
  border-radius: 50%;
}
.edit:hover {
  background-color: #20a8d8;
  color: white;
}

.btn {
  font-size: 0.875rem !important;
  font-weight: 600 !important;
}
.btn-outline-primary {
  color: #20a8d8;
  border-color: #20a8d8;
} */
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
.w25{
  width: 25%;
}
.w17{
  width: 17%;
}
.p-10 {
  padding: 10px;
}
.ins {
  text-align: center;
}
.p-r-10{
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

.modal-body{
<<<<<<< HEAD
  position: relative;
  flex: 1 1 auto;
  padding : 1 rem;
=======

  position: relative;
  flex: 1 1 auto;
  padding : 1 rem;

>>>>>>> d30a345ea7eaea42917870969e15255f60e9d272
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
    margin: 0!important;
}
.float-right {
    float: right!important;
}

.popupsize{
  width:50%;
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
    line-height: .75em;
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
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
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
    color: #20a8d8!important;
}
b, strong{
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
    opacity: .5;
}

.title-header {
    padding: 13px 18px;
    font-size: 22px;
    font-weight: 500;
}  

.p-l-0 {
    padding-left: 0!important;
}
.count {
    font-size: 17px;
    color: #9a9a9a;
}

.text-right {
    text-align: right!important;
}
.col-6 {
    flex: 0 0 50%;
    max-width: 50%;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.button-upload {
    padding: 5px;
    margin: 12px 15px;
}
.m-r-0 {
    margin-right: 0!important;
}
.btn-outline-primary {
    border-color: #20a8d8;
    background-image: none;
}

.btn {
    display: inline-block;
    font-weight: 400;
    color :#20a8d8;
    text-align: center;
    vertical-align: middle;
    border: 1px solid;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.p-5 {
    padding: 5px!important;
}

.bornone {
    border: 0 solid #fff!important;
}
.tab-content {
    margin-top: -1px;
    background: #fff;
    border: 1px solid #c8ced3;
}
.mobilepad10-left{
  padding-left: 0!important;
}
.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
.customertable .table {
    margin-bottom: 0!important;
}

.table-filter input {
    margin-bottom: 4px;
}

.form-control {
    border-radius: 0!important;
}

.form-control-sm {
    height: calc(1.5em + .5rem + 2px);
    padding: .25rem .5rem;
    font-size: .765625rem;
    line-height: 1.5;
    border-radius: .2rem;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #5c6873;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #e4e7ea;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
 thead {
  background: #038ad8;
   }  

.table-bordered td {
    border: 1px solid #e4e4e4;
    height: 44px;
} 

.table td, .table th {
    padding: 6px 8px;
}
.customertable tbody {
    max-height: calc(100vh - 295px);
}
.customertable tbody, tbody {
    overflow-y: scroll;
    overflow-x: auto;
}
.ellipsistooltip20, .ellipsistooltip30 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #23282c;
    border-collapse: collapse;
}
.text-center {
    text-align: center!important;
}
/* tbody td, thead th {
    float: left;
} */
.btn-circle, .btn-circle-green, .btn-circle-x {
    padding: 6px 0;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
}
.btn-circle {
    width: 30px;
    height: 30px;
    border-radius: 15px;
}
.table thead th {
    vertical-align: top;
}
/* tbody, td, th, thead, tr, tr:after {
    display: block;
} */



</style>