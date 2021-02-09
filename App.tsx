import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, NativeModules, DeviceEventEmitter, NativeEventEmitter, ScrollView, View, Image } from 'react-native';
import { PaddedView } from './components/PaddedView';
import { AgeGateForm } from './forms/AgeGate';
import IntroHeader from './components/header/IntroHeader';
import TextButton from './components/buttons/TextButton';
import MyBarHeader from './components/header/MyBarHeader';
import { homeHeadingCocktail, recipeList } from './components/images';
import { H2, Label1 } from './components/typography';


export default function App() {

  const userRole = 'role';
  const firstName = 'Benjamin';
  const isAnonymous = true;



  const [c0002Consent, setC0002Consent] = useState(false);
  const [c0005Consent, setC0005Consent] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    console.log('InitializeConsent - before');
    NativeModules.OTConsent.initializeConsent() //returns a promise with value of shouldShowBanner
      .then((consents: boolean[]) => {
        console.log(`InitializeConsent - C0002 consent = ${consents[0]}; C0005 consent = ${consents[1]}`);
        setC0002Consent(consents[0]);
        setC0005Consent(consents[1]);

        ///// Categories listeners
        NativeModules.OTConsent.listenForConsentChanges();
        DeviceEventEmitter.addListener('C0002', consent => setC0002Consent(consent === 1));
        DeviceEventEmitter.addListener('C0005', consent => setC0005Consent(consent === 1));

        ///// UI listeners
        // NativeModules.OTConsent.listenForUIEvents();
        // DeviceEventEmitter.addListener('hidePreferenceCenter', (event) => {
        //   console.log('hidePreferenceCenter');
        // });
        // DeviceEventEmitter.addListener('preferenceCenterAcceptAll', (event) => {
        //   console.log('preferenceCenterAcceptAll');
        // });
        // DeviceEventEmitter.addListener('preferenceCenterRejectAll', (event) => {
        //   console.log('preferenceCenterRejectAll');
        // });
        // DeviceEventEmitter.addListener('preferenceCenterConfirmChoices', (event) => {
        //   console.log('preferenceCenterConfirmChoices');
        // });

      })
      .catch((error: string) => {
        console.log(`InitializeConsent - error: ${JSON.stringify(error)}`);
      });
    console.log('InitializeConsent - after');    

  }, []);




  return (
    <>
      {
        /* AGE GATE PAGE */ 
        !showHomePage && (
          <>
            <IntroHeader />
            <PaddedView style={styles.flex}>
              <AgeGateForm 
                onSuccess={(values: any) => { console.log('submit'); setShowHomePage(true); }}
                agreeToDataPrivacy={c0002Consent || c0005Consent}
                handleDataPrivacyClicked={() => {
                  NativeModules.OTConsent.loadPrefCenter('prefCenter')
                }}
              />
            </PaddedView>
          </>
        )
      } 
      {
        /* HOME PAGE */ 
        showHomePage && (
          <>
            <MyBarHeader headerTitle="What are you in the mood for?" />
            <ScrollView
              bounces={false}
              contentContainerStyle={styles.scrollviewContent}
              showsVerticalScrollIndicator={false}>
              <PaddedView style={styles.container}>
                <H2 style={styles.title}>Let's make some cocktails</H2>
                <Image source={homeHeadingCocktail} />

                <View style={styles.titleWithActionRow}>
                  <Label1>MOST LOVED</Label1>
                  <TextButton title="View All" />
                </View>
                <View>
                  <Image source={recipeList} />
                </View>
                <View style={[styles.titleWithActionRow, styles.spacerBelowList]}>
                  <Label1>More to Explore</Label1>
                  <TextButton title="View All" onClick={() => {}} />
                </View>

              </PaddedView>
            </ScrollView>
          </>
        )}
    </>
  );
}
const styles = StyleSheet.create({
  flex: {flex: 1},
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  scrollviewContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollviewContent: {
    flexGrow: 0,
    paddingTop: 16,
  },
  title: {
    marginBottom: 16,
  },
  spacerBelowList: {
    marginTop: 32,
  },
  titleWithActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
});
