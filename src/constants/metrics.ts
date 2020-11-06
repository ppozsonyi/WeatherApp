import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const bigIcon = screenWidth * 0.25;
const smallIcon = screenWidth * 0.1;

export default { screenHeight, screenWidth, smallIcon, bigIcon }