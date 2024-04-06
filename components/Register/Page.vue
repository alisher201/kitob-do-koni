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
        <Form @submit="onSubmit" action="">
          <div class="mb-3 mt-3 list">
            <label for="name" class="form-label"
              >Ism familiya <span>*</span></label
            >

            <!-- <input type="email" class="form-control" id="email" placeholder="Ism familiyangizni kiriting" name="email"/> -->
            <input
              ref="emailInput"
              v-model="userRegister.full_name"
              name="string"
              type="string"
              placeholder="Ism familiyangizni kiriting"
              class="form-control"
            />
            <span v-if="emailError" style="color: red" name="full_name">{{
              emailError.message
            }}</span>
          </div>
          <div class="mb-3 mt-3 list">
            <label for="email" class="form-label"
              >Telefon raqam <span>*</span></label
            >
            <!-- <input type="email" class="form-control" id="email" placeholder="+998 00 000 00 00" name="email"/> -->
            <input
              ref="emailInput"
              v-model="userRegister.phone"
              type="number"
              class="form-control"
              id="number"
              placeholder="+998 00 000 00 00"
              name="number"
            />
            <span v-if="errorTel" style="color: red">{{
              errorTel.message
            }}</span>
          </div>
          <div class="mb-3 mt-3 list inputbox">
            <label for="password" class="form-label"
              >Parol <span>*</span></label
            >
            <box-icon type="solid" name="user-circle"></box-icon>

            <input
              ref="emailInput"
              v-model="userRegister.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="parol o'ylab top"
              name="password"
            />
            <span v-if="passwordError" style="color: red" name="password">{{
              passwordError.message
            }}</span>
          </div>
          <button type="button" @click="senDataUser">Ro'yxatdan o'tish</button>
          <div class="bottom">
            <h2>
              Avval ro'yhatdan o'tganmisiz?
              <NuxtLink to="/">Tizimga kirish</NuxtLink>
            </h2>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useTestTStore} from '@/store/home.js' 
const router = useRouter()
const store = useTestTStore();
let userRegister = ref({
  full_name: null,
  phone: null,
  password: null,
  type: "client",
});
// console.log(userRegister.value.full_name, "userRegister");

const emailError = ref(null);
const errorTel = ref(null);
const passwordError = ref(null);
const { full_name, phone, password } = toRefs(userRegister.value);

watch(full_name, (newVAlue) => {
  emailError.value = isEmpty(newVAlue, "string");
}, { deep: true });

watch(phone, (newValue) => {errorTel.value = !isEmpty(newValue, "Telifon nomeri").item ? isEmpty(newValue, "Telifon nomeri")
    : validateLength(newValue, 12, 12, "telfon nomeri");
}, { deep: true });

watch(password, (newValue) => { passwordError.value = passwordValidator(newValue);
}, { deep: true });

const senDataUser = async () => {
  emailError.value = isEmpty(userRegister.value.full_name, "ismi");
  console.log(emailError.value,'salomat usejon');
  // errorTel.value = !isEmpty(userRegister.value.phone, "number").item ? isEmpty(userRegister.value.phone, "number") : validateLength(newValue.phone, 12, 12, "telfon nomeri");
  errorTel.value = validateLength(userRegister.value.phone, 12, 12, "telfon nomeri");

  console.log(errorTel.value,'erorottel');
  passwordError.value = passwordValidator(userRegister.value.password);
  console.log(passwordError.value,'salomat pasword');

  let array = [emailError.value, errorTel.value, passwordError.value];
  let validtaionDAta = validation(array);
  
  if (validtaionDAta) { 
    await store.registerUser(userRegister.value);
  }
  console.log(validtaionDAta);
  if (validtaionDAta) {
    console.log('malumotlar yuborildi');
    localStorage.setItem("phone",userRegister.value.phone)
    router.push('/profile')
  }
  else {
    console.log('yuborilmadi');
  }
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
.section_select option {
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
label {
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
  color: #323232;
  margin: 20px 0px 10px 0px;
}
label span {
  color: #e93c3c;
  font-size: 19px;
  font-weight: 700;
}
.list {
  margin: 0px 0px 30px 0px;
  padding: 0px;
}
button {
  width: 100%;
  background-color: #1c5793;
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: white;
}
.bottom {
  width: 100%;
  height: 307px;
  top: 752px;
  left: 832px;
  border: 1px;
  margin: 20px 0px 0px 0px;
}
.bottom h2 {
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
.NuxtLink {
  color: #1c5793;
}
</style>