import { parse } from "@loaders.gl/core"
import { CSVLoader } from "@loaders.gl/csv"

const DATA_URL = 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv' // eslint-disable-line

const loadData = async () => {
  const data = await parse(fetch(DATA_URL), CSVLoader)
  return data
}

export default { loadData }
