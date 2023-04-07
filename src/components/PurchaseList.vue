<template>
<div class="container">
		<h1>My Purchases</h1>
		<table class="table">
			<thead>
				<tr>
					<th>Item Name</th>
					<th>Description</th>
					<th>Tags</th>
					<th>Prices</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in purchases">
					<td>{{ item.libelle }}</td>
					<td>{{ item.description }}</td>
					<td>{{ item.tags.join(', ') }}</td>
					<td>
						<ul class="list-unstyled">
							<li v-for="price in item.prix">
								{{ price.magasin }}: {{ price.prix }} ({{ price.modele }})
							</li>
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
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
  