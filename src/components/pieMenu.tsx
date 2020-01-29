import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
  { name: 'Group A', value: 100 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 100 },
  { name: 'Group D', value: 100 },
  { name: 'Group E', value: 100 },
  { name: 'Group F', value: 100 },
  { name: 'Group G', value: 100 },
  { name: 'Group H', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const handleClick = (e: any) => {
    console.log('clicked')
    console.log(e)
}

export default class Example extends PureComponent {

  render() {
    return (
      <PieChart width={180} height={180} >
        <Pie
          data={data}
          innerRadius={20}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Pie
          data={data}
          innerRadius={20}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          onClick={handleClick} 
        >
          {
            data.map((entry, index) => <Cell onClick={handleClick} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}
