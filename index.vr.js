import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

export default class reactroduction_vr_app extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <View>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 0, -3] }],
            }}
          >
            Todo App
          </Text>
        </View>
        <View>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.3,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 1, 10] }, {rotateY: 180}],
            }}
          >
            TODO example APP under construction...
          </Text>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.3,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 1, 10] }, {rotateY: 180}],
            }}
          >
            ( NOT REALLY, I SUFFER A LOT OF SEEK MOTION :( )
          </Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent(
  'reactroduction_vr_app',
  () => reactroduction_vr_app
);
