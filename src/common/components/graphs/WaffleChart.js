/******************************************************************************
 * Created Date: Saturday February 26th 2022                                  *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Saturday, 26th February 2022 6:26:18 pm                     * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/common/components/graphs/WaffleChart.js                         *
 ******************************************************************************/

import { ResponsiveWaffle } from "@nivo/waffle";

export const WaffleChart = ({ data, total }) => (
  <ResponsiveWaffle
    data={data}
    total={total}
    rows={18}
    columns={14}
    margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
    colors={{ scheme: "nivo" }}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.3]],
    }}
    animate={true}
    motionStiffness={90}
    motionDamping={11}
    legends={[]}
  />
);
