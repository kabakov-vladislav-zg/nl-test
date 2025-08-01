<script setup>
import { getCity, getCities } from "@/api/city";
import { getCategories, getProducts } from "@/api/catalog";

getCity({ cityId: 1 })
getCities({ term: 'каз' })
getCategories({ cityId: 3049 })
getProducts({ cityId: 1, categorySlug: 'ny-gifts' })
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
