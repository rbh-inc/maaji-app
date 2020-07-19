<template>
  <div class="Add">
    <div class="container selection-section">
      <h4 class="center">Select Photos</h4>
      <div class="upload-section">
        <!-- <div class="myProgress">
          
          <div class="myBar" :style="{ 'width':`${uploadProgress}%` }">
            <p>{{uploadProgress}}% complete</p>
          </div>
        </div>-->

        <div class="selector-button">
          <input class type="file" multiple accept="image/*" @change="uploadFiles" />
        </div>
      </div>
      <p v-if="feedback" class="center red-text">{{feedback}}</p>
    </div>
  </div>
</template>

<script>
import { storage } from "../assets/firebase.js";

export default {
  name: "Add",
  data() {
    return {
      uploadProgress: 0,
      feedback: null
    };
  },
  methods: {
    uploadFiles(e) {
      var progress;
      for (let i = 0; i < e.target.files.length; ) {
        let file = e.target.files[i];
        let storageRef = storage.ref("index/" + file.name);
        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          function(snapshot) {
            progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
          },
          function(error) {
            this.feedback = error;
            console.log(error);
          },
          function() {
            alert("upload completed");
          }
        );
        i++;
      }
    }
  }
};
</script>

<style scoped>
.selection-section {
  align-items: center;
  margin-top: 30px;
}
.upload-section {
  margin-top: 60px;
}
.myProgress {
  width: 100%;
  background-color: #e9ecef;
  border-radius: 50px;
}

.myBar {
  height: 20px;
  background-color: #00bfa5;
  border-radius: 50px;
}
.selector-button {
  margin-top: 25px;
  font-size: 20px;
  text-align: center;
}
</style>
