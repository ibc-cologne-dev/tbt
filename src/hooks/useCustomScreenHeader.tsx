import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';

export const useCustomScreenHeader = (title: string) => {
  const {setOptions} = useNavigation();

  useEffect(() => {
    if (title) {
      setOptions({title});
    }
  }, [title, setOptions]);
};
