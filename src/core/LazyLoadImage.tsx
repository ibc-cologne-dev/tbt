import React, {useState, useEffect} from 'react';
import storage from '@react-native-firebase/storage';
// import FastImage, {ImageStyle} from 'react-native-fast-image';
import {StyleProp, Image as FastImage, ImageStyle} from 'react-native';

type FirebaseCardProps = {
  firebaseUri?: string | null;
  imageStyle?: StyleProp<ImageStyle>;
};

export const LazyLoadImage: React.FC<FirebaseCardProps> = ({
  firebaseUri,
  imageStyle,
}) => {
  const [imageUri, setImageUri] = useState('');

  useEffect(() => {
    if (firebaseUri) {
      const getImage = async () => {
        const path = await storage().ref(firebaseUri).getDownloadURL();
        setImageUri(path);
      };
      getImage();
    }
  }, [firebaseUri]);

  if (firebaseUri && imageUri !== '') {
    return (
      <FastImage
        resizeMode="cover"
        source={{uri: imageUri}}
        style={imageStyle}
      />
    );
  }

  return (
    <FastImage
      resizeMode="cover"
      source={require('../assets/placeholder.webp')}
      style={imageStyle}
    />
  );
};
