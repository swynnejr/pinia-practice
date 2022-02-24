<template>
<div class="max-w-[50%]">
    <div class="text-2xl font-bold mt-8 mb-4">Shopping Cart</div>
  <div class="">
    <ul>
        <li v-for="(item, index) in receipt" :key="index">{{item}}</li>
    </ul>
    
  </div>

</div>
</template>

<script setup lang="ts">
import { useBeerStore } from "@/store/useBeerStore";
import { storeToRefs } from "pinia";

const beerStore = useBeerStore();

const {
  totalCount,
  totalPrice,
  totalVolume,
  timeShopping,
  receipt,
  // storeToRefs lesson
} = storeToRefs(beerStore); /* storeToRefs */
</script>
