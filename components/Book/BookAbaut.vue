<template>
  <div>
    <div class="about">
      <div class="d-flex pt-2" v-if="store?.book?.author[0].fio">
          <p>{{ $t("home.author") }}</p>
        <div class="flex-fill">
          <hr class="hr" />
        </div>
          <p>{{ store?.book?.author[0].fio }}</p>
      </div>
      <div class="d-flex pt-2"  v-if="store?.book?.author[0].fio">
          <p>{{ $t("home.genre") }}</p>
        <div class="flex-fill">
          <hr class="hr" />
        </div>
          <p>{{store.book?.category[0].name_oz}}</p>
      </div>
      <div class="d-flex pt-2"  v-if="store?.book?.year ">
          <p>{{ $t("home.year") }}</p>
        <div class="flex-fill">
          <hr class="hr" />
        </div>
          <p>{{ store?.book?.year }}</p>
      </div>
      <div class="d-flex pt-2"  v-if="store?.book?.age_access">
          <p>{{ $t("home.ageLimit") }}</p>
        <div class="flex-fill">
          <hr class="hr" />
        </div>
        <p>{{ store?.book?.age_access }}</p>
      </div>
      <div class="d-flex pt-2"  v-if="store?.book?.isbn">
          <p>ISBN</p>
        <div class="flex-fill">
          <hr class="hr" />
        </div>
        <p>{{ store?.book?.isbn }}</p>
      </div>
      <div class="d-flex pt-2"  v-if="store?.book?.number_of_pages">
          <p>{{ $t("home.pages") }}</p>
        <div class="flex-fill">
          <hr class="hr" />
        </div>
        <p>{{store?.book?.number_of_pages}}</p>
      </div>
     
      <div class="d-flex pt-2"  v-if="store?.book?.publishing_house">
          <p>{{ $t("home.publishing") }}</p>
        <div class="flex-fill">
          <hr class="hr" />
        </div>
          <p>{{ store?.book?.publishing_house }}</p>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>
<script setup>
// const Props = defineProps({});

const store = usePayment()

</script>
<style scoped>
.about {
  padding: 0 32px 32px 32px;
  color: #858d96;
}
hr.hr {
  border-top: 1px dashed #000000;
}
</style>