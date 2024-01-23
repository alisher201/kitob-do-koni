<template>
  <div class="d-flex">
    <div class="main">
      <img class="main_img" src="../../assets/register/kytab.png" alt="" />
      <img class="main_imgs" src="../../assets/register/signup.png" alt="" />
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
          <h1>Ro’yxatdan o’tish</h1>
          <h2>
            Roʻyxatdan oʻting va 1280+ kitobga kirish huquqiga ega boʻling
          </h2>
        </div>
        <!-- <div class="section_flex">
          <div  class="section_check">
            <img src="../../assets/register/Account.png" alt="" />
            <p>Foydalanuvchi</p>
            <input :class="{'content' :content==1}" @click="content = 1" type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked/>
          </div>
          <div class="section_check" >
            <img id="section_check_img"  src="../../assets/register/home.svg" alt=""
            />
            <p>Do'kon</p>
            <input :class="{'content' :content==2}" @click="content = 2" type="radio" class="form-check-input" id="radio2"  name="optradio" value="option2"
            />
          </div>
        </div>
        <div v-show= "content ==1"><RegisterUser /></div>
        <div v-show = "content == 2"><RegisterSHop /></div> -->
        <!-- <div class="title">
          <p>
            Foydalanuvchilar kitoblarni o'qishlari, sotib olishlari va do'stlari
            bilan baham ko'rishlari mumkin
          </p>
        </div> -->
        <Form @submit="onSubmit" action="">
          <div class="mb-3 mt-3 list">
            <label for="email" class="form-label">Ism familiya <span>*</span></label>

            <!-- <input type="email" class="form-control" id="email" placeholder="Ism familiyangizni kiriting" name="email"/> -->
            <Field v-model="userRegister.full_name" name="string" type="string" placeholder="Ism familiyangizni kiriting" class="form-control" :rules="validateEmail"/>
            <ErrorMessage style="color:red" name="full_name" />

            
          </div>
          <div class="mb-3 mt-3 list">
            <label for="email" class="form-label">Telefon raqam <span>*</span></label>
            <!-- <input type="email" class="form-control" id="email" placeholder="+998 00 000 00 00" name="email"/> -->
            <Field v-model="userRegister.phone" type="string" class="form-control" id="number" placeholder="+998 00 000 00 00" name="number" :rules="validateNumber"/>
            <ErrorMessage style="color:red" name="number" />


          </div>
          <div class="mb-3 mt-3 list inputbox">
            <label for="password" class="form-label">Parol <span>*</span></label>
            <box-icon type='solid' name='user-circle'></box-icon>
            
            <!-- <input  type="password" class="form-control" id="password" placeholder="parol o'ylab top" name="password"/> -->
            <Field  v-model="userRegister.password" type="password" class="form-control" id="password" placeholder="parol o'ylab top"  name="password" :rules="validatePassword"/>
            <ErrorMessage style="color:red" name="password" />
            
          </div> 
          <!-- <button  @click.prevent="preventRefresh"  @click="$router.push('/')" >Ro'yxatdan o'tish</button> -->
          <button @click="senDataUser">Ro'yxatdan o'tish</button>
          <div class="bottom">
            <h2>Avval ro'yhatdan o'tganmisiz? <NuxtLink to="/">Tizimga kirish</NuxtLink> </h2>
          </div>    
            
        </Form>
        <!-- <Form @submit="onSubmit">
          <Field name="email" type="email" :rules="validateEmail" />
          <ErrorMessage name="email" />

          <Field name="email" type="email" :rules="validateEmail" />
          <ErrorMessage style="color:red" name="email" />
          <button>Sign up</button>
        </Form> -->
      </div>
    </div>
  </div>
</template>

<script >
import { Form, Field, ErrorMessage } from 'vee-validate';
import {useTestTStore} from '../../store/home'
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    useTestTStore
  },
  data() {
    return {    
      userRegister: {
        full_name: null,
        phone: null,
        password: null
      }

    }
  },
  methods: {
    onSubmit(values) {
      console.log(values, null, 2);
    },
    validateEmail(value) {
      if (!value) {
        return 'ism familyangizni kiritng';
      }
  
      // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      // if (!regex.test(value)) {
      //   return "parol noto'g'ri";
      // }
      // All is good
      // return true;
    },
    validateNumber(value) {
        if(!value){
          return 'telefon raqamni kiritng kiriting'
        }
      },
      validatePassword(value) {
        if(!value){
          return 'Parol kiritng'
        }
      },
      senDataUser() {
        useTestTStore().registerUser(this.userRegister);
        
      }
      
  },
};



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
// .section_flex {
//   display: flex;
//   justify-content: space-between;
// }

.section_check {
  background-color: #fafafa;
  border: 01px solid #a3acb5;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
  width: 290px;
  // justify-content: center;
  margin: 0px 0px 0px 0px;
}
.section_check img {
  width: 50px;
  height: 50px;
  top: 222px;
  left: 852px;
  margin: 13px 0px 0px 0px;
}
.section_check p {
  width: 114px;
  height: 22px;
  top: 224px;
  left: 892px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #323232;
  margin: 0px 40px 0px 0px;
}
.section_check input {
  width: 22px;
  height: 22px;
  top: 228px;
  left: 1062px;
  margin: 0px 12px 0px 0px;
}
#section_check_img {
  width: 30px;
  height: 30px;
  top: 224px;
  left: 1136px;
  margin: 0px 0px 0px 10px;
}
.title {
  width: 100%;
  height: 62px;
  top: 283px;
  left: 832px;
  border-radius: 7px;
  background-color: #e8f7df;
  margin: 20px 60px 30px 0px;
}
.title p {
  width: 550px;
  height: 38px;
  top: 295px;
  left: 847px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #323232;
  margin: 0px 48px 12px 15px;
  padding: 12px;
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