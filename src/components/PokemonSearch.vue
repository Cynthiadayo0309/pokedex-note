<template>
  <div class="searchbar">
    <form @submit.prevent="setPokemonUrl">
      <input type="text" placeholder="名前 or 図鑑番号" v-model="searchvalue" />
      <p class="legenda">
          ポケモンの名前や図鑑番号を入力してください<br>
          ※現在、検索機能は使えず、英語名のみ表示しております
      </p>
    </form>
    <i class="fas fa-search" @click="setPokemonUrl"></i>
  </div>
</template>

<script>

export default {
  props: ["apiUrl"],
  data: () => {
    return {
      searchvalue: "",
    }
  },
  methods: {
    setPokemonUrl(url) {
      if (this.searchvalue !== "")
        this.$emit("setPokemonUrl", this.apiUrl + this.searchvalue)
    },
  },
}
</script>

<style scoped>
.searchbar {
    margin: 0 auto;
    position: relative;
    width: 100%;
    max-width: 500px;
    padding-bottom: 20px;
}
input {
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px 40px 10px 10px;
    width: calc(100% - 50px);
    font-size: 1rem;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}
.legenda {
    margin-top: 10px;
    color: #000;
}
i {
    position: absolute;
    top: 12px;
    right: 40px;
    font-size: 1.25rem;
    color: #0A2E50;
    cursor: pointer;
}
</style>

<style>
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

</style>