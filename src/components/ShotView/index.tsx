/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Image,
  Platform,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Share from 'react-native-share';
import ViewShot, {captureRef} from 'react-native-view-shot';
import {styles} from './styles';

const PlayGround = () => {
  const viewShotRef = useRef<ViewShot>(null);
  const [imagePath, setImagePath] = useState('');

  const captureScreen = async () => {
    if (!viewShotRef.current) {
      console.error('viewShotRef is not set');
      return;
    }
    try {
      const uri = await captureRef(viewShotRef.current, {
        format: 'jpg',
        quality: 0.8,
      });

      if (uri) {
        const formattedUri = Platform.OS === 'android' ? `file://${uri}` : uri;
        setImagePath(formattedUri);
        openShareOptions(formattedUri);
      } else {
        console.error('Capture failed: URI is empty');
      }
    } catch (error) {
      console.error('Capture failed:', error);
    }
  };

  const openShareOptions = async (uri: string) => {
    try {
      if (!uri) {
        console.error('Error sharing: URI is empty');
        return;
      }

      const shareOptions = {
        title: 'Share Receipt',
        url: uri,
        message: 'Here is your transaction receipt!',
      };

      await Share.open(shareOptions);
    } catch (error: any) {
      if (error.message && error.message.includes('User did not share')) {
        console.log('User canceled the share action.');
      } else {
        console.error('Error sharing:', error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <ViewShot ref={viewShotRef as unknown as React.LegacyRef<ViewShot>}>
        <View style={styles.receipt_container as StyleProp<ViewStyle>}>
          <View style={styles.section}>
            <Text style={styles.boldText}>Transaction Details</Text>
            <View style={styles.trx_row}>
              <Text style={styles.text}>Amount</Text>
              <Text style={styles.boldText_}>$10.00</Text>
            </View>
            <View style={styles.trx_row}>
              <Text style={styles.text}>Date and Time</Text>
              <Text style={styles.boldText_}>
                {new Date().toLocaleDateString()} -{' '}
                {new Date().toLocaleTimeString()}
              </Text>
            </View>
            <View style={styles.trx_row}>
              <Text style={styles.text}>Customer ID</Text>
              <Text style={styles.boldText_}>johndoe@gmail.com</Text>
            </View>
            <View style={styles.trx_row}>
              <Text style={styles.text}>TRX type</Text>
              <Text style={[styles.boldText_, {textTransform: 'capitalize'}]}>
                Transfer
              </Text>
            </View>
            <View style={styles.trx_row}>
              <Text style={styles.text}>Status</Text>
              <Text style={[styles.boldText_, {textTransform: 'capitalize'}]}>
                Success
              </Text>
            </View>
          </View>
        </View>
      </ViewShot>
      <View>
        <TouchableOpacity style={styles.btn_container} onPress={captureScreen}>
          <Text style={styles.btn_text}>Share Receipt</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10}}>
        <Text style={[styles.boldText, {marginVertical: 20}]}>
          Captured receipt:
        </Text>
        {imagePath ? (
          <Image style={styles.capturedImage} source={{uri: imagePath}} />
        ) : (
          <Text style={styles.text}>No receipt captured yet.</Text>
        )}
      </View>
    </View>
  );
};

export default PlayGround;
