import React, {useState} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Content as ContentType} from '../types';
import {MarkdownView} from './MarkdownView';
import {LoadingIndicator} from './LoadingIndicator';
import {Media} from '../__generated__/LessonResourceScreen_resource.graphql';
import {Box} from './Box';
import {StyleSheet} from 'react-native';

interface ContentProps {
  type: Media | null;
  key?: string;
  content: ContentType['content'] | null;
}

export const Content: React.FC<ContentProps> = ({content, type, ...rest}) => {
  if (!content || !type) {
    throw new Error('Invalid content prop');
  }

  switch (type) {
    case 'image':
      return null;
    case 'text':
      return <ContentText content={content} {...rest} />;
    case 'video':
      return <ContentVideo content={content} {...rest} />;
  }

  return null;
};

export const ContentText: React.FC<{content: string}> = ({content}) => {
  return (
    <Box paddingHorizontal={1}>
      <MarkdownView>{content}</MarkdownView>
    </Box>
  );
};

export const ContentVideo: React.FC<{content: string}> = ({content}) => {
  const [isLoading, setIsLoading] = useState(true);

  const indexOfVideoId = content?.indexOf('v=') ?? 0;
  const videoId =
    indexOfVideoId !== -1
      ? content.substr(indexOfVideoId + 2, content.length)
      : content;

  return (
    <Box style={styles.videoPlayerContainer}>
      {isLoading && <LoadingIndicator />}
      <Box style={isLoading ? styles.videoPlayerOpaque : styles.videoPlayer}>
        <YoutubePlayer
          videoId={videoId || content}
          height={220}
          onReady={() => setIsLoading(false)}
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  videoPlayerContainer: {
    height: 220,
  },
  videoPlayerOpaque: {
    opacity: 0,
    position: 'absolute',
  },
  videoPlayer: {
    opacity: 1,
  },
});
