<template>
  <div class="home">
    <img src="@/assets/snap-mobile-logo.png" alt="Snap! Logo" />
    <h3>Total Count: {{ totalCount }}</h3>
    <h3>Total Price: {{ totalPrice }}</h3>
    <h3>Total Volume: {{ totalVolume }}</h3>
    <h3>Average Alcohol: {{ avgAlcohol }}</h3>
    <h3>Cost Per 12oz: {{ costPerServing }}</h3>
    <h3>Time Shopping: {{ timeShopping }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useBeerStore } from "@/store/beers";
import { storeToRefs } from "pinia";

const beerStore = useBeerStore();

const {
  totalCount,
  totalPrice,
  totalVolume,
  avgAlcohol,
  costPerServing,
  timeShopping,
  // storeToRefs lesson
} = storeToRefs(beerStore); /* storeToRefs */
</script>
