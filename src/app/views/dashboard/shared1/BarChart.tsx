import ReactEcharts from 'echarts-for-react';

const BarChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Access Control Events Per Department',
        // subtext: 'Monthly Sales',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: ['HR', 'Sales', 'It', 'Marketing', 'Finance'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: [120, 200, 150, 80, 70],
          barWidth: '50%',
          itemStyle: {
            color: '#3398DB',
          },
        },
      ],
    };
  };

  return (
    <div>
      <ReactEcharts option={getOption()} style={{ height: '400px', width: '100%' }} />
    </div>
  );
};

export default BarChart;
