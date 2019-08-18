import React, { Component, PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Amount: ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


class Example3 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  findCategory = () => {
    let categoryList = {}
    this.props.data.map(m => categoryList[m.category] ? null : categoryList[m.category] = 0)
    this.props.data.forEach(m => categoryList[m.category]+= m.amount )
    return categoryList
 }

 findHottestCategory = (categories) => {
     const arr = []
     let highest = Object.values(categories).sort(function (a, b) { return b - a })
     const highestC = highest
     let keysSorted = Object.keys(categories).sort(function (a, b) { return categories[b] - categories[a] })
     const topC = keysSorted
     let i = 0
     while (i < highestC.length) {
         arr[i] = { name: topC[i], value: highestC[i] }
         i++
     }
     return arr
     }

  render() {
    let categories = this.findCategory()
    let category = this.findHottestCategory(categories)
    return ( <div className="pie">
      <PieChart  width={460} height={400}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={category}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill=" rgba(219, 86, 208, 0.418)"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
      </div>
    );
  }
}

export default Example3