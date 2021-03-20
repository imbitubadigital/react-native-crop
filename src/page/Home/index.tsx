import React, {useCallback, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

const Home: React.FC = () => {
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
        <S.Btn onPress={takePhoto}>
          <Icon name="camera-alt" size={40} />
        </S.Btn>
      </S.Footer>
    </>
  );
};

export default Home;
