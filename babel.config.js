/******************************************************************************
 * Created Date: Sunday February 27th 2022                                    *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Sunday, 27th February 2022 4:48:45 pm                       * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /babel.config.js                                                     *
 ******************************************************************************/

module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};
