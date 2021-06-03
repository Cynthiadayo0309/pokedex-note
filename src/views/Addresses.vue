<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>育成ノート一覧</h1>
      </v-flex>

      <v-flex xs12 mt-5 justify-center>
          <router-link :to="{ name: 'address_edit' }">
              <v-btn color="info">
                  育成メモ追加
              </v-btn>
          </router-link>
      </v-flex>

      <v-flex xs12 mt-5 justify-center>
        <v-data-table :headers='headers' :items='addresses'>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.cha }}</td>
            <td class="text-xs-left">{{ props.item.atk }}</td>
            <td class="text-xs-left">{{ props.item.item }}</td>
            <td class="text-xs-left">{{ props.item.abi }}</td>
            <td class="text-xs-left">{{ props.item.remarks }}</td>
            <td class="text-xs-left">
                <span>
                    <router-link :to="{ name: 'address_edit', params: { address_id: props.item.id }}">
                        <v-icon small class="mr-2">edit</v-icon>
                    </router-link>
                </span>
                <span>
                    <v-icon small class="mr-2" @click="deleteConfirm(props.item.id)">delete</v-icon>
                </span>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    created () {
        this.addresses = this.$store.state.addresses
    },
    data () {
        return {
        headers: [
            { text: '名前', value: 'name' },
            { text: '性格', value: 'cha' },
            { text: 'わざ', value: 'atk' },
            { text: 'アイテム', value: 'item' },
            { text: '特性', value: 'abi' },
            { text: '努力値・備考', value: 'remarks' },
            { text: '操作', sortable: false }
        ],
        addresses: []
        }
    },
    methods: {
        deleteConfirm (id) {
            if (confirm('削除してもよろしいですか？')) {
                this.deleteAddress({ id })
            }
        },
        ...mapActions(['deleteAddress'])
    }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
</style>

<style lang="scss">
.container {
    padding: 24px 0;
}

table.v-table tbody td,
table.v-table tbody th {
    height: 60px;
}

// table.v-table thead td:not(:nth-child(1)), 
// table.v-table tbody td:not(:nth-child(1)), 
// table.v-table thead th:not(:nth-child(1)), 
// table.v-table tbody th:not(:nth-child(1)), 
// table.v-table thead td:first-child, 
// table.v-table tbody td:first-child, 
// table.v-table thead th:first-child, 
// table.v-table tbody th:first-child {
//     padding: 0 20px;
// }
</style>