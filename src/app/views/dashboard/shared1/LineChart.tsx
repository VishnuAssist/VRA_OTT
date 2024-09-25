import ReactEcharts from 'echarts-for-react';

const LineChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Employee Usage Over Time',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
        },
        formatter: '{b0}<br />{a0}: {c0}',
      },
      legend: {
        data: ['Employee Usage'],
        left: 'left',
      },
      xAxis: {
        name: 'Date',
        nameTextStyle: {
            fontSize: 14,         
            fontWeight: 'bold',
          },
        nameLocation: 'center',
        nameGap: 30,
        type: 'category',
        boundaryGap: false,
        data: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01'],
        axisLabel: {
          formatter: (value: string) => new Date(value).toLocaleDateString(),
        },
      },
      yAxis: {
        type: 'value',
        name: 'Number Of Employee Using Id',
        nameLocation: 'middle', 
        nameGap: 40,            
        nameTextStyle: {
          fontSize: 14,    
          fontWeight: 'bold',     
        },
      },
      series: [
        {
          name: 'Number Of Employee Using Id', 
          type: 'line',
          data: [150, 230, 224, 218, 135, 147, 260],
          smooth: true,
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

export default LineChart;
