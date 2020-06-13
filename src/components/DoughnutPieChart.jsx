import React, { PureComponent } from 'react';

import { PieChart, Pie, Sector } from 'recharts';

//Datos recibidos. Estos entrarán por un props
// const data = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
//   ];

const renderActiveShape=(props)=> {
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
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#230000">{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#230000"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 7}
        outerRadius={outerRadius + 12}
        fill="#230000"
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke="#230000" fill="none" />
      <circle cx={ex} cy={ey} r={2} fill="#230000" stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#230000">{`Área: ${value} m2`}</text>
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

class DoughnutPieChart extends PureComponent  {
    // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';
    constructor(props){
        super(props);
        this.state={
            activeIndex: 0,
            data:props.data,
        };
    };
  
    onPieEnter = (data, index) => {
      this.setState({
        activeIndex: index,
      });
    };
  
    render() {
      return (
        <PieChart width="100%" height="100%">
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={this.state.data}
            cx={400}
            cy={400}
            innerRadius={120}
            outerRadius={180}
            fill="#9E1C00"
            // fill={fillGloball}
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      );
    }
};

export default DoughnutPieChart;

  