const calculateDistance = (obj, latitude, longitude) => {
  const vendorLat = parseFloat(obj.latitude);
  const vendoLong = parseFloat(obj.longitude);
  const myLat = latitude;
  const myLong = longitude;

  const earthRadius = 3958.8; //miles

  const dLat = toRadians(myLat - vendorLat);
  const dLon = toRadians(myLong - vendoLong);

  const chordLength =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(vendorLat)) *
      Math.cos(toRadians(myLat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const angularDistance =
    2 * Math.atan2(Math.sqrt(chordLength), Math.sqrt(1 - chordLength));

  const distance = earthRadius * angularDistance;
  return distance;
};

// Helper function to convert degrees to radians
const toRadians = (degrees) => (degrees * Math.PI) / 180;

// Sort the array based on the distance from the arbitrary latitude and longitude
// tacos.sort((a, b) => calculateDistance(a) - calculateDistance(b));

export { calculateDistance };
