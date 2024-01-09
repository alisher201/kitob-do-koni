<template>
    <div >
      <div class="main">
        <h1 class="h1">Bildirishnoma</h1>
    
        <div class="main_list" >
          <dev class="img1"  v-for="(item,index) in data" :key="index" @click="selectImg(item.id)">
              <img :src="item.img"  alt="">
              <div >
                  <h2>{{item.word}}</h2>
                  <p>{{item.world}}</p>
              </div>
            </dev>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import img1 from  "../../assets/profile/img1.svg";
  import img2 from "../../assets/profile/image2.svg";
  import img3 from "../../assets/profile/image3.svg";
  import img4 from "../../assets/profile/image4.svg";
  
                        // 
  const data = [
      {
          id:1,
          img: img1,
          word:"Lorem ipsum dolor sit amt kas consecture adipiscing ",
          world:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque magnis tempor in sed cursus  "
      },
      {
          id:2,
          img: img2,
          word:"Lorem ipsum dolor sit amt kas consecture adipiscing ",
          world:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque magnis tempor in sed cursus  "
  
  
      },
      {
          id:3,
           img:  img3  ,
           word:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, consequatur! Ullam provident hic quisquam. Molestias qui doloremque, magni consequuntur quo id voluptates omnis quibusdam possimus officia et, quam, ex hic.",
           world:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque magnis tempor in sed cursus  "
  
       },
       {
          id:4,
           img: img4,
           word:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, consequatur! Ullam provident hic quisquam. Molestias qui doloremque, magni consequuntur quo id voluptates omnis quibusdam possimus officia et, quam, ex hic.",
           world:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque magnis tempor in sed cursus  "
  
       }
  ]
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
    width: 948px;
    height: 325px;
    top: 232px;
    left: 479px;
    border-radius: 10px;
    // color: #FAFAFA;
    background-color:#FAFAFA;     
  //   background-color: red;
    margin: 60px 121px 283px 40px;
    
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
      display:flex;
      padding:4px;
      margin:18px 0px 0px 30px;
      gap: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(300px,2fr));
  }
  .img1{
      
      width: 415px;
      height: 115px;
      top: 297px;
      left: 509px;
      border-radius: 10px;
      border:blue;
      border: 1px solid #A1C4E2;
      display: flex;
      // color: #1b33e4;
      background-color: #FFFFFF;
      margin-right: 25px;
      // background-color: red;
      
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

  img{
      width: 90px;
      height: 95px;
      top: 307px;
      left: 521px;
      border-radius: 5px;
      margin: 10px 10px 10px 10px;
  
  }
  </style>