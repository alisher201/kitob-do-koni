<template>
  <div>
    <div class="wrapper">
      <h1 class="wrapper_h1">Profile sozlamalar</h1>
      <div class="main">
        <div class="main_div">
          <h2>Shaxsiy ma’lumotlar</h2>
          <div class="main_section">
            <img src="../../assets/profile/doira.png" alt="" />
            
          </div>
        </div>
        <div>
          <img  v-show="content == null"  style="margin:31px 0px 0px 540px; display:none " src="../../assets/profile/Vector.png" alt="">
            <form :class="{'content' : content==1}" @click="content = 1" action="" class="form">
                <div class="d-flex">  
                    <div class="mt-1">
                         <label for="email" class="form-label">Ism Familiya:</label>
                         <input type="text" class="form-control form_input " id="email" placeholder="Enter name" name="email">
                      </div>
                     <div style="margin:0px 0px 0px 20px" class="mt-1">
                          <label for="email" class="form-label">Tug'ulgan sana </label>
                         <input type="date" class="form-control form_input" id="email" placeholder="Enter date" name="email">
                      </div>
                </div>
                <div class="d-flex">  
                    <div class="mt-1">
                         <label for="text" class="form-label">Telefon raqam</label>
                         <input type="text" class="form-control form_input " id="email" placeholder="Telefon raqam" name="email">
                      </div>
                     <div style="margin:0px 0px 0px 20px" class="mt-1">
                          <label for="text" class="form-label">Jinsi</label>
                          <input type="text" class="form-control form_input" id="email" placeholder="Jinsi" name="email">
                         
                      </div>
                </div>
                <div class="mt-1">
                    <label for="text" class="form-label">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="email" name="email">
                </div>
                <div class="mt-1">
                    <label for="text" class="form-label">Manzil</label>
                    <input type="text" class="form-control" id="email" placeholder="Manzil" name="email">
                </div>
                <div v-show="content == 1" class="mt-3 button" >
                    <button>Bekor qilish</button>
                    <button>O'zgartirishni saqlash</button>
                </div>
            </form> 
           
        </div>
      </div>
      <div>
        <form class="form_password" action="">
            <div class="form_password_flex">
                <h1>Parolni o'zgartirishni</h1>
                 <img style="height:22px;width:22px;margin-right:20px"  src="../../assets/profile/Vector.png" alt="">

            </div>
            <div :class="{'template' : template==1}" @click="template = 1" class="d-flex" style="justify-content:space-around">  
                <div class="mt-1">
                    <label for="email" class="label">Joriy parol</label>
                    <input type="text" class="form-control input " id="email" placeholder="Joriy parol" name="email">
                </div>
                <div style="margin:0px 0px 0px 0px" class="mt-1">
                    <label for="email" class="label">Yangi parol </label>
                    <input type="text" class="form-control input" id="email" placeholder="yangi parol" name="email">
                </div>
                <div class="mt-1" >
                    <label for="email" class="label">Yangi parol</label>
                    <input type="text" class="form-control input " id="email" placeholder="yangi parol" name="email">
                </div>
               
            </div>
            <div v-show="template == 1" class="mt-3 button" style="margin:0px 25px 0px 0px" >
                <button>Bekor qilish</button>
                <button>O'zgartirishni saqlash</button>
            </div>  
          
        </form>
      </div>
    </div>
  </div>
</template>     

<script setup>

const content = ref(null)
const template = ref(null)

</script>

<style lang="scss" scoped>
.wrapper {
  width: 920px;
  height: 751px;
  top: 232px;
  left: 479px;
  background-color: #FAFAFA;        
//   background-color: red;
  margin: 40px 121px 171px 30px;
}
.wrapper_h1 {
  width: 170px;
  height: 44px;
  top: 250px;
  left: 509px;
  font-family: Manrope;
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-align: left;
  margin: 0px 640px 20px 30px;
  padding-top: 18px;
}
.main {
  width: 850px;
  height: 462px;
  top: 297px;
  left: 509px;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 20px 30px 0px 30px;
  display: flex;
}
.main_div h2 {
  margin: 18px 10px 20px 20px;
  width: 161px;
  height: 40px;
  top: 315px;
  left: 529px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #010416;
  padding-top: 18px;
}
.main_section {
  width: 150px;
  height: 150px;
  top: 357px;
  left: 529px;
  border-radius: 7px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 30px 152px 20px;
}
.main_section img {
  width: 106px;
  height: 106px;
  top: 379px;
  left: 551px;
}
.form-label{
  width: 161px;
  height: 40px;
  top: 315px;
  left: 529px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #010416;
  padding-top: 18px;
}
.form_input{
    width: 270px;
    height: 34px;
    top: 379px;
    left: 709px;
    border-radius: 5px;
    // border: 2px solid rgb(62, 106, 209);
    background-color:#FFFFFF;
}
.button{
    display: flex;
    justify-content:flex-end;
}
.button button{
    margin:0px 0px 0px 20px;
    background-color: #F6F6F6;
    border:none;
    border-radius: 5px;
    height: 34px;
    color: #35363D;
}
.button button:hover{
    background-color: #307CCE;
    color:#FFFFFF
}
.form_password{
    width: 850px;
    height: 180px;
    top: 743px;
    left: 509px;
    border-radius: 10px;
    background-color:#FFFFFF;
    // background-color: blue;
    margin: 20px 30px 40px 30px;
}
.form_password h1{
    width: 150px;
    height: 36px;
    top: 761px;
    left: 529px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
    color:#35363D;
    margin:0px 0px 0px 20px;
    padding-top:18px;
}
.form_password_flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.label{
  width: 121px;
  height: 40px;
//   top: 315px;
//   left: 529px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #010416;
  padding-top: 18px;
}
.input{
    width: 234px;
    height: 34px;
    top: 379px;
    left: 709px;
    border-radius: 5px;
    // border: 2px solid rgb(62, 106, 209);
    background-color:#FFFFFF;
}
</style>