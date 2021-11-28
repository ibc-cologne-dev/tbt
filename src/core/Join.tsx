import React from 'react';

interface JoinProps {
  separator: React.ReactElement;
}

export const Join: React.FC<JoinProps> = ({children, separator}) => {
  const childrenArray = React.Children.toArray(children);

  return childrenArray.reduce((prev, curr, index) => {
    prev.push(
      React.cloneElement(curr as React.ReactElement<unknown>, {
        key: `join-${index}`,
      }),
    );

    if (index !== childrenArray.length - 1) {
      prev.push(
        separator &&
          React.cloneElement(separator, {
            key: `join-sep-${index}`,
          }),
      );
    }

    return prev;
  }, [] as any);
};
