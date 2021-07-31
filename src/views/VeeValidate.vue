<template>
    <div style="text-align: center;">
        <h1>VeeValidate</h1>

        <form @submit.prevent="onSubmit">
            <label>お名前</label>
            <ValidationProvider name="お名前" rules="required" v-slot="{ errors }">
                <div>
                    <input type="text" name="name" v-model="form.name">
                </div>
                <div class="text-danger">{{ errors[0] }}</div>
            </ValidationProvider>

            <label>メールアドレス</label>
            <ValidationProvider name="メールアドレス" rules="required|email" v-slot="{ errors }">
                <div>
                    <input type="email" name="email" v-model="form.email">
                </div>
                <div class="text-danger">{{ errors[0] }}</div>
            </ValidationProvider>

            <div class="mt-2">
                <button type="submit">送信</button>
            </div>
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import {
    ValidationProvider,
    localize,
    extend,
} from 'vee-validate'

import * as rules from 'vee-validate/dist/rules'
for (let rule in rules) {
    extend(rule, rules[rule])
}

import ja from 'vee-validate/dist/locale/ja'
localize('ja', ja)

Vue.component('ValidationProvider', ValidationProvider)

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('successed!')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>