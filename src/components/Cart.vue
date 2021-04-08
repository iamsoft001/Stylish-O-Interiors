<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" v-for="(product, index) in cart" :key="index">
          <v-card class=" mb-4">
            <v-img :src="product.image" height="200px"></v-img>

            <v-card-title>
              {{ product.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ product.cost }}
            </v-card-subtitle>
            <div>
              <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
              ></v-rating>
            </div>
            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                rounded
                @click="removeItemFromCart(product) ,
                snackbar = true"
              >
                Remove From Cart
              </v-btn>
              <v-snackbar v-model="snackbar">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="green"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      snackbar: false,
      text: `Sucessfully deleted from cart`,
      rating:0
    };
  },
  props: ["cart"],
  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    },
  },
};
</script>

<style></style>
