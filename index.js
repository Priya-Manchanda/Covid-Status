$.ajax({
  type: "get",
  url: "https://api.covid19api.com/summary",
  success: function (response) {
    console.log(response);
    for (var i = 0; i < response.Countries.length; i++) {
      var countryname = `<tr><td>${response.Countries[i].Country}</td><td>${
        response.Countries[i].TotalConfirmed
      }</td><td>${
        response.Countries[i].TotalConfirmed -
        response.Countries[i].TotalRecovered
      }</td><td>${response.Countries[i].TotalRecovered}</td><td>${
        response.Countries[i].TotalDeaths
      }</td></tr>`;
      $("#tbody").append(countryname);
    }
    $("#tabledata").DataTable();
  },
  error: function (response) {
    console.log(response);
  },
});
