<template>
  <div class="d-flex">
    <div class="main">
      <img class="main_img" src="../../assets/register/kytab.png" alt="" />
      <img class="main_imgs" src="../../assets/register/login.png" alt="" />
    </div>
    <div class="container">
      <div>
        <select
          class="section_select hover:border-blue-600 text-body"
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
          <h2>Tizim kirish va 1280+ kitobga kirish huquqiga ega boʻling</h2>
        </div>
        <dev>
          <div class="mb-3 mt-3 list">
            <label for="email" class="form-label"
              >Telefon raqam <span>*</span></label
            >
            <!-- <input  class="form-control" v-model="tel" v-maska data-maska="#-#" /> -->

            <input
              v-model="telNumber"
              class="form-control"
              v-maska data-maska="############"
            />
            <span v-if="errorTel" style="color: red">{{
              errorTel.message
            }}</span>
          </div>
          <div class="mb-3 mt-3 list inputbox">
            <label for="password" class="form-label"
              >Parol <span>*</span></label
            >
            <input
              v-model="password"
              class="form-control"
              type="password"
              placeholder="parol 8 ta bo'lsin"
            />
            <span v-if="passwordError" style="color: red">{{
              passwordError.message
            }}</span>

            <span v-if="error" style="color: red">{{ error }}</span>

            <div class="li">
              <NuxtLink to="/password" href="">Parolni unutdingizmi?</NuxtLink>
            </div>
          </div>
          <button @click="senDataUser">Login</button>
          <div class="bottom">
            <h2>
              Avval ro'yhatdan o'tganmisiz?
              <NuxtLink to="/register">Ro'yxatdan o'tish</NuxtLink>
            </h2>
          </div>
        </dev>
      </div>
    </div>
  </div>
</template>
  
<script  setup>
const store = useLogin();
const router = useRouter();
const userlogin = ref({
  phone: null,
  password: null,
});

// Validatsiya

const telNumber = ref(null);
const errorTel = ref(null);
const password = ref(null);
const passwordError = ref(null);

const tel = ref(telNumber.value);

const error = ref(null);
const maskval = (data) => {
  let stringData = String(data)
  return stringData.substring(1, 20).replace(/\s/g, "");
};
watch(
  telNumber,
  (newValue) => {
    

    errorTel.value = !isEmpty(maskval(newValue), "Telifon nomeri").item
      ? isEmpty(maskval(newValue), "Telifon nomeri")
      : validateLength(maskval(newValue), 12, 12, "telfon nomeri");
  },
  { deep: true }
);

watch(password, (newValue) => {
  passwordError.value = passwordValidator(newValue);
});

const content = ref(null);
onMounted(() => {
  content.value = 1;
});

const senDataUser = () => {
  // Validatsiya
  // telefon
  errorTel.value = validateLength(
    maskval(telNumber.value),
    12,
    12,
    "telfon nomeri"
  );
  // password
  passwordError.value = passwordValidator(password.value);
  let array = [errorTel.value, passwordError.value];
  let validtaionDAta = validation(array);
  console.log(validtaionDAta);
  userlogin.value.phone = telNumber.value
  userlogin.value.password = password.value
  console.log(userlogin.value);
  // localStorage.setItem('type',client)

  if (validtaionDAta) {

    store.loginUser(userlogin.value);
    router.push('/')
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
.li {
  display: flex;
  justify-content: space-between;
}
.li a {
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
  color: #41a2db;
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
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-align: center;
  // color: #35363D
}
.NuxtLink {
  color: #1c5793;
}
</style>