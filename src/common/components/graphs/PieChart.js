/******************************************************************************
 * Created Date: Friday February 25th 2022                                    *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Saturday, 26th February 2022 5:48:08 pm                     * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/components/graphs/PieChart.js                            *
 ******************************************************************************/

//This is a great library for highly customizable React chart components.
//I use it frequently. See more here: https://nivo.rocks/pie/
import { ResponsivePie } from "@nivo/pie";

export const PieChart = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    innerRadius={0.35}
    padAngle={3}
    cornerRadius={2}
    activeOuterRadiusOffset={8}
    colors={{ scheme: "nivo" }}
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
