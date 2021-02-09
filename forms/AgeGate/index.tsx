import React, {useCallback, useMemo} from 'react';
import {AgeGateSubscriber, AgeGateForm as Form} from './form';

export const AgeGateForm = ({onSuccess, agreeToDataPrivacy, handleDataPrivacyClicked}: {onSuccess:Function, agreeToDataPrivacy: boolean, handleDataPrivacyClicked: Function}) => {
  const countryCode = 'us';
  const initialValues = {
      countryCode,
      agreeToDataPrivacy,
      newsletterSubscribe: false,
      agreeToToS: false,
    };

  return (
    <AgeGateSubscriber
      onSubmit={onSuccess}
      initialValues={initialValues}
      render={() => (
        <Form
          handleSubmit={onSuccess}
          handleDataPrivacyClicked={handleDataPrivacyClicked}
          submitting={false}
          errors={[]}
          pristine={true}
          touched={false}
        />
      )}
    />
  );
};
