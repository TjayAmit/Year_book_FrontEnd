import { ResponsiveLine } from '@nivo/line';
import { useState, useEffect } from 'react';
import {
  DataHeader,
  GraduatesData,
  CaseData,
  SpecializationData,
} from './Data';
import { Box, Select } from '@chakra-ui/react';

const LineGraph = () => {
  const [lineGraphData, setLineGraphData] = useState([]);
  const [year, setYear] = useState([]);
  const [yr, setYr] = useState('2022');

  const configYear = () => {
    //CHANGES APPLY HERE
    //Configure dropdown year for dashboard of User UI
    const list = [];
    let year = new Date().getFullYear();
    for (let i = year; i > 2018; i--) {
      list.push(i);
    }
    setYear(list);
  };

  const configLineGraph = () => {
    //CHANGE APPLY HERE TO DISPLAY DATA IN LINE GRAPH FOR EVERY SPECIALIZATION
    let list = [];

    DataHeader.forEach(dataHeader => {
      const groups = {};
      GraduatesData.filter(data => data.header === dataHeader.header).forEach(
        function (val) {
          if (val.batch in groups) {
            groups[val.batch].push(val._id);
          } else {
            groups[val.batch] = new Array(val._id);
          }
        }
      );
      console.log(groups);
      list.push({
        id: dataHeader.header,
        color: 'hsl(169, 100%, 94%)',
        data: [
          groups?.batch
            ? { x: '2019', y: groups.batch.length }
            : { x: '2019', y: 0 },
          groups?.batch
            ? { x: '2020', y: groups.batch.length }
            : { x: '2020', y: 0 },
          groups?.batch
            ? { x: '2021', y: groups.batch.length }
            : { x: '2021', y: 0 },
          groups?.batch
            ? { x: '2022', y: groups.batch.length }
            : { x: '2022', y: 0 },
        ],
      });
    });

    setLineGraphData(list);
  };

  useEffect(() => {
    configYear();
    configLineGraph();
  }, []);

  return (
    <Box p={5}>
      <Select border={2} width={40} placeholder="Select option">
        {year.map(value => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </Select>
      <Box h={'40vh'}>
        <ResponsiveLine
          data={lineGraphData}
          margin={{ top: 60, right: 40, bottom: 60, left: 60 }}
          xScale={{ type: 'point' }}
          yFormat=" >-.0f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 50,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -50,
            legendPosition: 'middle',
          }}
          pointSize={5}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={4}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          curve="catmullRom"
          lineWidth={3}
          legends={[
            {
              anchor: 'top',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: -50,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 170,
              itemHeight: 20,
              itemOpacity: 1,
              symbolSize: 14,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default LineGraph;
