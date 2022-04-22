import React, {useState} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Content as ContentType} from '../types';
import {MarkdownView} from './MarkdownView';
import {LoadingIndicator} from './LoadingIndicator';
import {Media} from '../__generated__/LessonResourceScreen_resource.graphql';
import {Box} from './Box';

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
    <Box paddingHorizontal={2}>
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
    <>
      {isLoading && <LoadingIndicator />}
      <YoutubePlayer
        videoId={videoId || content}
        height={240}
        onReady={() => setIsLoading(false)}
      />
    </>
  );
};
