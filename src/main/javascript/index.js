import { mapToSimpleAndroidDistributionInfo, retrieveDistributionUrlContents } from "./fetch-android-distributions.js";
import { generatePieChart } from "./generate-piecharts.js";
import { environment } from "./environment.js";

export function displayChart() {
  retrieveDistributionUrlContents()
    .then(
      (response) => {
        const apiLevels = mapToSimpleAndroidDistributionInfo(response);
        const pieChart = generatePieChart(apiLevels);
        console.log(environment.chartTitle);
        console.log(pieChart.toString());
        console.log('');
      }
    )
    .catch(
      (err) => console.log('No Chart at the moment. Sorry.', err)
    );
}
