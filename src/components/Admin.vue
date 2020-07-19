<template>
  <div class="Home">
    <div class="container">
      <ul>
        <li v-for="(img, index) in imagesLink" :key="index">
          <div class="row">
            <div class="s12 m7 l5">
              <div class="card">
                <div class="card-image">
                  <img :src="img" />
                </div>

                <div class="card-action">
                  <i class="material-icons" @click="deleteFile(imagesNames[index])">delete</i>
                  <p>{{imagesNames[index]}}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="fixed-action-btn">
        <router-link :to="{name: 'Add'}">
          <a class="btn-floating btn-large orange accent-2">
            <i class="large material-icons">add</i>
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from "../assets/firebase.js";
//import router from "vue-router";

export default {
  name: "Admin",
  data() {
    return {
      imagesLink: [],
      imagesNames: [],
      feedback: null
    };
  },
  methods: {
    deleteFile(name) {
      storage
        .ref("/index")
        .child(name)
        .delete()
        .then(function() {
          //router.reload();
          location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    storage
      .ref("index")
      .listAll()
      .then(res => {
        res.items.forEach(img => {
          img.getDownloadURL().then(url => {
            this.imagesNames.push(img.name);
            this.imagesLink.push(url);
          });
        });
      })
      .catch(err => (this.feedback = err.message));
  }
};
</script>

<style scoped>
.add-button a {
  position: absolute;
  float: left;
}
</style>
