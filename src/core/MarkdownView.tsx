import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import Markdown, {ASTNode} from 'react-native-markdown-display';
import {Separator} from './Separator';

interface MarkdownViewProps {
  key?: string;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({children, key}) => (
  <Markdown
    style={styles}
    rules={rules}
    key={key}
    matchers={{
      ['<span style="color:lightblue;">']: {
        closingTag: '</span>',
        type: 'textLightBlue',
      },
      ['<span style="color:orange;">']: {
        closingTag: '</span>',
        type: 'textOrange',
      },
    }}>
    {children}
  </Markdown>
);

const rules = {
  hr: (node: ASTNode) => <Separator style={styles.customHr} key={node.key} />,
  textLightBlue: (node: ASTNode, children: ReactNode) => (
    <Text key={node.key} style={styles.customTextLightBlue}>
      {children}
    </Text>
  ),
  textOrange: (node: ASTNode, children: ReactNode) => (
    <Text key={node.key} style={styles.customTextOrange}>
      {children}
    </Text>
  ),
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Nunito',
  },
  heading1: {
    fontFamily: 'Nunito',
    fontSize: 32,
  },
  heading2: {
    fontFamily: 'Nunito',
    fontSize: 24,
  },
  heading3: {
    fontFamily: 'Nunito',
    fontSize: 20,
  },
  customHr: {
    marginVertical: 24,
  },
  customTextLightBlue: {
    color: 'lightblue',
  },
  customTextOrange: {
    color: 'orange',
  },
});
