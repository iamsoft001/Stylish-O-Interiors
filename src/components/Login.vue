<template>
    <div class="logPage">
       
    <v-row>
      <v-col>
        <v-card class="mx-auto mt-15" width="350" >
          <v-card-title>
            <h3 class="tex">Login</h3>
          </v-card-title>

          <v-card-text>
            <v-form
             ref="form"
             v-model="valid"
             >
              <v-text-field
                v-model="username"
                label="Username"
                :rules="nameRule"
                prepend-icon="mdi-account-circle"
                required
              />

              <v-text-field
                v-model="password"
                :rules="passwordRule"
                required
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn  color="brown"  item: to="/Register">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn 
            :disabled="!valid"
            color="brown"
             @click="login"
            item: to="/Payment"
             >
             
             Login</v-btn>
          </v-card-actions>

          <marquee class="marq">Welcome to Stylish O Interiors</marquee>
        </v-card>
      </v-col>
    </v-row>
  
    </div>
</template>

<script>
export default {
  name: "LoginPage",
  data:() => ({
      showPassword: false,
      valid: true,
      username:'',
      nameRule: [v=>!!v || 'Name is required'],
      password:'',
      passwordRule:[v => !!v || 'Password is required']
  }),
  methods:{
      login(){
          this.$refs.form.login()
      },
  },
}
</script>

<style>
.logPage {
  background-image: url(/loginn.jpg);
  background-size: cover;
  height: 100%;
}
.marq {
  padding-top: 25px;
  color: darkgoldenrod;
  font-family: cursive;
}
.tex{
    color: darkgoldenrod;
    margin-left:39%;
}
</style>
