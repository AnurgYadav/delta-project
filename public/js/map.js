maptilersdk.config.apiKey = mapToken;
    
const map = new maptilersdk.Map({
  container: 'map', // container id
  style: maptilersdk.MapStyle.STREETS, // style URL
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 10 // starting zoom
});

const marker = new maptilersdk.Marker({color: "red"})
  .setLngLat(listing.geometry.coordinates) // Listing.geometry.coordinates
  .setPopup(new maptilersdk.Popup({offset: 25})
  .setHTML(`<h4>${listing.location}</h4><p>Exact Location will be provided after booking</p>`)) // Listing.location
  .addTo(map);