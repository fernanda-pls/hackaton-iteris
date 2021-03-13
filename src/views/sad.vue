<tbody>
<tr v-for="pontos of PostosColeta" :key="pontos.id"> 
<td> <v-avatar size="24"> <img :src="pontos.imagem" :alt="pontos.nome" /> </v-avatar> 
<span class="pl-2">{{ pontos.nome }}</span> </td> 
<td>{{ pontos.cep }}</td> 
<td>{{ pontos.endereco }}</td> 
<td>{{ pontos.categorias }}</td> </tr> 
</tbody> 


