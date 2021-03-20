import React, {useCallback, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import * as S from './styles';

const Camera: React.FC = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState('');
  const takePhoto = useCallback(() => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      // cropperActiveWidgetColor: 'blue', // cor controles apenas android
      // cropperStatusBarColor: 'purple', // cor status bar apenas android
      // cropperToolbarColor: 'yellow', // cor header bar apenas android
      // cropperToolbarTitle: 'Recortar',
      cropperCircleOverlay: true,
    })
      .then((image: any) => {
        setPhoto(image.path);
      })
      .catch((e) => {
        console.log('EORROROROROR', e);
      });
  }, []);

  return (
    <>
      <S.Container>
        {photo ? (
          <S.Img source={{uri: photo}} resizeMode="contain" />
        ) : (
          <S.Info>Aqui algumas instruções</S.Info>
        )}
      </S.Container>
      <S.Footer>
        <S.BtnBack onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back-ios" color="#fff" size={40} />
        </S.BtnBack>
        <S.Btn onPress={takePhoto}>
          <Icon name="camera-alt" size={40} />
        </S.Btn>
        <S.ViewFake />
      </S.Footer>
    </>
  );
};

export default Camera;
