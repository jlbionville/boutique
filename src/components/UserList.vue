<template>
  <div class="container">
      <thead>
        <tr>
          
          <th>
            Name
          </th>
          <th>
            surname
          </th>
          <th>
            email
          </th>          
        </tr>
      </thead>
      <tbody >
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.surname }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    
  </div>
</template>

  <script>
  import usersData from '@/data/users.json'
  export default {
    data() {
      return {
        users: usersData
      }
    }
  }
  </script>
  