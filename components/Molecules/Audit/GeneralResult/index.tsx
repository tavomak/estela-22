import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { getColorSchema, getColorText } from 'helpers';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type Props = {
  categories: object[],
}

const GeneralResult = ({ categories }: Props) => {
  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.10,
          },
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
            color: '#232323',
            fontSize: '12px',
          },
          value: {
            formatter: (val) => val.toString(),
            fontSize: '42px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
      },
    },
    stroke: {
      lineCap: 'round',
    },
  };

  return (
    <ul className="d-lg-flex justify-content-between">
      {categories.length > 0 && categories.map((item) => (
        <li key={item[1].title} className="text-center">
          {(typeof window !== 'undefined') && (
            <Chart
              options={{
                ...options,
                plotOptions: {
                  radialBar: {
                    ...options.plotOptions.radialBar,
                    dataLabels: {
                      ...options.plotOptions.radialBar.dataLabels,
                      value: {
                        ...options.plotOptions.radialBar.dataLabels.value,
                        color: getColorText(item[1].score),
                      },
                    },
                  },
                },
                labels: [item[1].title],
                fill: {
                  ...options.fill,
                  gradient: {
                    ...options.fill.gradient,
                    colorStops: getColorSchema(item[1].score),
                  },
                },
              }}
              series={[(item[1].score * 100)]}
              height={180}
              type="radialBar"
            />
          )}
          <h3 className="fs-5" style={{ color: getColorText(item[1].score) }}>{item[1].title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default GeneralResult;
