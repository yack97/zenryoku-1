<template>
    <div class="video-container">
      <video class="video" controls autoplay >
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
  }
  
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem; /* rounded-lg equivalent */
  }
  </style>