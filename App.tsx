import React, { useEffect, useMemo } from 'react';
import { Image, StyleSheet, View, ScrollView, NativeModules } from 'react-native';
import { PaddedView } from './components/PaddedView';
import { H2, Label1 } from './components/typography';
import { homeHeadingCocktail, recipeList } from './components/images';
import TextButton from './components/buttons/TextButton';
import MyBarHeader from './components/header/MyBarHeader';

interface Recipe {
  id: string;
}


export default function App() {

  const userRole = 'role';
  const firstName = 'Benjamin';
  const isAnonymous = true;

  const welcomeText = useMemo(() => {
    if (isAnonymous) return `Let's make some cocktails`;
    if (!userRole) return `Welcome ${firstName}`;
    return `Welcome ${firstName}`; // Removing "back" because it was always showing up, need a new way to figure this out
  }, [userRole, firstName]);

  const recommendedText = useMemo(() => {
    if (isAnonymous) return 'Most loved';
    return 'Recommended for You';
  }, [isAnonymous]);




  return (
    <>
      <MyBarHeader headerTitle="What are you in the mood for?" />
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scrollviewContent}
        showsVerticalScrollIndicator={false}>
        <PaddedView style={styles.container}>
          <H2 style={styles.title}>{welcomeText}</H2>
          <Image source={homeHeadingCocktail} />

          <View style={styles.titleWithActionRow}>
            <Label1>{recommendedText}</Label1>
            <TextButton title="View All" />
          </View>
          <View>
            <Image source={recipeList} />
          </View>
          <View style={[styles.titleWithActionRow, styles.spacerBelowList]}>
            <Label1>More to Explore</Label1>
            <TextButton title="View All" />
          </View>

        </PaddedView>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
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
