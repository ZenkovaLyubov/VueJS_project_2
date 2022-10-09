<template>
  <Line :chart-data="chartData" />
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'VueChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [1, 2, 3, 4, 5],
        chartData: [10, 20, 30, 40, 50],
        options: {
          type: Object
        }
      }

    }

  },
}
</script>
