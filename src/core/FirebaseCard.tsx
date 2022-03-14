import React, {useState, useEffect} from 'react';
import {StyleProp, TouchableOpacity} from 'react-native';
import storage from '@react-native-firebase/storage';
import {Text} from 'react-native-paper';
import FastImage, {ImageStyle} from 'react-native-fast-image';

type FirebaseCardProps = {
  title?: string | null;
  firebaseUri?: string | null;
  key: string;
  imageStyle?: StyleProp<ImageStyle>;
  variant?: 'fullBleed' | 'block' | 'listItem';
} & Omit<React.ComponentProps<typeof TouchableOpacity>, 'children'>;

export const FirebaseCard: React.FC<FirebaseCardProps> = ({
  firebaseUri,
  title,
  imageStyle,
  variant = 'fullBleed',
  ...rest
}) => {
  const [imageUri, setImageUri] = useState('');

  const titleStyle = getTitleStyle(variant);

  useEffect(() => {
    if (firebaseUri) {
      const getImage = async () => {
        const path = await storage().ref(firebaseUri).getDownloadURL();
        setImageUri(path);
      };
      getImage();
    }
  }, [firebaseUri]);

  if (variant !== 'listItem') {
    return (
      <TouchableOpacity {...rest}>
        {title && <Text style={titleStyle}>{title}</Text>}
        {firebaseUri && imageUri !== '' ? (
          <FastImage
            resizeMode="cover"
            source={{uri: imageUri}}
            style={imageStyle}
          />
        ) : (
          <FastImage
            resizeMode="cover"
            source={require('../assets/placeholder.webp')}
            style={imageStyle}
          />
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      {...rest}
      style={{
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
      }}>
      {firebaseUri && imageUri !== '' ? (
        <FastImage
          resizeMode="cover"
          source={{uri: imageUri}}
          style={imageStyle}
        />
      ) : (
        <FastImage
          resizeMode="cover"
          source={require('../assets/placeholder.webp')}
          style={imageStyle}
        />
      )}
      {title && <Text style={titleStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};

const getTitleStyle = (
  variant: FirebaseCardProps['variant'],
): StyleProp<Text> => {
  switch (variant) {
    case 'block':
      return {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 4,
        paddingHorizontal: 4,
      };
    case 'fullBleed':
      return {
        fontFamily: 'Nunito',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 16,
        textAlign: 'center',
      };
    case 'listItem':
      return {
        fontSize: 16,
        fontFamily: 'Nunito',
        textAlign: 'center',
        paddingLeft: 16,
      };
  }
};
