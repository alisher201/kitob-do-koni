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
          <h2>Tizim kirish va 1280+ kitobga kirish huquqiga ega boʻling</h2>
        </div>
        <!-- PAGE 1 -->
        <div v-show="content == 1">
          <div class="mb-3 mt-3 list">
            <label for="tel" class="form-label"
              >Telefon raqam <span>*</span></label
            >
            <input
              v-model="telNumber"
              type="number"
              class="form-control"
              placeholder="998 00 000 00 00"
              v-maska
              data-maska="############"
            />
            <span v-if="errorTel" style="color: red">{{
              errorTel.message
            }}</span>
          </div>
          <button @click="senDataUser1">Davom etish</button>
          <div class="bottom">
            <h2>
              Avval ro'yhatdan o'tganmisiz?
              <NuxtLink to="/register">Ro'yxatdan o'tish</NuxtLink>
            </h2>
          </div>
        </div>
        <!-- PAGE 2 -->
        <div v-show="content == 2">
          <div class="mb-3 mt-3 list">
            <label for="email" class="form-label"
              >Tasdiqlash kodi: <span>+998 97 589 53 69 </span> telefon raqamga
              yubordik</label
            >
            <input
              v-model="code"
              type="number"
              class="form-control"
              placeholder="sms codini kiritng"
            />
            <span v-if="errorCode" style="color: red">
              {{ errorCode.message }}
            </span>
          </div>
          <button @click="senDataUser2">Davom etish</button>
          <div class="bottom">
            <h2>
              Avval ro'yhatdan o'tganmisiz?
              <NuxtLink to="/register">Ro'yxatdan o'tish</NuxtLink>
            </h2>
          </div>
        </div>
        <!-- Page 3 -->
        <div v-show="content == 3">
          <div class="mb-3 mt-3 list">
            <label for="password" class="form-label"
              >Parol <span>*</span></label
            >
            <input
              class="form-control"
              type="password"
              placeholder="Yangi parol"
              v-model="password"
            />
            <span v-if="passwordError" style="color: red">{{
              passwordError.message
            }}</span>
          </div>
          <div class="mb-3 mt-3 list">
            <label class="form-label">Parol <span>*</span></label>
            <input
              class="form-control"
              type="password"
              placeholder="Yangi parolni takrorlang"
              v-model="confirm_password"
            />
            <span v-if="confirm_passwordError" style="color: red">{{
              confirm_passwordError.message
            }}</span>
          </div>
          <button @click="senDataUser3">Yangi parolni o'rnatish</button>
          <div class="bottom">
            <h2>
              Avval ro'yhatdan o'tganmisiz?
              <NuxtLink to="/register">Ro'yxatdan o'tish</NuxtLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
// Validatsiya

const store = useLogin();
const forget = ref({
  phone: null,
});
const checkforget = ref({
  code: null,
  phone: null,
});

const telNumber = ref(null);
const errorTel = ref(null);

const code = ref(null);
const errorCode = ref(null);

const generatepasword = ref({
  password: null,
  confirm_password: null,
});

const password = ref(null);
const passwordError = ref(null);

const confirm_password = ref(null);
const confirm_passwordError = ref(null);

let content = ref(1);

watch(telNumber, (newValue) => {
  errorTel.value = !isEmpty(newValue, "Telifon nomeri").item
    ? isEmpty(newValue, "Telifon nomeri")
    : validateLength(newValue, 12, 12, "telfon nomeri");
});

watch(code, (newValue) => {
  errorCode.value = !isEmpty(newValue, "Sms codi").item
    ? isEmpty(newValue, "Sms codi")
    : validateLength(newValue, 6, 6, "sms codi");
});

watch(password, (newValue) => {
  passwordError.value = passwordValidator(newValue);
});
watch(confirm_password, ( conf) => {
  confirm_passwordError.value = confirmedValidator(password.value, conf);
});

const senDataUser1 = () => {
  errorTel.value = validateLength(telNumber.value, 12, 12, "telfon nomeri");
  let array = [errorTel.value];
  let validtaionDAta = validation(array);
  forget.value.phone = telNumber.value;
  if (telNumber.value && validtaionDAta) {
    store
      .forgetPassword(forget.value)
      .then(() => {
        content.value = 2;
      })
      .catch((error) => {
        useNuxtApp().$toast.error(error.response._data.message, {
          autoClose: 2000,
          dangerouslyHTMLString: true,
        });
      });
  } else {
    errorTel.value = !isEmpty(telNumber.value, "Telifon nomeri").item
      ? isEmpty(telNumber.value, "Telifon nomeri")
      : validateLength(telNumber.value, 12, 12, "telfon nomeri");
  }
};

const senDataUser2 = () => {
  errorCode.value = validateLength(code.value, 6, 6, "sms codi");
  let array2 = [errorCode.value];
  let validtaioncode = validation(array2);
  checkforget.value.code = code.value;
  checkforget.value.phone = telNumber.value;
  if (validtaioncode && code.value) {
    store.checkforgetpassword(checkforget.value).then((res) => {
      if (res.error) {
        useNuxtApp().$toast.error(res.message, {
          autoClose: 2000,
          dangerouslyHTMLString: true,
        });
      } else {
        localStorage.setItem("jwtToken", res.result.token);
        localStorage.setItem("refreshToken", res.result.refresh_token);
        content.value = 3;
      }
    });
  } else {
    errorCode.value = !isEmpty(code.value, "Sms codi").item
      ? isEmpty(code.value, "Sms codi")
      : validateLength(code.value, 6, 6, "sms codi");
  }
};

const senDataUser3 = () => {
  generatepasword.value.password = password.value;
  generatepasword.value.confirm_password = confirm_password.value;
  console.log(confirm_passwordError.value.item);
  if (confirm_passwordError.value.item) {
    store.changepassword(generatepasword.value)
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
  color: #323232;
  margin: 20px 0px 10px 0px;
}
label span {
  color: #e93c3c;
  font-size: 15px;
  font-weight: 900;
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
.NuxtLink {
  color: #1c5793;
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
</style>