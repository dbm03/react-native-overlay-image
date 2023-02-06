# react-native-overlay-image
Image overlay with transparent background that hides when you tap outside

- [Demo](#demo)
- [Installation](#installation)
- [How to use](#how-to-use)
- [Properties](#properties)
- [Contribute](#contribute)

## Demo
![demo animation](/demo/demoAnim.gif)

Try it yourself on this [Expo Snack](https://snack.expo.dev/@barrarroso/overlayimage-demo)

## Installation
```bash
npm install --save react-native-overlay-image
```

## How to use
Import the component
```js
import ImageOverlay from 'react-native-overlay-image'
```
```js
<ImageOverlay
    source={{
        uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80',
    }}
/>
```

### Changing opacity of the overlay's background

using CSS rgba() with an opacity between 0 and 1
```js
<ImageOverlay
    source={{
        uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80',
    }}
    modalStyle={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }}  
/>
```

## Properties

| Prop                           | required | Type                                                                                                                  | Description                                                                                                                                |
| ------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| source | Yes        | React Native [ImageSource](https://reactnative.dev/docs/image#imagesource)                                                                                                               | Source of the button image and overlay image                         |
| imageButtonStyle                  | No        | [ImageStyle](https://reactnative.dev/docs/image-style-props)                                                                                                               | Style of the small image that you tap to zoom |
| modalStyle                 | No        | [ViewStyle](https://reactnative.dev/docs/view-style-props)                                                                                                               | Style of the `overlay container` of the zoomed image. Useful to change the `background color` and `opacity` of the `overlay`                                                                                           |
| zoomedImageStyle           | No        | [ImageStyle](https://reactnative.dev/docs/image-style-props)                                                                                                                | Style of the zoomed image overlay. Useful to change its `width` and `height` (`defaults to 2/3 of the screen width`)                                                                                                  |

## Contribute
You are welcome to create a pull request with any improvement, bugfix or documentation.

Component tested on iOS 16 using Expo SDK 47 and React Native version 0.70.5
