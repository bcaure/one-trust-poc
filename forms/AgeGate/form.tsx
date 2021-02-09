import React, {useMemo} from 'react';
import {size, has, get} from 'lodash';
import {Form as Fform} from 'react-final-form';
import {H3, BodyText} from '../../components/typography';
import {View, StyleSheet} from 'react-native';
import FormField from '../../components/FormField';
import MainButton from '../../components/buttons/MainButton';
import InputDate from '../../components/input/InputDate';
import InputDropdown from '../../components/input/InputDropdown';
import {countryOptions} from '../../constants/countries';
import {TermsAndCondField, SendInfoField, DataPrivacyField} from './CheckboxFields';
import {SpacerS} from '../../components/spacer';
import AlcoholResponsibility from '../../components/textual/AlcoholResponsibility';

// https://en.wikipedia.org/wiki/ISO_3166-2
const countries = [...countryOptions];

const DOB_FIELD = 'dateOfBirth';

export const AgeGateSubscriber = ({onSubmit, render, initialValues}) => {

  return (
    <Fform
      onSubmit={onSubmit}
      render={render}
      initialValues={initialValues}
    />
  );
};

export const AgeGateForm = ({
  handleSubmit,
  touched,
  submitting,
  errors,
  pristine,
  handleDataPrivacyClicked,
}) => {
  const disabledContinueButton = submitting || size(errors) > 0;
  const hasDOBError =
    !pristine && get(touched, DOB_FIELD) && has(errors, DOB_FIELD);

  return (
    <View style={styles.container}>
      <H3>Let's see some ID</H3>
      <BodyText style={styles.bodyText}>
        Not really. But enter your DOB–you have to be of legal drinking age to
        use this app.
      </BodyText>
      <View style={styles.inputDateContainer}>
        <FormField
          name={DOB_FIELD}
          component={InputDate}
          label="Date of Birth"
          placeholder="mm/dd/yyyy"
          id="DateOfBirth"
        />
        {hasDOBError && <AlcoholResponsibility />}
      </View>

      <FormField
        name="countryCode"
        component={InputDropdown}
        label="Country"
        placeholder="United States"
        options={countries}
        id="Country"
      />

      <View style={styles.line} />
      <FormField name="agreeToToS" component={TermsAndCondField} /> 
      <SpacerS />
      <FormField name="agreeToDataPrivacy" component={DataPrivacyField} onClick={handleDataPrivacyClicked} /> 
      <SpacerS />
      <FormField name="newsletterSubscribe" component={SendInfoField} />

      <View style={styles.buttonContainer}>
        <MainButton
          type="primary"
          title="Submit"
          onPress={handleSubmit}
          disabled={disabledContinueButton}
          loading={submitting}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    // marginBottom: '24@vs',
  },
  fieldSpace: {
    height: '32@s',
  },
  bodyText: {
    marginTop: 16,
    marginBottom: 20,
  },
  inputDateContainer: {
    marginBottom: 12,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 7,
  },
  line: {
    height: 1,
    marginTop: 6,
    marginBottom: 16,
    backgroundColor: '#B9C9D7',
  },
});
