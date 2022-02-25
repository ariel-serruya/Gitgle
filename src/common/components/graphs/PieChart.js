/******************************************************************************
 * Created Date: Friday February 25th 2022                                    *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 25th February 2022 1:38:27 am                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/components/graphs/PieChart.js                            *
 ******************************************************************************/

import { ResponsivePie } from "@nivo/pie";

export const PieChart = ({ data /* see data tab */ }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
    innerRadius={0.35}
    padAngle={3}
    cornerRadius={2}
    activeOuterRadiusOffset={8}
    colors={{ scheme: "green_blue" }}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLabel="id"
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    legends={[]}
  />
);
