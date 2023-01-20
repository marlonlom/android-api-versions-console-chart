#!/usr/bin/env node

import { mapToSimpleAndroidDistributionInfo, retrieveDistributionUrlContents } from "../src/main/javascript/fetch-android-distributions.js";
import { generatePieChart } from "../src/main/javascript/generate-piecharts.js";
import { environment } from "../src/main/javascript/environment.js";

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
