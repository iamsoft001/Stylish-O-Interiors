<template>
  <div class="regPage">
    <v-row>
      <v-col class="ma-15">
        <v-card class="mx-auto" width="500">
          <v-card-title>
            <h4 class="reggy">Welcome to Stylish O Interiors</h4>
          </v-card-title>

          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="firstname"
                :counter="10"
                :rules="nameRules"
                required
                label="Firstname"
                outlined
                dense
                rounded
                height="2px"
                prepend-icon="mdi-account-circle"
              />
              <v-text-field
                v-model="lastname"
                :counter="10"
                :rules="nameRules"
                required
                label="Lastname"
                outlined
                dense
                rounded
                prepend-icon="mdi-account-circle"
              />
              <v-text-field
                v-model="username"
                :rules="userRules"
                label="Username"
                required
                outlined
                dense
                rounded
                prepend-icon="mdi-account-circle"
              />

              <v-text-field
                v-model="password"
                :rules="passwordRule"
                required
                outlined
                rounded
                dense
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />

              <v-text-field
                v-model="confirmPassword"
                :rules="passwordRule"
                required
                outlined
                dense
                rounded
                :type="confirmPassword ? 'text' : 'password'"
                label="Comfirm Password"
                prepend-icon="mdi-lock"
                :append-icon="confirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="confirmPassword = !confirmPassword"
              />

              <v-text-field
                v-model="phonenumber"
                :counter="11"
                :rules="phoneRules"
                outlined
                rounded
                dense
                hint="Enter only numbers"
                label="Phone No"
                prepend-icon="mdi-cellphone"
              />
              <v-text-field
                v-model="email"
                :rules="emailRules"
                required
                outlined
                rounded
                dense
                label="Email Address"
                prepend-icon="mdi-email"
              />
              <h5 class="text">
                Already have an account click <a href="/Login">here</a>
              </h5>
              <v-btn
                class="regBtn"
                :disabled="!valid"
                @click="register"
                color="brown"
                >Register</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "RegPage",
  data: () => ({
    showPassword: false,
    confirmPassword: false,
    valid: true,
    firstname: "",
    lastname: "",
    username: "",
    userRules: [(v) => !!v || "Name is required"],
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    phonenumber: "",
    phoneRules: [(v) => (v && v.length <= 11) || "Number must be less"],
    password: "",
    passwordRule: [(v) => !!v || "Password is required"],
  }),

  methods: {
    register() {
      this.$refs.form.register();
    },
  },
};
</script>

<style scoped>
.regPage {
  background-image: url(/login.jpg);
  background-size: cover;
  height: 100%;
}
.regBtn {
  margin-left: 190px;
  margin-bottom: 50px;
}
.text {
  color: rgb(81, 81, 240);
  margin: 0px 0px 0px 150px;
}
.reggy {
  color: rgb(95, 66, 3);
  margin-left: 100px;
}
</style>
