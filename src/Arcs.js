import React, { Component } from 'react';

const toTotals = (lengths) => lengths.reduce((acc, current) => {
  const last = acc.length ? acc[acc.length - 1] : 0;
  acc.push(current + last);
  return acc;
}, []);

const Arcs = ({
  outerRadius,
  width,
  arcs,
  cx,
  cy,
  label="",
}) => {
  const totals = toTotals(arcs);
  console.log(totals);
  // TODO How to account for the start block?
  const angles = totals.map(arc => arc * Math.PI * 2 / 52.5)
  const innerRadius = outerRadius + width;
  const lines = angles.map(angle => (
    <line
      x1={Math.cos(angle) * outerRadius + cx}
      y1={Math.sin(angle) * outerRadius + cy}
      x2={Math.cos(angle) * innerRadius + cx}
      y2={Math.sin(angle) * innerRadius + cy}
      key={angle}
    />
  ));
  return (
    <g
      stroke="green"
    >
      {lines}
    </g>
  );
};

export default Arcs;

export {
  toTotals,
}
