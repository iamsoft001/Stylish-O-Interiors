<template>
  <div>
    <header>
      <v-tooltip left color="green">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" rounded class="mr-4">
            Cart
            <v-badge color="green">
              <template v-slot:badge>
                {{ cart.length }}
              </template>
            </v-badge>
          </v-btn>
        </template>
        <span>Click on view cart to see the content in cart</span>
      </v-tooltip>
      <v-btn @click="navigateTo('products')" rounded class="mr-4"
        >View Products</v-btn
      >

      <v-btn @click="navigateTo('cart')" rounded>View Cart</v-btn>
    </header>

    <div v-if="page === 'cart'">
      <Cart :cart="cart" @removeItemFromCart="removeItemFromCart" />
    </div>

    <div v-if="page === 'products'">
      <products @addItemToCart="addItemToCart" />
    </div>
  </div>
</template>

<script>
import Products from "@/components/Products.vue";
import Cart from "@/components/Cart.vue";
export default {
  name: "App",

  data: () => {
    return {
      page: "products",
      cart: [],
    };
  },
  methods: {
    addItemToCart(product) {
      this.cart.push(product);
    },
    removeItemFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    navigateTo(page) {
      this.page = page;
    },
  },
  components: { Products, Cart },
};
</script>

<style>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

header {
  text-align: right;
  font-size: 30px;
  padding-right: 30px;
}
</style>
