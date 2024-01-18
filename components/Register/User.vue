<template>
    <div>
        <div class="title">
          <p>
            Foydalanuvchilar kitoblarni o'qishlari, sotib olishlari va do'stlari
            bilan baham ko'rishlari mumkin
          </p>
        </div>
        <form action="">
          <div class="mb-3 mt-3 list">
            <label for="email" class="form-label">Ism familiya <span>*</span></label>
            <input type="email" class="form-control" id="email" placeholder="Ism familiyangizni kiriting" name="email"/>
          </div>
          <div class="mb-3 mt-3 list">
            <label for="email" class="form-label">Telefon raqam <span>*</span></label>
            <input type="email" class="form-control" id="email" placeholder="+998 00 000 00 00" name="email"/>
          </div>
          <div class="mb-3 mt-3 list inputbox">
            <label for="password" class="form-label">Parol <span>*</span></label>
            <box-icon type='solid' name='user-circle'></box-icon>
            
            <input  type="password" class="form-control" id="password" placeholder="parol o'ylab top" name="password"/>
          </div> 
          <button>Ro'yxatdan o'tish</button>
          <div class="bottom">
            <h2>Avval ro'yhatdan o'tganmisiz? <NuxtLink to="/">Tizimga kirish</NuxtLink> </h2>
          </div>    
            
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
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

  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
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
  color:#323232
}
label span {
  color: #E93C3C;
  font-size: 19px;
  font-weight: 700;

}
.list{
  margin:0px 0px 30px 0px;
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