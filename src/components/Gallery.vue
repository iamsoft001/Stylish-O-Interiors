<template>
  <div class="logPage">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="350"
              max-width="350"
            >
              <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data: () => {
    return {
      items: [
        {
          id: 1,
          src: "image.jpg",
        },
        {
          id: 2,
          src: "image1.jpg",
        },
        {
          id: 3,
          src: "image2.jpg",
        },
        {
          id: 4,
          src: "image3.jpg",
        },
        {
          id: 5,
          src: "image4.jpg",
        },
        {
          id: 6,
          src: "image5.jpg",
        },
        {
          id: 7,
          src: "image6.jpg",
        },
        {
          id: 8,
          src: "image7.jpg",
        },
        {
          id: 9,
          src: "image8.jpg",
        },
        {
          id: 10,
          src: "image9.jpg",
        },
        {
          id: 11,
          src: "image10.jpg",
        },
        {
          id: 12,
          src: "image11.jpg",
        },
        {
          id: 13,
          src: "image12.jpg",
        },
        {
          id: 14,
          src: "image13.jpg",
        },
        {
          id: 15,
          src: "image14.jpg",
        },
        {
          id: 16,
          src: "image15.jpg",
        },
        {
          id: 17,
          src: "image16.jpg",
        },
        {
          id: 18,
          src: "image17.jpg",
        },
        {
          id: 19,
          src: "image18.jpg",
        },
        {
          id: 20,
          src: "image19.jpg",
        },
        {
          id: 21,
          src: "image20.jpg",
        },
        {
          id: 22,
          src: "image21.jpg",
        },
        {
          id: 23,
          src: "image22.jpg",
        },
        {
          id: 24,
          src: "image23.jpg",
        },
        {
          id: 25,
          src: "image24.jpg",
        },
        {
          id: 26,
          src: "image25.jpg",
        },
        {
          id: 27,
          src: "image26.jpg",
        },
        {
          id: 28,
          src: "image27.jpg",
        },
        {
          id: 29,
          src: "image28.jpg",
        },
        {
          id: 30,
          src: "image29.jpg",
        },
        {
          id: 31,
          src: "image30.jpg",
        },
        {
          id: 32,
          src: "image31.jpg",
        },
        {
          id: 33,
          src: "image32.jpg",
        },
        {
          id: 34,
          src: "image33.jpg",
        },
        {
          id: 35,
          src: "image34.jpg",
        },
        {
          id: 36,
          src: "image35.jpg",
        },
        {
          id: 37,
          src: "image36.jpg",
        },
        {
          id: 38,
          src: "image37.jpg",
        },
        {
          id: 39,
          src: "image38.jpg",
        },
        {
          id: 40,
          src: "image39.jpg",
        },
        {
          id: 41,
          src: "image40.jpg",
        },
        {
          id: 42,
          src: "image41.jpg",
        },
        {
          id: 43,
          src: "image42.jpg",
        },
        {
          id: 44,
          src: "image43.jpg",
        },
        {
          id: 45,
          src: "image44.jpg",
        },
        {
          id: 46,
          src: "image45.jpg",
        },
        {
          id: 47,
          src: "image46.jpg",
        },
        {
          id: 48,
          src: "image47.jpg",
        },
        {
          id: 49,
          src: "image48.jpg",
        },
        {
          id: 50,
          src: "image49.jpg",
        },
      ],
    };
  },
};
</script>

