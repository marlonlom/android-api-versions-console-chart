import Pie from "cli-pie";
import randomcolor from "randomcolor";

const mapToPieDataItem = v => Object.assign({}, {
  label: `V${v.version}: ${v.name}`,
  value: v.distributionPercentage,
  color: randomcolor({
    luminosity: 'dark',
    format: 'rgbArray'
  })
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
