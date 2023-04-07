<template>
    <div>
      <h1>Purchase List</h1>
      <ul>
        <li v-for="purchase in purchases" :key="purchase.id">
          {{ purchase.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import purchasesData from '@/data/purchases.json';
  
  export default {
    data() {
      return {
        purchases: purchasesData
      }
    }
  }
  </script>
  