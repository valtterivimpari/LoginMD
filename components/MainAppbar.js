import React from 'react';
import { Appbar, Text } from 'react-native-paper';

export default function MainAppbar(props) {
  return (
    <Appbar.Header mode="center-aligned" elevated={true}>
      <Appbar.Content title={<Text>{props.title}</Text>} />
    </Appbar.Header>
  );
}
