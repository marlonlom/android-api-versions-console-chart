import fetch from "node-fetch";
import { environment } from "./environment.js";

export function retrieveDistributionUrlContents() {
  return new Promise((resolveIt, rejectIt) => {
    const settings = { method: "Get" };
    fetch(environment.distribution_url, settings)
      .then(res => res.json())
      .then((json) => { resolveIt(json); })
      .catch((err) => { rejectIt(err); });
  });
}

export function mapToSimpleAndroidDistributionInfo(response) {
  return response
    .map(
      j => Object.assign({}, {
        name: j.name,
        version: j.version,
        apiLevel: j.apiLevel,
        distributionPercentage: j.distributionPercentage
      }))
    .sort(
      (a, b) => a.apiLevel - b.apiLevel
    );
}
