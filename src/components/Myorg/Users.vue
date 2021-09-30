<template>
  <div class="container ">
    <div
      class="row"
      style="padding: 13px 18px 13px 0px ;
    font-size: 22px;
    font-weight: 500;"
    >
      Users
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
        <tr>
          <th scope="row">1</th>
          <td>Asha</td>
          <td>user77@cpt15.ai</td>
          <td>+1 650-555-1234</td>
          <td style="text-align: center;">
            <span class="material-icons icons"> visibility </span
            ><span class="material-icons icons"> add_circle_outline </span
            ><span class="material-icons icons">
              remove_circle_outline
            </span>
            <span class="material-icons icons">
              border_color
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
.icons {
  color: #20a8d8;
  padding: 5px;
  font-size: 15px;
}
thead {
  text-align: center;
  background-color: #20a8d8;
  color: white;
}
input {
  width: 100%;
  border: white;
  margin-top: 2px;
}
</style>
