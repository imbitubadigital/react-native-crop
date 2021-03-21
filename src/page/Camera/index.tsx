import React, {useCallback, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Tour from '../../components/Tour';
import {useTour} from '../../hooks/Tour';
import {MessagesTour} from '../../utils/messagesTour';
import * as S from './styles';

const Camera: React.FC = () => {
  const navigation = useNavigation();
  const {currentTour, setCurrentTour} = useTour();
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

  console.log('currentTourcurrentTour', currentTour);

  function next(currentOrdem: number) {
    if (currentOrdem === 6) {
      setCurrentTour(0);
    }
    setCurrentTour(currentOrdem + 1);
  }

  function prev(currentOrdem: number) {
    setCurrentTour(currentOrdem - 1);
    if (currentOrdem === 5) {
      navigation.navigate('Home');
    }
  }

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
        <Tour
          order={5}
          position="top"
          next={next}
          prev={prev}
          title={MessagesTour[5]}>
          <S.BtnBack onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-back-ios" color="#fff" size={40} />
          </S.BtnBack>
        </Tour>

        <Tour
          order={6}
          position="top"
          next={next}
          prev={prev}
          title={MessagesTour[6]}>
          <S.Btn onPress={takePhoto}>
            <Icon name="camera-alt" size={40} />
          </S.Btn>
        </Tour>
        <S.ViewFake />
      </S.Footer>
    </>
  );
};

export default Camera;
