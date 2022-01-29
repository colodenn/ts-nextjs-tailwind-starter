// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function LineChart() {
  const data = [
    {
      id: 'japan',
      color: 'hsl(121, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 141,
        },
        {
          x: 'helicopter',
          y: 9,
        },
        {
          x: 'boat',
          y: 155,
        },
        {
          x: 'train',
          y: 119,
        },
        {
          x: 'subway',
          y: 28,
        },
        {
          x: 'bus',
          y: 36,
        },
        {
          x: 'car',
          y: 185,
        },
        {
          x: 'moto',
          y: 217,
        },
        {
          x: 'bicycle',
          y: 231,
        },
        {
          x: 'horse',
          y: 297,
        },
        {
          x: 'skateboard',
          y: 124,
        },
        {
          x: 'others',
          y: 286,
        },
      ],
    },
  ];

  const isServer = typeof window === 'undefined';
  return (
    <>
      {!isServer && (
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 50, bottom: 60, left: 20 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=' >-.2f'
          curve='cardinal'
          axisTop={null}
          axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          enableGridX={false}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={null}
          colors={{ scheme: 'nivo' }}
          enablePoints={false}
          useMesh={true}
        />
      )}
    </>
  );
}
