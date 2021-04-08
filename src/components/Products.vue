<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
          v-for="(product, index) in products"
          :key="index"
        >
          <v-card class=" mb-4">
            <v-img 
            :src="product.image" height="200px"></v-img>

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
               @click="addItemToCart(product), 
                snackbar=true"
                color="orange lighten-2"
                rounded
               
                
              >
                Add to Cart
              </v-btn>
               <v-snackbar
      v-model="snackbar"
    >
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
      text: `Sucessfully added to cart`,
      rating:0,
      products: [
        {
          name: "Window blind",
          cost: "#34,000",
          image: "download.jpg"
         
        },
        {
          name: "Window blind wooden",
          cost: "#38,000",
          image: "download1.jpg"
        },
        {
          name: "Day and Night",
          cost: "#35,000",
          image: "download2.jpg"
        },
        {
          name: "Remote Window blind",
          cost: "#42,000",
          image: "download3.jpg"
        },
        {
          name: "Remote blind",
          cost: "#45,000",
          image: "download4.jpg"
        },
      ],
    };
  },

  methods: {
    addItemToCart(product) {
      this.$emit("addItemToCart", product);
    },
  },
};
</script>

<style>
.products {
  margin-left: 10px;
  padding: 0px;
}
</style>
