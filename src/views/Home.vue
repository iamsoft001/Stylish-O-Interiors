<template>

   <div class="home">
            <div class="bar">
      <v-container>
        <v-row justify="center">
        <v-col > 
           
        <div>
            <div class="display-3 font-weight-black yellow--text text-center mb-3">HOME OF INTERIOR DESIGNS</div>
            <div class="display-3 font-weight-black yellow--text text-center mb-7">FOR YOUR VARIOUS ABODE</div>
            <div class="font-weight-bold text-center">Finally be a King and Queen at home with fresh, ambients and soft interior designs.</div>
            </div>
        </v-col>
        </v-row>

         <v-row justify="center">
                    <v-btn rounded item: to="/About" dark> Read More</v-btn>
         </v-row>
        </v-container>
        </div>
      </div>
    
    
</template>

<script>
export default {
    name: 'Home'
};
</script>
    
<style>
   .home{
    background-image: url(/image4.jpg);
    background-size: cover;
    height: 100%;
} 
.bar{
   padding-top: 150px;
}
</style>