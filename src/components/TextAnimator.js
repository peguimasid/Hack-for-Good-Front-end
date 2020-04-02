import * as React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

export default class TextAnimator extends React.Component {

  state = {
    words: null,
    animatedValues: [],
  }

  displayErrorWith(message) {
    alert('Error: ', message);
  }

  transformContentIntoWords = async () => {
    const { content } = this.props;
    if (!content) this.displayErrorWith('Conteúdo não deve ser nulo');
    const wordsFromContent = content.trim().split(' ');
    const animatedValues = wordsFromContent.map((content) => new Animated.Value(0));
    await this.setState({ words: wordsFromContent, animatedValues });
  }

  transitOpacityToFullValue() {
    const { words, animatedValues } = this.state;
    if (!words) this.displayErrorWith('Palavras não devem ser nulas');
    const toValue = 1;
    const animationsByWord = words.map((word, index) => {
      return Animated.timing(animatedValues[index], {
        toValue,
        duration: 1000
      });
    });
    Animated.stagger(100, animationsByWord).start();
  }

  async componentDidMount() {
    await this.transformContentIntoWords();
    this.transitOpacityToFullValue();
  }

  applyAnimationToStyleWith = (index) => {
    const { animatedValues } = this.state;
    const selectedAnimatedValue = animatedValues[index];
    return {
      opacity: selectedAnimatedValue,
      transform: [{
          translateY: Animated.multiply(selectedAnimatedValue , new Animated.Value(-10))
        }],
    }
  }

  render() {
    const { words } = this.state;
    if (!words) return <View />
    return (
      <View style={[this.props.style, styles.textWrapper]}>
        {
          words.map((word, index) => 
            <Animated.Text 
              key={`${words}-${index}`}
              style={[
                this.props.style,
                this.applyAnimationToStyleWith(index),
              ]}>
                { word }
            </Animated.Text>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textWrapper: {
    
  }
})