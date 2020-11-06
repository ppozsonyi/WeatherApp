import Geocoder from 'react-native-geocoder-reborn';
import Geolocation from '@react-native-community/geolocation';

interface Position {
    lat: number,
    lng: number,
}

function getCurrentCoordinates(): Promise<Position> {
    return new Promise<Position>((resolve, reject) => {
        Geolocation.getCurrentPosition(location => {
            const position: Position = { lat: location.coords.latitude, lng: location.coords.longitude }
            resolve(position);
        }, error => reject(error));
    })
}

function getLocationByCoords(position: Position): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        Geocoder.geocodePosition(position).then(res => {
            const localityFromAddress: string[] = res[0].formattedAddress.split(',');
            const localityIndex = localityFromAddress.length - 2;
            const locality: string = res[0].locality || localityFromAddress[localityIndex];
            resolve(locality) 
        })
        .catch(err => reject(err));
    });
}

export default { getCurrentCoordinates, getLocationByCoords }