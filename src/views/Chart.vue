<template>
  <div class='chartContain'>
    <canvas id="myChart"></canvas>
    <div class='uri'>
      <a href='https://www.chartjs.org/docs'>https://www.chartjs.org/docs</a>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  data: () => {
    return {
      crt: ''
    }
  },
  mounted () {
    const _this = this
    _this.crt = new Chart(document.querySelector('#myChart'), {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'irkudos',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(0, 0, 0, 0)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
}
</script>

<style scoped>
.uri {
  margin-top: 20px;
}
a:hover {
  color:#007BFF;
  text-decoration: none;
}
</style>
