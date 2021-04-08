<template>
<v-app>
     <v-app-bar color="brown darken-4" dark app>
            <v-btn class="hidden-md-and-up" @click="drawer = !drawer"><v-icon> mdi-menu </v-icon></v-btn>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn  class="hidden-sm-and-down" item: to="/">Home</v-btn>
            <v-btn  class="hidden-sm-and-down" item: to="/Gallery">Gallery</v-btn>
            <v-btn  class="hidden-sm-and-down" item: to="/Store">Shopping</v-btn>
            <v-btn  class="hidden-sm-and-down" item: to="/About">About Us</v-btn>
            <v-btn  class="hidden-sm-and-down" href="tel:08169391852">Call</v-btn>
            <v-btn  class="hidden-sm-and-down" item: to="/Login">Login</v-btn>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index"
                    :to="item.to"
                    link
                    >
                        <v-list-item-content>
                            {{item.title}}
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
       
   
       
                       <v-main>
                                 <router-view></router-view>
                        </v-main>
    <v-footer fixed
    color="brown darken-4"
    padless
    app
  >
      <v-col
        class="brown darken-4 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Stylish O Interiors</strong>
      </v-col>

       
    
  </v-footer>  
  </v-app>   
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            appTitle: 'Stylish O Interiors',
            drawer: false,
            items: [
               
                { title: 'Home', to:"/"},
                { title: 'Gallery', to:"/Gallery"},
                { title: 'Shopping', to:"/Store"},
                { title: 'About Us', to:"/About"},
                { title: 'Call'},
                 { title: 'Login', to:"/Login"}
            ]
        };
    },
};
</script>

<style>
   
</style>