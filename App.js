/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";

type Props = {};
type State = { test: boolean };

export default class App extends Component<Props, State> {
  state = { test: true };

  dimensionChangedHandler = () => {
    console.log("Dimension change");

    this.setState({ test: !this.state.test });
  };

  constructor() {
    super();
    Dimensions.addEventListener("change", this.dimensionChangedHandler);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.dimensionChangedHandler);
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          marginTop: 30,
          marginHorizontal: 16,
          backgroundColor: "#4a0047"
        }}
      >
        <View
          style={[
            {
              flex: 1,
              padding: 16,
              backgroundColor: "#f902ee"
            }
            // FIXIT: This forces the overall stylesheet of the view to change
            // after rotation, which seems to cause RN to properly recalculate
            // this view's frame.
            // , this.state.test ? { paddingBottom: 12 } : null
          ]}
        >
          <View style={{ backgroundColor: "#fee5fd" }}>
            <Text style={{ padding: 4, fontSize: 14, fontWeight: "bold" }}>
              Instructions
            </Text>
            <Text style={{ padding: 4 }}>
              Rotate the device to landscape orientation. Reload the app (⌘+r).
              Rotate the device to Portrait and back to Landscape. Observe that
              the containing fuschia View is now sized different than it was
              originally.
            </Text>
            <Text style={{ padding: 4 }}>
              Now uncomment the code below the "FIXIT" comment above and retry.
            </Text>
            <Text style={{ fontSize: 30 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
