<template>
    <div class="d-flex">
      <div class="main">
        <img class="main_img" src="../../assets/register/kytab.png" alt="" />
        <img class="main_imgs" src="../../assets/register/login.png" alt="" />
      </div>
      <div class="container">
        <div>
          <select
            class="section_select  hover:border-blue-600 text-body"
            name=""
            id=""
          >
            <option value="">O'zbekcha</option>
            <option value="">Rus</option>
          </select>
        </div>
        <div class="wrapper">
          <div class="section_list">
            <h1>Tizimga kirish</h1>
            <h2>
              Tizim kirish va 1280+ kitobga kirish huquqiga ega boʻling
            </h2>
          </div>
          <Form @submit="onSubmit">
            <div class="mb-3 mt-3 list">
              <label for="email" class="form-label">Telefon raqam <span>*</span></label>
            
              <!-- <input type="email" class="form-control" id="email" placeholder="+998 00 000 00 00" name="email"/> -->
              <Field v-model="userLogin.phone" type="number" class="form-control" id="email" placeholder="+998 00 000 00 00" name="number" :rules="validateNumber" />
              <ErrorMessage style="color:red" name="number" />
            
            </div>
            <div class="mb-3 mt-3 list inputbox">
              <label for="password" class="form-label">Parol <span>*</span></label>              
              <!-- <input  type="password" class="form-control" id="password" placeholder="parol o'ylab top" name="password"/> -->
              <Field v-model="userLogin.password" name="password" class="form-control" type="password" placeholder="parol 8 ta bo'lsin" :rules="validateEmail" />
              
              <div class="li">
                  <ErrorMessage style="color:red" name="password" />
                    
                    <NuxtLink to="/password" href="">Parolni unutdingizmi?</NuxtLink>
                </div>
            </div> 
            <!-- <button  @click.prevent="preventRefresh"  @click="$router.push('/')">Login</button> -->
              <button>Login</button>
            <div class="bottom">
              <h2>Avval ro'yhatdan o'tganmisiz? <NuxtLink to="/register">Ro'yxatdan o'tish</NuxtLink> </h2>
            </div>    
              
          </Form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
// export default defineNuxtConfig({
//   // ...
//   modules: [
//     //...
//     '@vee-validate/nuxt',
//   ],
//   veeValidate: {
//     // disable or enable auto imports
//     autoImports: true,
//     // Use different names for components
//     componentNames: {
//       Form: 'VeeForm',
//       Field: 'VeeField',
//       FieldArray: 'VeeFieldArray',
//       ErrorMessage: 'VeeErrorMessage',
//     },
//   },
// });

  const content = ref(null)
  
  onMounted(() => {
    content.value = 1;
  })
  
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
    width: 115px;
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
    color: #E93C3C;
    font-size: 19px;
    font-weight: 700;
  
  }
  .list{
    margin:0px 0px 30px 0px;
    padding: 0px;
  }
  .li{
    display: flex;
    justify-content: space-between;
  }
  .li a{
    width: 132px;
    height: 18px;
    top: 557px;
    left: 1248px;
    font-family: Manrope;
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color:#41A2DB;
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