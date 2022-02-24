<template>
  <div class="home bg-gray-50 h-fit">
    <div class="flex justify-center">
      <img src="@/assets/snap-mobile-logo.png" alt="Snap! Logo" />
    </div>
    <div class="flex justify-around bg-blue-300 border text-lg font-semibold">
      <h3>Total Count: {{ totalCount }}</h3>
      <h3>Total Price: {{ totalPrice }}</h3>
      <h3>Cost Per Serving: {{ costPerServing }}</h3>
      <h3>Time Shopping: {{ timeShopping }}</h3>
    </div>
    <div class="flex justify-around">
      <Domestics />
      <IPA />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBeerStore } from "@/store/useBeerStore";
import { storeToRefs } from "pinia";
import Domestics from "@/components/Domestics.vue";
import IPA from "../components/IPA.vue";
import Stouts from "../components/Stouts.vue";
import Belgians from "../components/Belgians.vue";
import { computed } from "vue";

const beerStore = useBeerStore();

const {
  totalCount,
  totalPrice,
  totalVolume,
  timeShopping,
  // storeToRefs lesson
} = storeToRefs(beerStore); /* storeToRefs */

const costPerServing = computed(() => {
  if (totalCount.value != 0) return totalVolume.value / totalCount.value;
  else return "NA";
});

// Formatting
// const formatDollars = (number: number) => formatNumber(number, "$0,0[.]00");
</script>
