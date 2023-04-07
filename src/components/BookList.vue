<template>

    <div class="container">
		<h1>Mes livres</h1>
		<table class="table">
			<thead>
				<tr>
					<th>Title</th>
					<th>Auteur</th>
					<th>Image</th>					
				</tr>
			</thead>
			<tbody>        
				<tr v-for="book in books" :key="book.title">
					<td>{{ book.title }}</td>
					<td>{{ book.auteur }}</td>
					<td><img :src=book.image class="img-fluid" alt="Responsive image"></td>
				</tr>
			</tbody>
		</table>
	</div>    
  </template>
  
  <script>
  import booksData from '@/data/books.json';
  
  export default {
    data() {
      return {
        books: booksData
      }
    }
  }
  </script>
  