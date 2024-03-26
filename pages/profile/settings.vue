<template>
  <div>
    <div class="wrapper">
      <h1 class="wrapper_h1">{{ $t("home.profile.Profile settings") }}</h1>
      <div class="main"  :key="index">
        <div class="main_div">
          <h2>{{ $t("home.profile.personal information") }}</h2>
          <div class="main_section">
            <img v-if="(!form.image)" src="../../assets/profile/doira.png" alt="" />
            <img v-else :src="'https://kytabshop.al-raqam.com/' + form.image" alt="" />
          </div>
          <div class="main_image">
            <label  for="myfile">Select a image</label>
            <input type="file" @change="fileUplaod" style="display: none;" id="myfile" >
          </div>
        </div>
        <div>
          <img  v-show="content == null"  style="margin:31px 0px 0px 540px; display:none " src="../../assets/profile/Vector.png" alt="">
            <form :class="{'content' : content==1}" @click="content = 1"  class="form" >
                <div class="d-flex">  
                    <div class="mt-1">
                         <label for="email" class="form-label" >{{ $t("home.profile.first name last name") }}</label>
                         <input v-model="form.full_name" type="text" class="form-control form_input " id="full_name" placeholder="Enter name" name="full_name" >
      
                      </div>
                     <div style="margin:0px 0px 0px 20px" class="mt-1">
                          <label for="email" class="form-label">{{ $t("home.profile.Date of birth") }} </label>
                         <input v-model="form.birth_date" type="date" class="form-control form_input" id="date" placeholder="Enter date" name="birth_date">
                      </div>
                </div>
                <div class="d-flex">  
                    <div class="mt-1">
                         <label for="text" class="form-label">{{ $t("home.profile.Phone number") }}</label>
                         <input v-model="form.phone" type="text" class="form-control form_input " id="email" placeholder="Telefon raqam" name="phone">
                      </div>
                     <div style="margin:0px 0px 0px 20px" class="mt-1">
                          <label for="text" class="form-label">{{$t("home.profile.sex")}}</label>
                          <!-- <input v-model="form.gender" type="text" class="form-control form_input" id="email" placeholder="Jinsi" name="gender"> -->
                          <select v-model="form.gender" class="form-select form-control form_input" id="sel1" name="sellist1">
                            <option>male</option>
                            <option>female</option>
                          </select>
                      </div>
                </div>
                <div class="mt-1">
                    <label for="text" class="form-label">Email</label>
                    <input v-model="form.email" type="text" class="form-control" id="email" placeholder="email" name="email">
                </div>
                <div class="mt-1">
                    <label for="text" class="form-label">{{ $t("home.profile.Address") }}</label>
                    <input v-model="form.address" type="text" class="form-control" id="email" placeholder="Manzil" name="address">
                </div>
                <div v-show="content == 1" class="mt-3 button" >
                    <button>{{ $t("home.profile.Cancellation") }}</button>
                    <button type="button" @click="send" >{{ $t("home.profile.Save changes") }}</button>
                </div>
            </form> 
           <!-- <pre>{{ store?.settings }}</pre> -->
        </div>
      </div>
      <div>
        <form class="form_password" action="">
            <div class="form_password_flex">
                <h1>{{ $t("home.profile.change password") }}</h1>
                 <img style="height:22px;width:22px;margin-right:20px"  src="../../assets/profile/Vector.png" alt="">

            </div>
            <div :class="{'template' : template==1}" @click="template = 1" class="d-flex" style="justify-content:space-around">  
                <div class="mt-1">
                    <label for="email" class="label">{{ $t("home.profile.Current password") }}</label>
                    <input v-model="forms.old_password" type="text" class="form-control input " id="email" placeholder="Joriy parol" name="old_pasword">
                </div>
                <div style="margin:0px 0px 0px 0px" class="mt-1">
                    <label for="email" class="label">{{ $t("home.profile.New Password") }}</label>
                    <input v-model="forms.new_password" type="text" class="form-control input" id="email" placeholder="yangi parol" name="new_password">
                </div>
                <div class="mt-1" >
                    <label for="email" class="label">{{ $t("home.profile.New Password") }}</label>
                    <input v-model="forms.confirm_new_password" type="text" class="form-control input " id="email" placeholder="yangi parol" name="confirm_password">
                </div>
            </div>
            <div v-show="template == 1" class="mt-3 button" style="margin:0px 25px 0px 0px" >
                <button>{{ $t("home.profile.Cancellation") }}</button>
                <button type="button" @click="Check">{{ $t("home.profile.Save changes") }}</button>
            </div>  
        </form>
      </div>
    </div>
  </div>
</template>     

<script setup>
let form = ref({
  full_name : null,
  phone : null,
  email : "",
  address : "",
  image : null,
  birth_date : "",
  gender :"",
})
let forms = ref({
  old_password : null,
  new_password : null,
  confirm_new_password: null
})

const store = ProfileHistory()
// console.log(store,'salomat');
const content = ref(null)
const template = ref(null)

// console.log(store?.settings,'setting');
const send = async () =>{   
    await store.Settings(form.value);  
}
const Check = async () =>{
  if(forms.value.new_password == forms.value.confirm_new_password){
    console.log('eroro1')
    await store.Password(forms.value);
  }
  else{
    console.log('error');
  }
}
const fileUplaod = async (e) => {
  const form = new FormData();
  form.append('image', e.target.files[0]);
  await store.Images(form)
}

onMounted(()=> {
  store.Setting()
  .then(()=>{
    // form.value.phone = store.settings.phone
    form.value = store.settings
    console.log(store.settings,'store.setting');
  })
})

</script>

<style lang="scss" scoped>
.wrapper {
  width: 920px;
  height: 751px;
  top: 232px;
  left: 479px;
  background-color: #FAFAFA;        
  margin: 40px 121px 171px 30px;
}
.wrapper_h1 {
  width: full;
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
.main_div{
  // background-color: red;
  align-items: center;
  justify-content: center;
  
}
.main_div h2 {
  margin: 18px 10px 20px 0px;
  width: 100%;
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
.main_image{
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: red;
  margin-right: 10px;
}
.main_image label{

  background-color: rgb(92, 92, 226);
  color:white;
  padding:3px;
  border-radius: 3px;;
  align-items: center;
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
  margin: 20px 30px 0px 20px;
  padding:20px
}
.main_section img {
  width: 100%;
  height: 100%;
  top: 379px;
  left: 551px;
  border-radius: 7px;
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
  width: full;
  height: 40px;
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
    background-color:#FFFFFF;
}
</style>