import Pie from "cli-pie";

const mapToPieDataItem = v => Object.assign({}, {
  label: `V${v.version}: ${v.name}`,
  value: v.distributionPercentage
});

const piechartConfig = {
  legend: true,
  no_ansi: false
};

export function generatePieChart(valuesList) {
  return new Pie(
    valuesList.length,
    valuesList.map(mapToPieDataItem),
    piechartConfig
  );
}
