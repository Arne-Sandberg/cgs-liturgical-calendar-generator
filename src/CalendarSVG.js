import React, { Component } from 'react';
import Arcs from './Arcs';

const CalendarSVG = ({
  squareSize = 14.5,
  outerRadius = 11.75/2,
  arcThickness = 2.5/2,
  prismThickness = 1,
  prismCount = 52,
  startPrismWidthPrisms = 0.5,
  prismGapWidthPrisms = 0,
  outerArcs = [ 38.5, 14 ],
  innerArcs=[.5, 24, 1, 6, 1, 6, 6, 3, 1, 4]
}) => {
  const cx = squareSize / 2;
  const cy = squareSize / 2;
  return (
    <g stroke="black" fill="white" fillOpacity="0" strokeWidth="0.05">
      <rect x="0" y="0" width={squareSize} height={squareSize} />
      <circle cx={cx} cy={cy} r={outerRadius} />
      <circle cx={cx} cy={cy} r={outerRadius + arcThickness} />
      <circle cx={cx} cy={cy} r={outerRadius - prismThickness} />
      <circle cx={cx} cy={cy} r={outerRadius - prismThickness - arcThickness} />

      <Arcs
        outerRadius={outerRadius}
        width={arcThickness}
        arcs={outerArcs}
        cx={cx}
        cy={cy}
        label="Outer"
      />

      <Arcs
        outerRadius={outerRadius - arcThickness - prismThickness}
        width={arcThickness}
        arcs={innerArcs}
        cx={cx}
        cy={cy}
        label="Inner"
      />

    </g>
  );
};

export default CalendarSVG;
