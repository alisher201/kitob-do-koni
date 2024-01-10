<template>
    <div class="d-flex">
      <div class="main">
        <img class="main_img" src="../../assets/register/kytab.png" alt="" />
        <img class="main_imgs" src="../../assets/register/password.png" alt="" />
      </div>
      <div class="container">
        <div>
          <select
            class="section_select border-b-[4px] p-3 hover:border-blue-600 text-body"
            name=""
            id=""
          >
            <option value="">O'zbekcha</option>
            <option value="">Rus</option>
            <option value="">English</option>
            <option value="">Kareys</option>
            <option value="">Japan</option>
          </select>
        </div>
        <div class="wrapper">
          <div class="section_list">
            <h1>Parolni tiklash</h1>
            <h2>
              Tizim kirish va 1280+ kitobga kirish huquqiga ega boʻling
            </h2>
          </div>
          <div v-show="content == 1">
            <form @submit="preventDefault" action="">
                <div class="mb-3 mt-3 list">
                    <label for="tel" class="form-label">Telefon raqam <span>*</span></label>
                    <input type="tel" class="form-control" id="tel" placeholder="+998 00 000 00 00" name="tel"/>
                </div>
                     <button @click.prevent="preventRefresh" :class="{'content': content == 2}" @click="content = 2">Davom etish</button>
                <div class="bottom">
                     <h2>Avval ro'yhatdan o'tganmisiz? <NuxtLink to="/">Ro'yxatdan o'tish</NuxtLink> </h2>
                </div>    
              
             </form>
          </div>
          <div v-show="content == 2">
            <form @submit="preventDefault" action="">
                <div class="mb-3 mt-3 list">
                    <label for="email" class="form-label">Tasdiqlash kodi: <span>+998 97 589 53 69 </span>  telefon raqamga yu bordik</label>
                    <input type="email" class="form-control" id="email" placeholder="395027" name="email"/>
                    <label for=""><img src="../../assets/register/i.png" alt="" style="margin-right:10px">SMS kodi kelmadi. <a href="">.Qayta yuboring</a></label>
                </div>
                    <button @click.prevent="preventRefresh" :class="{'content': content == 3}" @click="content = 3" >Davom etish</button>
                <div class="bottom">
                <h2>Avval ro'yhatdan o'tganmisiz? <NuxtLink to="/">Ro'yxatdan o'tish</NuxtLink> </h2>
                </div>    
            </form>
          </div>
        
          <div v-show="content == 3">
                <form  action="">
                    <div class="mb-3 mt-3 list inputbox">
                        <label for="password" class="form-label">Parol <span>*</span></label>
                        <input  type="password" class="form-control" id="password" placeholder="Yangi parol" name="password"/>
                    </div> 
                    <div class="mb-3 mt-3 list inputbox">
                        <label for="password" class="form-label">Parol <span>*</span></label>
                        <input  type="password" class="form-control" id="password" placeholder="yangi parol takrorlan" name="password"/>
                    </div> 
                        <button @click.prevent="preventRefresh">Yangi parolni o'rnatish</button>
                        <div class="bottom">
                        <h2>Avval ro'yhatdan o'tganmisiz? <NuxtLink to="/">Ro'yxatdan o'tish</NuxtLink> </h2>
                    </div>    
                </form>
          </div>
       
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    
  const content = ref(null)
  
  onMounted(() => {
    content.value = 1;
  })


  const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { required, sameAs: sameAs(formData.password) },
  };
});



  const formData = reactive({
  tel: '',
  password: '',
  newPassword: null,
});
  </script>
  
  <style lang="scss" scoped>
  .main {
    width: 55%;
    height: 900px;
    border-radius: 0px, 50px, 50px, 0px;
    background-color: #e2f4ff;
  }
  .main_img {
    width: 169.67px;
    height: 58.48px;
    top: 40px;
    left: 60px;
    border-radius: 146.21px;
    margin: 60px 500px 80px 100px;
  }
  .main_imgs {
    width: 500px;
    height: 500px;
    top: 200px;
    left: 136px;
    margin: 0px 236px 200px 270px;
  }
  
  .section_select {
    width: 130px;
    height: 60px;
    margin: 40px 30px 44px 680px;
    border: none;
  }
  .section_select option{
    font-weight: 600;
    font-size: 16px;
  
  }
  .wrapper {
    // background-color: red;
    width: 70%;
    margin: 0px 0px 0px 60px;
  }
  .section_list h1 {
    width: 227px;
    height: 36px;
    top: 120px;
    left: 832px;
    font-family: Manrope;
    font-size: 26px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #323232;
    margin: 0px 381px 4px 0px;
  }
  .section_list h2 {
    width: 410px;
    height: 19px;
    top: 160px;
    left: 832px;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #a3acb5;
    margin: 0px 0px 30px 0px;
  }
 
  label{
    width: 100%;
    height: 18px;
    top: 471px;
    left: 832px;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color:#323232;
    margin: 20px 0px 10px 0px;
  }
  label span {
    color: #e93c3c;
    font-size: 15px;
    font-weight: 900;
  
  }
  .list{
    margin:0px 0px 30px 0px;
    padding: 0px;
  }
  button{
    width: 100%;
    background-color:#1C5793;
    padding: 10px;
    border:none;
    border-radius: 10px;
    color: white;
  }
  .bottom{
    width: 100%;
    height: 307px;
    top: 752px;
    left: 832px;
    border: 1px;
    margin:20px 0px 0px 0px;
  }
  .bottom h2{
    width: 298px;
    height: 19px;
    top: 770px;
    left: 832px;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.02em;
    text-align: center;
  
    font-family: TT Commons;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-align: center;
    // color: #35363D
  }
  .NuxtLink{
    color: #1C5793;
  }
  </style>