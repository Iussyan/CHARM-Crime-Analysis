const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Rjay'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 0],
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

  const chas = document.getElementById('MonthlyCrime');

  new Chart(chas, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [15, 12, 10, 20, 8, 6],
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

  const cha = document.getElementById('FrequentCrime');

  new Chart(cha, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [15, 12, 10, 20, 8, 6],
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

  const chs = document.getElementById('CrimeHotspot');

  new Chart(chs, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [15, 12, 10, 20, 8, 6],
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



// Open modal
function openModal(modalId, chartId, largeChartId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";

    // Copy the chart data to the larger chart
    const originalChart = Chart.getChart(chartId);
    const largeChartCanvas = document.getElementById(largeChartId);
    if (originalChart && largeChartCanvas) {
      // Destroy any existing chart on the large canvas to avoid duplication
      if (Chart.getChart(largeChartId)) {
        Chart.getChart(largeChartId).destroy();
      }

      // Create a new chart on the large canvas with the same configuration
      new Chart(largeChartCanvas, originalChart.config);
    }
  }
}

// Close modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Export chart as an image
function exportChart(chartId) {
  const chart = document.getElementById(chartId);
  if (chart) {
    const link = document.createElement('a');
    link.href = chart.toDataURL('image/png');
    link.download = 'chart.png';
    link.click();
  }
}

