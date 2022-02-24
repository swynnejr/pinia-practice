import { defineStore } from "pinia";

interface BeerStore {
  totalCount: number;
  totalPrice: number;
  totalVolume: number;
  costPerServing: number;
  timeShopping: number;
  receipt: [];
}

export const useBeerStore = defineStore("beersRus", {
  state: (): BeerStore => ({
    totalCount: 0,
    totalPrice: 0,
    totalVolume: 0,
    costPerServing: 0,
    timeShopping: 0,
    receipt: [],
  }),
  actions: {
    removeLastItem() {
      this.receipt.pop();
    },
    clearCart() {
      this.receipt = [];
      this.totalCount = 0;
      this.totalPrice = 0;
      this.totalVolume = 0;
      this.costPerServing = 0;
    },
    triggerCounter() {
      setInterval(() => {
        this.timeShopping += 1;
      }, 1000);
    },
    // incrementCount() {
    //   this.totalCount++;
    // },
    // decrementCount() {
    //   this.totalCount--;
    // },
    // addCost(price: number) {
    //   this.totalPrice += price;
    // },
    // removeCost(price: number) {
    //   this.totalPrice -= price;
    // },
  },
  getters: {
    getTime(state) {
      return state.timeShopping;
    },
  },
});
