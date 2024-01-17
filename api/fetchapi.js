export default {
    async asyncData({ $fetch }) {
      try {
        const result = await $fetch('/api/data', { timeout: 20000 }); // 20 sekund bajarish vaqti
        return { result };
      } catch (error) {
        console.error(error);
        return { error: 'So\'rov bajarganida xatolik yuz berdi' };
      }
    }
}


//   export default {
//     async asyncData({ $fetch }) {
//       const requestTime = 20000; // 20 sekund
//       let timeoutId;
  
//       const fetchData = () => {
//         return new Promise((resolve, reject) => {
//           timeoutId = setTimeout(() => {
//             reject(new Error('So\'rov vaqti tugadi'));
//           }, requestTime);
  
//           $fetch('/api/data')
//             .then((data) => {
//               clearTimeout(timeoutId);
//               resolve(data);
//             })
//             .catch((error) => {
//               clearTimeout(timeoutId);
//               reject(error);
//             });
//         });
//       };
  
//       try {
//         const result = await fetchData();
//         return { result };
//       } catch (error) {
//         console.error(error);
//         return { error: 'So\'rov bajarganida xatolik yuz berdi' };
//       }
//     }
//   }