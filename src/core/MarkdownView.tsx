import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import Markdown, {ASTNode} from 'react-native-markdown-display';
import {ClosingArch} from '../assets/svgs/ClosingArch';
import {WeekOneArch} from '../assets/svgs/WeekOneArch';
import {WeekTwoArch} from '../assets/svgs/WeekTwoArch';
import {colors} from '../theme/colors';
import {spacing} from '../theme/spacing';
import {fonts, variants} from '../theme/typography';
import {Box} from './Box';

interface MarkdownViewProps {
  key?: string;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({children, key}) => (
  <Markdown style={styles} rules={rules} key={`markdown${key}`}>
    {children}
  </Markdown>
);

const rules = {
  hr: ({key}: ASTNode) => (
    <Box key={key} marginTop={0.5}>
      <WeekOneArch />
    </Box>
  ),
  hr_closing: ({key}: ASTNode) => (
    <Box key={key} marginTop={0.5}>
      <ClosingArch color="petrolBlue" />
    </Box>
  ),
  hr1: ({key}: ASTNode) => (
    <Box key={key} marginTop={0.5}>
      <WeekTwoArch />
    </Box>
  ),
  hr1_closing: ({key}: ASTNode) => (
    <Box key={key} marginTop={0.5}>
      <ClosingArch color="lightPetrolBlue" />
    </Box>
  ),
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
  em: (node: ASTNode) => (
    <Text key={node.key} style={styles.em}>
      {node.children[0].content}
    </Text>
  ),
};

const styles = StyleSheet.create({
  body: {
    fontFamily: fonts.avenir,
    color: 'black',
    ...variants.md,
  },
  heading1: {
    fontFamily: fonts.avenir,
    color: 'black',
    ...variants.xl,
  },
  heading2: {
    fontFamily: fonts.avenir,
    color: 'black',
    ...variants.lg,
  },
  heading3: {
    fontFamily: fonts.avenir,
    color: 'black',
    ...variants.md,
  },
  em: {
    fontFamily: fonts.alisha,
    color: 'black',
    fontSize: 24,
    lineHeight: 32,
  },
  customHr: {
    marginVertical: spacing[1],
  },
  customTextLightBlue: {
    color: colors.petrolBlue,
  },
  customTextOrange: {
    color: colors.orange,
  },
});
