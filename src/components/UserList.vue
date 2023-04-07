<template>
    <div>
      <h1>User List</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import usersData from '../data/users.json';
  
  export default {
    data() {
      return {
        users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
      ]
      }
    }
  }
  </script>
  