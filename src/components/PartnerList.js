import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {selectPartner, selectProject } from '../redux/app/appActions'

import PartnerItem from './PartnerItem';

const ProductList = ({navigation, datas}) => {

  const dispatch = useDispatch();

  
  const renderProductItem = ({item}) => {
   
 

    return (
      <PartnerItem
      
      name={item.name}
        onSelectProject={() => {
          navigation.navigate('SelectionProjectScreen', {partner:item});
        }
      }

      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={datas}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProductItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {

   // flex: 1,
   // justifyContent: 'center',
    //alignItems: 'center',
    //padding: 15
  }
});

export default ProductList;
