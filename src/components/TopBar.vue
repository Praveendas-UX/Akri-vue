<template>
  <div class="topBar d-flex justify-content-between align-items-center">
    <img src="../assets/logo.png" alt="AkriLogo" class="logo" />
    <div class="d-flex align-items-center" style="color: #f3f3f3">
      <span class="material-icons" style="font-size: 29px ">
        account_circle
      </span>
      <div
        class="d-flex  align-items-center"
        style="font-size: 13px; font-weight: 700; text-align: center; margin: 10px"
      >
        Anita Admin
        <span
          class="material-icons"
          style="font-size: 17px; padding: 8px 0px; margin: 5px"
        >
          arrow_drop_down
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.topBar {
  background-color: #038ad8;
  position: fixed;
  z-index: 1020;
  width: 100%;
  height: 55px;
  padding: 1%;
}
.logo {
  width: 150px;
  height: 25px;
  margin-top: 5px;
  opacity: 0.7;
}
</style>
