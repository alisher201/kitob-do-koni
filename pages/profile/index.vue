<template>
    <div style="width:100%;" >
      <div class="main  container">
        
      <div class=" row " v-if="(store?.notifications?.result)" >
        <h1 class="h1">{{$t("home.profile.Notification")}}</h1>
        <div class="row ">
          <div class="main_list col " >
            <div class="img1 col-sm-6"  v-for="(item,index) in store?.notifications?.result" :key="index" @click="selectImg(item.id)">
              <div>
                <img :src="'https://beta.kytab.uz'+item.parent.image"  alt="">
                <!-- <pre>{{ item.parent.image }}</pre> -->
              </div>  
                <div >
                    <h2>{{item.parent.title}}</h2>
                    <p>{{item.parent.body.substring(0,90)}}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <TableNotfound />
      </div>
    </div>
    </div>
  </template>
  <script setup>

  const store = ProfileHistory()

  onMounted(()=>{
    store.Notification()
  })


const selectImg = (id) =>{
  const router = useRouter()
  router.push(`/profile/Notification/${id}`)
}

  </script>
  
  <style lang="scss" scoped>
  .nuxt-link-exact-active {
    text-decoration: none;
    border-bottom: none;
  }
  .nuxt-link-exact{
    border-bottom: none;
  }
  .main {
    // width: 948px;
    // height: 325px
    // top: 232px;
    // left: 479px;
    border-radius: 10px;
    // color: #FAFAFA;
    background-color:#FAFAFA;      
    // background-color: red;
    margin: 60px 0px 0px 14px;
    
  }
  .h1{
      width: 136px;
      height: 27px;
      top: 250px;
      left: 509px;
      font-family: Manrope;
      font-size: 20px;
      font-weight: 600;
      line-height: 27px;
      letter-spacing: 0.02em;
      text-align: left;
      margin:18px 0px 0px 30px;
  }
  .main_list{
    //   display:flex;
      padding:4px;
      margin:18px 0px 0px 30px;
      gap: 20px;
      // background-color: rgb(190, 190, 222);
      // width: 909px;
      // height: 280px;
      grid-template-columns: repeat(auto-fit,minmax(300px,2fr));
  }
  h2{
      width: 218px;
      height: 38px;
      top: 307px;
      left: 623px;
      font-family: Manrope;
      font-size: 14px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0.02em;
      text-align: left;
      color: #010209;
      margin: 20px 48px 6px 12px;
  
  
  }
  p{
      width: 216px;
      height: 48px;
      top: 351px;
      left: 623px;    
      font-family: Manrope;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.02em;
      text-align: left;
      color: #9196AD;
      margin: 6px 50px 13px 12px; 
  
  }
  img{
      margin:20px 20px 20px 30px;
      width: 90px;
      height: 95px;
      top: 307px;
      left: 521px;
      border-radius: 5px;
  
  }
  .img1{
      
      width: 415px;
      // height: 115px;
      top: 297px;
      left: 509px;
      border-radius: 10px;
      border: 1px solid #A1C4E2;
      display: flex;
      // color: #1b33e4;
      background-color: #FFFFFF;
      margin-right: 25px;
      // background-color: red;
      
  }
  img{
      width: 90px;
      height: 95px;
      top: 307px;
      left: 521px;
      border-radius: 5px;
      margin: 10px 10px 10px 10px;
  
  }
  </style>