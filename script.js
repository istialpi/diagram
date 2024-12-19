window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Laporan Penjualan",
    },
    legend: {
      horizontalAlign: "center",
      verticalAlign: "top",
    },
    data: [
      //array of dataSeries
      {
        //dataSeries - first quarter
        /*** Change type "column" to "bar", "area", "line" or "pie"***/
        type: "column",
        name: "2022",
        color: "pink",
        showInLegend: true,
        dataPoints: [
          { label: "Januari", y: 4017 },
          { label: "Febuari", y: 6135 },
          { label: "Maret", y: 7091 },
          { label: "April", y: 5841 },
          { label: "Mei", y: 5036 },
          { label: "Juni", y: 4547 },
          { label: "Juli", y: 3467 },
          { label: "Agustus", y: 3970 },
          { label: "September", y: 6313 },
          { label: "Oktober", y: 3595 },
          { label: "November", y: 9207 },
          { label: "Desember", y: 5945 },
        ],
      },
      {
        //dataSeries - second quarter
        type: "column",
        name: "2023",
        color: "black",
        showInLegend: true,
        dataPoints: [
          { label: "Januari", y: 2416 },
          { label: "Febuari", y: 4136 },
          { label: "Maret", y: 7935 },
          { label: "April", y: 8004 },
          { label: "Mei", y: 9505 },
          { label: "Juni", y: 5026 },
          { label: "Juli", y: 6108 },
          { label: "Agustus", y: 6343 },
          { label: "September", y: 9404 },
          { label: "Oktober", y: 9280 },
          { label: "November", y: 9287 },
          { label: "Desember", y: 8689 },
        ],
      },
    ],
    /** Set axisY properties here*/
    // axisY: {
    //   prefix: "$",
    //   suffix: "K",
    // },
  });

  chart.render();
};
