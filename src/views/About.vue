<template>
  <v-main>
    <div class="staticHero">
      <v-img src="image17.jpg" height="250px">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="headline">About Us</div>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div>
      <v-container>
        <marquee direction="up"
          ><p class="brown--text font-weight-bold">
            Stylish O Interiors is the best plug when its comes to decorating
            and designing of your offices, workplaces, houses and any of your
            bulding interiors. At stylish O Interiors, we offer you the best at
            affordable prices. we are located at Tinuola close, Housing estate
            Ado Ekiti. you can contact us via our mobile number 08169391852 or
            click the call button on the homepage.
          </p></marquee
        >
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h3>Our Team</h3>
        <v-row>
          <v-col v-for="item in items" :key="item.id" cols="4">
            <v-card flat class="mx-auto pt-8">
              <v-img :src="item.src"> </v-img>
              <v-card-text class="text-center">
                <div class="title">{{ item.name }}</div>
                <p>{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        {
          id: 1,
          src: "team1.jpg",
          name: "Sweet",
          title: "Director",
        },
        {
          id: 2,
          src: "team3.png",
          name: "Tammy",
          title: "Manager",
        },
        {
          id: 3,
          src: "team2.jpg",
          name: "Lovely",
          title: "Secretary",
        },
      ],
    };
  },
};
</script>

<style>
.block {
  text-align: center;
}
</style>
