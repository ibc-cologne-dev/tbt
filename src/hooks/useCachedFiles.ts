import {useEffect, useState} from 'react';
import storage from '@react-native-firebase/storage';
import RNFetchBlob from 'rn-fetch-blob';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {useCachedFilesQuery} from '../__generated__/useCachedFilesQuery.graphql';
import {useFilesContext} from '../contexts/files';
import {Platform} from 'react-native';

const cachedFilesQuery = graphql`
  query useCachedFilesQuery {
    audios @required(action: NONE) {
      title @required(action: NONE)
      file @required(action: NONE)
      artist @required(action: NONE)
      audio_duration @required(action: NONE)
    }
  }
`;

export const useCachedFiles = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {setAudios, audios} = useFilesContext();
  const data = useLazyLoadQuery<useCachedFilesQuery>(cachedFilesQuery, {});

  useEffect(() => {
    __DEV__ && console.log('data', {data, isLoading, audios});
    if (data && data.audios && !isLoading && audios.length <= 0 && !error) {
      setLoading(true);

      const getAudio = async () => {
        let promises = [];
        for (let audio of data.audios) {
          promises.push(
            storage()
              .ref(audio?.file as string)
              .getDownloadURL(),
          );
        }
        const urls = await Promise.all(promises);

        try {
          const paths = [];
          for (let [index, url] of urls.entries()) {
            const uri = await RNFetchBlob.config({
              fileCache: true,
              path:
                (Platform.OS === 'ios'
                  ? RNFetchBlob.fs.dirs.MainBundleDir
                  : RNFetchBlob.fs.dirs.DownloadDir) +
                `/audio_${index + 1}.aac`,
              addAndroidDownloads: {
                mime: 'audio/aac',
                useDownloadManager: true,
                notification: false,
                description: 'Audio downloaded from TBT',
                path:
                  RNFetchBlob.fs.dirs.DownloadDir + `/audio_${index + 1}.aac`,
              },
            })
              .fetch('GET', url)
              .then(res => {
                __DEV__ && console.log('response', res.path());
                return res.path();
              });
            paths.push({
              url: uri,
              title: data.audios[index]?.title ?? '',
              duration: data.audios[index]?.audio_duration ?? 0,
              artist: data.audios[index]?.artist ?? '',
              artwork:
                'https://i.imgur.com/CxVoe1a_d.webp?maxwidth=760&fidelity=grand',
            });
          }
          setAudios?.(paths);
        } catch (e) {
          console.log('error', e);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      getAudio();
    }
  }, [data, isLoading, setAudios, audios, error]);

  return {isLoading};
};
