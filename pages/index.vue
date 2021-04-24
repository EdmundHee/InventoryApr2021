<template>
  <div class="w-screen h-screen bg-yellow-500 p-20 flex"> <!-- Parent -->
    <div class="m-auto w-full md:w-1/2">
      <input-element 
        labelName="Email" 
        labelId="email" 
        inputType="email"
        :model="email" 
        @input="email = $event"
        class="my-2"
      />
      <input-element 
        labelName="Password" 
        labelId="password" 
        inputType="password"
        :model="password" 
        @input="password = $event" 
        class="my-2"
      />
      <button type="button" @click="login" class="w-full py-2 px-4 bg-gray-800 text-gray-100">Login</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed:{
      ...mapState({
        isLoggedIn : state => state.auth.isLoggedIn,
      })
    },
    data: function(){
        return{
            email: "",
            password: ""
        }
    },
    methods:{
      login: function(){
        this.emailLogin({ email:this.email, password:this.password})
      },
      ...mapActions({
        emailLogin: "auth/firebaseLogin",
        getIdToken: "auth/getIdToken"
      })
    },
    mounted(){
        if(this.isLoggedIn){
          this.getIdToken();
          this.$router.push("/product")
        }
    },
}
</script>

<style>

</style>