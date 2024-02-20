<template>
    <div>
       <table>
         <thead>
           <tr>
             <th v-for="(item, index) in headers" :key="index">
               {{ item.title }}
             </th>
           </tr>
         </thead>
         <tbody>
           <tr v-for="(item, index) in store?.profile?.result?.delivered" :key="index">
             <td
               v-for="(bodyInHeader, bodyInIndex) in headers"
               :key="bodyInIndex"
             >
               <slot :name="`body_${bodyInHeader.value}`" :item="item">
                 {{ item[bodyInHeader.value] }}
               </slot>
               <!-- <pre>{{store?.profile?.result?.delivered}}</pre> -->
             </td>
           </tr>
         </tbody>
       </table>
     </div>
</template>

<script setup>
const store = ProfileHistory()

onMounted(()=>{
  store.OrderHistory()
})
const headers = [
 {
   title: "No",
   value: "id",
 },
 {
   title: "Buyurtma raqami",
   value: "id",
 },
 {
   title: "Buyurtma sanasi",
   value: "created_at",
 },
 {
   title: "Narxi",
   value: "total_amount",
 },
 {
   title: "Holati",
   value: "status",
 },
];
// const body = [
//  {
//    id: "1",
//    raqam:"234444",
//    sanasi:"10.06.2023",
//    narxi:"24 000 so'm",
//    holati:"Faol"

//  },
// ];

</script>

<style lang="scss" scoped>
table {
 width: 100%;
 // padding: 10px;
 // border-collapse: separate;
 // border-spacing: 0;
 // overflow-x: auto;
 thead {
   //   background-color: #1073a9;

   th {
     border-bottom: 1px solid #c5d2d6;
     padding: 10px 36px;
     width: 29px;
     height: 18px;
     top: 352px;
     // left: 835px;
     color: #9196ad;
     font-family: Manrope;
     font-size: 13px;
     font-weight: 400;
     line-height: 18px;
     letter-spacing: 0.02em;
     // text-align: left;

     //   border: 2px solid red;
   }
 }
 tbody {
   background-color: white;
   
   tr {
     // background-color: rgb(228, 111, 111);
     background:white;

     td {
        padding: 10px 36px;
        width: 62px;
        height: 18px;
        top: 352px;
        // left: 835px;
        color: #2986e3; 
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0.02em;
        text-align: left;




       slot {
         border-radius: 10px solid green;
         color: #e90d0d;
       }
     }
   }
 }
}
</style>