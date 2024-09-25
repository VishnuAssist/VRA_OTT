import ReactEcharts from 'echarts-for-react';

const PieChart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'Voucher Redemption by Type',
        // subtext: 'Product Sales',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Sales',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Watches' },
            { value: 735, name: 'Lifestyle' },
            { value: 580, name: 'Beverages' },
            { value: 484, name: 'Food' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
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

export default PieChart;
