const horizonFeetCalc = (heightInFeet) => {
  // horizon is calculated by multiplying the square root of the height(in feet) of the pillar, by 1.22459
  let squareRootOfHeight = Math.sqrt(heightInFeet);
  return squareRootOfHeight * 1.22459;
};

const horizonMetersCalc = (heightInMeters) => {
  // horizon is calculated by square root of (height in meters * 13)
  return Math.sqrt(heightInMeters * 13);
};
