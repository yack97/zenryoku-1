<template>
  <div class="user-profile">
    <div class="user-info">
      <img :src="user.avatar" alt="User Avatar" class="avatar">
      <div class="user-details">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <button @click="editProfile">Edit Profile</button>
      </div>
    </div>
    <div class="progress-chart">
      <!-- Gráfica de progreso -->
      <canvas id="progressChart"></canvas>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/150',
        progress: [
          { label: 'Task 1', value: 75 },
          { label: 'Task 2', value: 50 },
          { label: 'Task 3', value: 90 },
        ],
      },
      chart: null,
    };
  },
  mounted() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.user.progress.map(item => item.label),
        datasets: [{
          label: 'Progress',
          data: this.user.progress.map(item => item.value),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  },
  methods: {
    editProfile() {
      // Lógica para mostrar el formulario de edición
      console.log('Edit Profile clicked');
    }
  }
};
</script>

<style scoped>
.user-profile {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.user-details {
  text-align: left;
}

.progress-chart {
  width: 400px;
}
</style>
