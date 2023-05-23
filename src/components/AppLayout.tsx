import React, { useMemo } from "react";
import styled from "styled-components/native";
import { defaultTheme } from "../theme/default";
import { Edge, SafeAreaView } from "react-native-safe-area-context";
import { ESafeEdges } from "../typescript/static/ESafeEdges";

export interface TProps {
  children: React.ReactElement | React.ReactElement[];
  edges?: [Edge];
  scrollEnabled?: boolean;
}

const AppLayout = ({ children, edges, scrollEnabled }: TProps) => {
  const mEdges = useMemo(() => {
    const defaultEdges: Edge[] = [ESafeEdges.Bottom, ESafeEdges.Top];

    return edges ? edges : defaultEdges;
  }, [edges]);

  return (
    <SafeAreaView edges={mEdges} style={{ flex: 1, backgroundColor: defaultTheme.colors.background }}>
      {scrollEnabled ? (
        <ScrollContainer>{children}</ScrollContainer>
      ) : (
        <Container>{children}</Container>
      )}
    </SafeAreaView>
  );
};

export default AppLayout;

const Container = styled.View`
  flex: 1;
  padding-horizontal: ${defaultTheme.sizes.appPadding}px;
  background-color: ${defaultTheme.colors.background};
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${defaultTheme.colors.background};
  padding-horizontal: ${defaultTheme.sizes.appPadding}px;
`;
