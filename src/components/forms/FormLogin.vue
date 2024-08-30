<template>
    <form id="login">
        <div class="input-group">
            <Label class="label">Email</Label>
            <input id="email" type="email" v-model="email">
        </div>
        <div class="input-group">
            <Label class="label">Password</Label>
            <input id="password" type="password" v-model="password">
        </div>
        <button @click.prevent="loginUser">Anmelden</button>
    </form>
</template>





<style>

input {
  all: unset; /* Resets all properties */
  appearance: none; /* Removes browser-specific styles */
  border: none; /* Removes default borders */
  outline: none; /* Removes default outlines */
  padding: 0; /* Removes default padding */
  margin: 0; /* Removes default margins */
  font: inherit;
  color: inherit;
}

@media(min-width: 320px) {

    form#login {
        padding: 1.6rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem 0;
        background-color: var(--light-primary);
        border-radius: 0.8rem;
    }

    form#login .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.8rem 0;
    }

    form#login .input-group label {
        margin-left: 0.8rem;
    }

    form#login .input-group input {
        padding: 0.8rem;
        border: 1px solid var(--light-tertiary);
        border-radius: 0.4rem;
    }

    form#login button {
        margin-top: 1.6rem;
        padding: 1.2rem;
        color: var(--brand-blue-secondary);
        background-color: var(--dark-primary);
        border-radius: 0.4rem;
    }

    form#login button:hover {
        background-color: var(--dark-secondary);
    }

}

@media(min-width: 768px) {
    
}

@media(min-width: 1200px) {
    
}

</style>





<script lang="ts" setup>
import { Label } from "radix-vue"
import { ref, type Ref } from "vue"
import supabase from "@/databases/supabase/supabase"
import { useRouter } from "vue-router"

const router = useRouter()

const email: Ref<string> = ref("")
const password: Ref<string> = ref("")

async function loginUser() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })

    if(data.user) {
        router.push({ name: "admin_index" })
    } else {
        console.log(error?.message)
    }
}

</script>