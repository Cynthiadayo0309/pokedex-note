<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>ポケモン育成ノート</h1>
        <p>
          ポケモン育成ノートをご利用の方は、Googleアカウントでログインしてください。<br>
          ログイン時、少し時間がかかる場合がありますが、ご了承ください。
        </p>
      </v-flex>

      <v-flex xs12 mt-5>
        <v-btn color='info' @click="login">Googleアカウントでログイン</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['login'])
  }
}
</script>
