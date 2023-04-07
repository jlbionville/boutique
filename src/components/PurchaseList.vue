<template>
<div class="container">
		<h1>My Purchases</h1>
		<table class="table">
			<thead>
				<tr>
					<th>Item Name</th>
					<th>Description</th>
					<th>Tags</th>
					<th>Prices 01</th>
					<th>Prices 02</th>
					<th>Prices 03</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in purchases">
					<td>{{ item.libelle }}</td>
					<td>{{ item.description }}</td>
					<td>{{ item.tags.join(', ') }}</td>
					<td v-for="price in item.prix">
						<template v-if="price.magasin === 'IKEA'">
														
							{{ price.magasin }}: {{ price.prix }} ({{ price.modele }})
						</template>
						<template v-if="price.magasin === 'Conforama'">
														
							{{ price.magasin }}: {{ price.prix }} ({{ price.modele }})
						</template>
						<template v-if="price.magasin === 'PEVEX'">														
							{{ price.magasin }}: {{ price.prix }} ({{ price.modele }})
						</template>
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
  