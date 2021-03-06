import d3 from 'd3'
import dimple from 'dimple'
import moment from 'moment'

var svg = dimple.newSvg("main", 590, 400)
svg.attr("viewBox", "0 0 590 400")
svg.attr("preserveAspectRatio", "")
d3.json("https://api.github.com/repos/geelen/typeslab/stats/punch_card", stats => {
  let times = stats.map(stat => {
    let [dayNr, hourNr, count] = stat
    let day = moment().isoWeekday(dayNr).format("dddd")
    let hour = moment().hour(hourNr).format("hha")
    return {day, dayNr, hour, hourNr, count}
  })
  var myChart = new dimple.chart(svg, times)
  myChart.setBounds(95, 25, 475, 335)

  let x = myChart.addCategoryAxis("x", "hour")
  x.addOrderRule("hourNr")
  let y = myChart.addCategoryAxis("y", "day")
  y.addOrderRule("dayNr", true)
  myChart.addMeasureAxis("z", "count")
  myChart.addSeries()
  myChart.draw()
})
