<template>
  <div class="container px-0">
    <div class="row py-4">
        <div class="col-3 mb-4" v-for="(categoryData, idx) in category" :key="idx">
            <strong>{{ categoryData.categorya }}</strong>
            <p class="categorya" v-for="(items, index) in categoryData.items" :key="index" @click="categoryGet(categoryData.id, items.id)">
           <small> {{ items.name }}</small></p>

        </div>
    </div>
  </div>
</template>
<script setup>
const categoryGet = (parentId, childId) => {
  const router =  useRouter()
  router.push(`/Categories/${childId}`)
}
const category = [
  { id: 1, categorya: "categories", 
  items: [{ id: 1, name: "Arxitektura" },
  { id: 2, name: "Arxitektura" },
  { id: 3, name: "To'plamlar,kataloglar va ko'rgazmalar" },
  { id: 4, name: "Dizayn dekorativ san'at va chizmachilik" },
  { id: 5, name: "Grafik dizayn" },
  { id: 6, name: "Rassomlar" },] },




  { id: 2, categorya: "categories", 
  items: [{ id: 1, name: "Arxitektura" },
  { id: 2, name: "Arxitektura" },
  { id: 3, name: "To'plamlar,kataloglar va ko'rgazmalar" },
  { id: 4, name: "Dizayn dekorativ san'at va chizmachilik" },
  { id: 5, name: "Grafik dizayn" },
  { id: 6, name: "Rassomlar" },] },


  { id: 3, categorya: "categories", 
  items: [{ id: 1, name: "Arxitektura" },
  { id: 2, name: "Arxitektura" },
  { id: 3, name: "To'plamlar,kataloglar va ko'rgazmalar" },
  { id: 4, name: "Dizayn dekorativ san'at va chizmachilik" },
  { id: 5, name: "Grafik dizayn" },
  { id: 6, name: "Rassomlar" },
  { id: 7, name: "Arxitektura" },
  { id: 8, name: "To'plamlar,kataloglar va ko'rgazmalar" },
  { id: 9, name: "Dizayn dekorativ san'at va chizmachilik" },
  { id: 10, name: "Grafik dizayn" },
  { id: 11, name: "Rassomlar" },] },


  { id: 4, categorya: "categories", 
  items: [{ id: 1, name: "Arxitektura" },
  { id: 2, name: "Arxitektura" },
  { id: 3, name: "To'plamlar,kataloglar va ko'rgazmalar" },
  { id: 4, name: "Dizayn dekorativ san'at va chizmachilik" },
  { id: 5, name: "Grafik dizayn" },
  { id: 6, name: "Rassomlar" },] },


  { id: 5, categorya: "categories", 
  items: [{ id: 1, name: "Arxitektura" },
  { id: 2, name: "Arxitektura" },
  { id: 3, name: "To'plamlar,kataloglar va ko'rgazmalar" },
  { id: 4, name: "Dizayn dekorativ san'at va chizmachilik" },
  { id: 5, name: "Grafik dizayn" },
  { id: 6, name: "Rassomlar" },] },
]
</script>
<style>
p {
    margin: 2px;
}
.categorya:hover {
    background: #D6D7D8;
    cursor: pointer;

}

</style>