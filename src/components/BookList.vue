<template>
    <div>
      <h1>Book List</h1>
      <ul>
        <li v-for="book in books" :key="book.title">
          {{ book.title }} | {{ book.auteur }} |{{ book.image }} 
        </li>
      </ul>
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
  