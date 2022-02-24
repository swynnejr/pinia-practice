import { defineStore } from "pinia";

interface BeerStore {
  totalCount: number;
  totalPrice: number;
  totalVolume: number;
  avgAlcohol: number;
  costPerServing: number;
  timeShopping: number;
}

export const useBeerStore = defineStore("beersRus", {
  state: (): BeerStore => ({
    totalCount: 0,
    totalPrice: 0,
    totalVolume: 0,
    avgAlcohol: 0,
    costPerServing: 0,
    timeShopping: 0,
  }),
  actions: {
    incrementCount() {
      this.totalCount++;
    },
    decrementCount() {
      this.totalCount--;
    },
    addCost(price: number) {
      this.totalPrice += price;
    },
    removeCost(price: number) {
      this.totalPrice -= price;
    },
  },
  getters: {
    getTime(state) {
      return state.timeShopping;
    },
  },
});
