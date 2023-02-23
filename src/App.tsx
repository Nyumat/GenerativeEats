import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ChakraProvider,
  refineTheme,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-chakra-ui";

import dataProvider from "@pankod/refine-simple-rest";
import { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";
import routerProvider from "@pankod/refine-react-router-v6";
import { Title, Sider, Layout, Header } from "components/layout";

function App() {
  return (
    <ChakraProvider theme={refineTheme}>
      <Refine
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        notificationProvider={notificationProvider()}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        resources={[
          {
            name: "posts",
            list: ChakraUIInferencer,
            edit: ChakraUIInferencer,
            show: ChakraUIInferencer,
            create: ChakraUIInferencer,
            canDelete: true,
          },
        ]}
        Title={Title}
        Sider={Sider}
        Layout={Layout}
        Header={Header}
        routerProvider={routerProvider}
      />
    </ChakraProvider>
  );
}

export default App;
