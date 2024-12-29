<template>
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true, // Show the loading animation initially
      };
    },
    mounted() {
      // Simulate loading time, hide after 2 seconds
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  };
  </script>
  
  <style scoped>
  /* Fullscreen overlay for the loading animation */
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000; /* Dark background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  /* Spinner animation */
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.2);
    border-top: 5px solid #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  