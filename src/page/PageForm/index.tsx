import React from 'react';

import {StatusBar} from 'react-native';

import * as S from './styles';
import {DatePicker} from '../../components/DatePicker';
import {SubmitHandler, useForm, Controller} from 'react-hook-form';
import {useEffect} from 'react';
//import {} from './interfaces';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {CheckBox} from '../../components/CheckBox';
import {RadioBox} from '../../components/RadioBox';
import {MultipleCheckBox} from '../../components/MultipleCheckBox';
import {ScrollView} from 'react-native-gesture-handler';
import {SelectInput} from '../../components/SelectInput';
const dataGender = [
  {value: 'F', label: 'Feminino'},
  {value: 'M', label: 'Masculino'},
  {value: 'N', label: 'Não informar'},
];

type CreateUserFormData = {
  email: string;
  password: string;
  birthDate: Date;
  terms: boolean;
  preferences: number;
  gender: string;
  tec: number[];
};

const itens = [
  {id: 1, name: 'Batata'},
  {id: 2, name: 'Maçã'},
  {id: 3, name: 'Uva'},
];
const techs = [
  {id: 1, name: 'React'},
  {id: 2, name: 'Java'},
  {id: 3, name: 'IA'},
];

const today = new Date();
today.setHours(0, 0, 0, 0);

const createUserFormSchema = yup.object().shape({
  // name: yup.string().required('Nome obrigatório'),
  // email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  email: yup.string().required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
  gender: yup.string().required('Selecione o sexo'),
  preferences: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Selecione uma opção'),
  birthDate: yup
    .date()
    .default(() => new Date())
    .max(today, 'Date cannot be in the past'),
  terms: yup
    .boolean()
    .required('Deve aceitar os termos.')
    .oneOf([true], 'Aceite as condições.'),

  tec: yup
    .array()
    .of(yup.number().required('aa'))
    .strict()
    .required('Selecione 1 tecnologia')
    .min(1, 'Selecione no mínimo 1 tecnologia'),
});

export function PageForm() {
  // const [date, setDate] = useState(new Date());
  // const [check, setCheck] = useState(false);

  const {
    register,
    setValue,
    getValues,
    control,
    handleSubmit,
    formState,
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
    defaultValues: {
      email: 'antonio@teste.com',
      password: '123456',
      birthDate: new Date('2019-10-06'),
      terms: true,
      preferences: 2,
      gender: 'M',
      tec: [1, 2],
    },
  });

  const vvv = getValues();
  console.log('getValues', vvv);
  // console.log('bbbbb', eventStartDate);

  useEffect(() => {
    register('email');
    register('password');
    register('birthDate');
    register('terms');
    register('preferences');
    register('gender');
    register('tec');
  }, [register]);

  const handleCreateUser: SubmitHandler<CreateUserFormData> = (values) => {
    //  await new Promise(resolver => setTimeout(resolver, 2000))
    console.log('submit', values);
  };

  console.log('errors', formState.errors);
  console.log('errors tec', formState.errors.tec);

  return (
    <>
      <StatusBar
        backgroundColor="#318FBA"
        translucent
        barStyle="light-content"
      />
      <S.Container>
        <ScrollView>
          <S.Input
            value={vvv.email}
            onChangeText={(text) => setValue('email', text)}
          />
          {!!formState.errors?.email && (
            <S.TxtError>{formState.errors.email.message}</S.TxtError>
          )}
          <S.Divider />
          <S.Input
            defaultValue={vvv.password}
            onChangeText={(text) => setValue('password', text)}
          />
          {!!formState.errors?.password && (
            <S.TxtError>{formState.errors.password.message}</S.TxtError>
          )}
          <S.Divider />
          {/* <Checkbox value={check} onChange={handleCheckbox} /> */}

          <Controller
            name="terms"
            control={control}
            defaultValue={false}
            render={(props) => {
              //  console.log('xxxxxxx', props.field);
              return (
                <CheckBox
                  value={props.field.value}
                  onChange={props.field.onChange}
                />
              );
            }}
          />
          {!!formState.errors?.terms && (
            <S.TxtError>{formState.errors.terms.message}</S.TxtError>
          )}
          <S.Divider />
          <Controller
            name="preferences"
            control={control}
            render={(props) => {
              return (
                <>
                  {itens.map((i) => (
                    <RadioBox
                      key={i.id}
                      value={i.id}
                      title={i.name}
                      selected={props.field.value}
                      onChange={props.field.onChange}
                    />
                  ))}
                </>
              );
            }}
          />
          {!!formState.errors?.preferences && (
            <S.TxtError>{formState.errors.preferences.message}</S.TxtError>
          )}
          <S.Divider />
          <Controller
            name="gender"
            control={control}
            render={(props) => {
              return (
                <SelectInput
                  data={dataGender}
                  placeholder="Seu gender"
                  selectedValue={props.field.value}
                  onValueChange={props.field.onChange}
                />
              );
            }}
          />
          {!!formState.errors?.gender && (
            <S.TxtError>{formState.errors.gender.message}</S.TxtError>
          )}
          <S.Divider />
          <Controller
            name="tec"
            control={control}
            render={(props) => {
              console.log('tec', props.field.value);
              return (
                <>
                  {techs.map((i) => (
                    <MultipleCheckBox
                      key={i.id}
                      item={i}
                      values={props.field.value}
                      onChange={props.field.onChange}
                    />
                  ))}
                </>
              );
            }}
          />
          {!!formState.errors?.tec && (
            <S.TxtError>{formState.errors.tec.message}</S.TxtError>
          )}
          <S.Divider />
          {/* <DatePicker
          initialDate={date}
          setInitialDate={(text) => setValue('eventStartDate', text)}
          // setInitialDate={(text) => console.log('vai', text)}
          placeholder="Data de nascimento"
        /> */}
          <Controller
            name="birthDate"
            control={control}
            defaultValue={new Date()}
            render={(props) => {
              //  console.log('xxxxxxx', props.field);
              return (
                <DatePicker
                  initialDate={props.field.value}
                  setInitialDate={props.field.onChange}
                  // setInitialDate={(text) => console.log('vai', text)}
                  placeholder="Data de nascimento"
                />
              );
            }}
          />
          {!!formState.errors?.birthDate && (
            <S.TxtError>{formState.errors.birthDate.message}</S.TxtError>
          )}

          <S.Divider />
          <S.Btn onPress={handleSubmit(handleCreateUser)}>
            <S.BtnTxt>Salvar</S.BtnTxt>
          </S.Btn>
        </ScrollView>
      </S.Container>
    </>
  );
}
