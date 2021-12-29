import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.drawerSection}>
          <View
            style={{
              paddingLeft: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="calendar" size={20} />
              <Text style={{marginLeft: 5, fontSize: 14, fontWeight: 'bold'}}>
                306
              </Text>
            </View>
            <View style={{marginRight: 5}}>
              <Icon
                name="cog-outline"
                size={20}
                style={{width: '100%', alignItems: 'flex-end', marginRight: 5}}
              />
            </View>
          </View>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <Title style={{paddingLeft: 15, fontSize: 14, fontWeight: 'bold'}}>
            화면스타일
          </Title>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              props.navigation.navigate('Calendar');
            }}>
            <Text>일정스타일</Text>
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              props.navigation.navigate('Memo');
            }}>
            <Text>메모스타일</Text>
          </Pressable>
        </Drawer.Section>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Title style={{fontSize: 16, fontWeight: 'bold'}}>Gmail</Title>
            <View style={{flexDirection: 'row'}}>
              <Avatar.Image
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/43161245?s=400&u=5e8d53ba84288e4573521247d2a5cadeca961da7&v=4',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>SeoYounSeok</Title>
                <Caption style={styles.caption}>syounseok94@gmail.com</Caption>
              </View>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 5,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  pressable: {
    paddingLeft: 18,
  },
});

export default DrawerContent;
