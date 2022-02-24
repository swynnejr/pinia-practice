<template>
  <div class="bg-blue-50 border m-4 py-2 px-8">
    <span class="text-4xl font-bold">Beer</span>
    <div class="">
      <!-- BUD LIGHT -->
      <div class="flex justify-center">
        <div class="bg-white border shadow-lg rounded-lg p-2 m-2">
          <span class="block text-2xl font-semibold">Bud Light</span>
          <div>
            <span class="block">12 oz Can</span>
            <span class="block">$2.00</span>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="buyBudLightSingle"
          >
            Buy
          </button>
          <button
            class="hover:bg-red-300 text-red font-bold p-2 rounded"
            @click="removeBudLightSingle"
          >
            Cancel
          </button>
        </div>
        <img src="@/assets/BL_Core_Can.png" class="h-24 mt-8" />
        <div class="bg-white border shadow-lg rounded-lg p-2 m-2">
          <span class="block text-2xl font-semibold">Bud Light</span>
          <div>
            <span class="block">Six Pack</span>
            <span class="block">$8.50</span>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="buyBudLightSixer"
          >
            Buy
          </button>
          <button
            class="hover:bg-red-300 text-red font-bold p-2 rounded"
            @click="removeBudLightSixer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="">
      <!-- MILLER LIGHT -->
      <div class="flex justify-center">
        <div class="bg-white border shadow-lg rounded-lg p-2 m-2">
          <span class="block text-2xl font-semibold">Miller Lite</span>
          <div>
            <span class="block">Six Pack</span>
            <span class="block">$8.50</span>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="buyMillerLiteSixer"
          >
            Buy
          </button>
          <button
            class="hover:bg-red-300 text-red font-bold p-2 rounded"
            @click="removeMillerLiteSixer"
          >
            Cancel
          </button>
        </div>
        <img src="@/assets/Miller-Lite.png" class="h-24 mt-8" />
        <div class="bg-white border shadow-lg rounded-lg p-2 m-2">
          <span class="block text-2xl font-semibold">Miller Lite</span>
          <div>
            <span class="block">Twelve Pack</span>
            <span class="block">$13.50</span>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="buyMillerLiteTwelve"
          >
            Buy
          </button>
          <button
            class="hover:bg-red-300 text-red font-bold p-2 rounded"
            @click="removeMillerLiteTwelve"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="">
      <!-- Coors Orginal -->
      <div class="flex justify-center">
        <div class="bg-white border shadow-lg rounded-lg p-2 m-2">
          <span class="block text-2xl font-semibold">Coors Original</span>
          <div>
            <span class="block">Twelve Pack</span>
            <span class="block">$14.00</span>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="buyCoorsTwelve"
          >
            Buy
          </button>
          <button
            class="hover:bg-red-300 text-red font-bold p-2 rounded"
            @click="removeCoorsTwelve"
          >
            Cancel
          </button>
        </div>
        <img src="@/assets/Coors-Original.png" class="h-24 mt-8" />
        <div class="bg-white border shadow-lg rounded-lg p-2 m-2">
          <span class="text-2xl font-semibold">Coors Original</span>
          <div>
            <span class="block">24 Pack</span>
            <span class="block">$22.00</span>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="buyCoorsTwentyFour"
          >
            Buy
          </button>
          <button
            class="hover:bg-red-300 text-red font-bold p-2 rounded"
            @click="removeCoorsTwentyFour"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBeerStore } from "@/store/useBeerStore";
import { storeToRefs } from "pinia";

// Search Form Refs thanks to Pinia State Management
const beerStore = useBeerStore();
const { totalCount, totalPrice, totalVolume, receipt } = storeToRefs(beerStore);

const calculateVolume = () => {
  totalVolume.value = totalCount.value * 12;
};

const buyBudLightSingle = () => {
  totalCount.value++;
  totalPrice.value += 2.0;
  calculateVolume();
  receipt.value.push("Bud Light 12oz");
};
const buyBudLightSixer = () => {
  totalCount.value += 6;
  totalPrice.value += 8.5;
  calculateVolume();
  receipt.value.push("Bud Light Six Pack");
};
const buyMillerLiteSixer = () => {
  totalCount.value += 6;
  totalPrice.value += 8.5;
  calculateVolume();
  receipt.value.push("Miller Lite Six Pack");
};
const buyMillerLiteTwelve = () => {
  totalCount.value += 12;
  totalPrice.value += 13.5;
  calculateVolume();
  receipt.value.push("Miller Lite Twelve Pack");
};
const buyCoorsTwelve = () => {
  totalCount.value += 12;
  totalPrice.value += 14;
  calculateVolume();
  receipt.value.push("Coors Original Twelve Pack");
};
const buyCoorsTwentyFour = () => {
  totalCount.value += 24;
  totalPrice.value += 22;
  calculateVolume();
  receipt.value.push("Coors Original Twenty Four Pack");
};
const removeBudLightSingle = () => {
  totalCount.value--;
  totalPrice.value -= 2.0;
  calculateVolume();
  receipt.value.pop("Bud Light 12oz");
};
const removeBudLightSixer = () => {
  totalCount.value -= 6;
  totalPrice.value -= 8.5;
  calculateVolume();
  receipt.value.pop("Bud Light Six Pack");
};
const removeMillerLiteSixer = () => {
  totalCount.value -= 6;
  totalPrice.value -= 8.5;
  calculateVolume();
  receipt.value.pop("Miller Lite Six Pack");
};
const removeMillerLiteTwelve = () => {
  totalCount.value -= 12;
  totalPrice.value -= 13.5;
  calculateVolume();
  receipt.value.pop("Miller Lite Twelve Pack");
};
const removeCoorsTwelve = () => {
  totalCount.value -= 12;
  totalPrice.value -= 14;
  calculateVolume();
  receipt.value.pop("Coors Original Twelve Pack");
};
const removeCoorsTwentyFour = () => {
  totalCount.value -= 24;
  totalPrice.value -= 22;
  calculateVolume();
  receipt.value.pop("Coors Original Twenty Four Pack");
};
</script>
