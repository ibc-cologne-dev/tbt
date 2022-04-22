import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import Markdown, {ASTNode} from 'react-native-markdown-display';
import {colors} from '../theme/colors';
import {spacing} from '../theme/spacing';
import {fonts, variants} from '../theme/typography';

interface MarkdownViewProps {
  key?: string;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({children, key}) => (
  <Markdown style={styles} rules={rules} key={key}>
    {children}
  </Markdown>
);

const rules = {
  // hr: (node: ASTNode) => <Separator style={styles.customHr} key={node.key} />,
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
    fontFamily: fonts.avenir,
    ...variants.md,
  },
  heading1: {
    fontFamily: fonts.avenir,
    ...variants.xl,
  },
  heading2: {
    fontFamily: fonts.avenir,
    ...variants.lg,
  },
  heading3: {
    fontFamily: fonts.avenir,
    ...variants.md,
  },
  em: {
    fontFamily: fonts.alisha,
    fontSize: 24,
    lineHeight: 32,
  },
  customHr: {
    marginVertical: spacing[4],
  },
  customTextLightBlue: {
    color: colors.petrolBlue,
  },
  customTextOrange: {
    color: colors.orange,
  },
});
