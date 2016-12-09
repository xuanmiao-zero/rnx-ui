import React, { PropTypes } from 'react';
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';

const isAndroid = Platform.OS === 'android';

const STATUS_BAR_HEIGHT = isAndroid ? 0 : 20;
const HEADER_HEIGHT = isAndroid ? 56 : 44;

const NOOP = () => {};

function NavBar(props) {
  // title
  let title = props.title;
  if (typeof props.title === 'string') {
    title = (
      <Text
        style={[styles.headerTextCenter, props.titleStyle]}
        numberOfLines={1}
      >
        {props.title}
      </Text>
    );
  }

  return (
    <View
      style={[styles.navBar, {
        paddingTop: props.statusBarHeight,
      }, props.style]}
    >
      <View
        style={[styles.header, {
          height: props.headerHeight,
        }]}
      >
        <View
          style={[styles.headerItemCenter, {
            left: props.titleGap,
            right: props.titleGap,
          }]}
        >
          {title}
        </View>
        <TouchableOpacity
          activeOpacity={props.activeOpacity}
          onPress={props.leftEvent}
        >
          {props.leftBtn}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={props.activeOpacity}
          onPress={props.rightEvent}
        >
          {props.rightBtn}
        </TouchableOpacity>
      </View>
    </View>
  );
}

NavBar.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // statusBar 高度
  statusBarHeight: PropTypes.number,
  // header 高度
  headerHeight: PropTypes.number,
  // 标题
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // 标题文本样式（title 为字符串时才生效）
  titleStyle: Text.propTypes.style,
  // 标题到左右两边的距离
  titleGap: PropTypes.number,
  // 左侧按钮
  leftBtn: PropTypes.element,
  // 左侧点击事件
  leftEvent: PropTypes.func,
  // 右侧按钮
  rightBtn: PropTypes.element,
  // 右侧点击事件
  rightEvent: PropTypes.func,
  // 按钮点击透明度变化
  activeOpacity: PropTypes.number,
};
NavBar.defaultProps = {
  style: null,
  statusBarHeight: STATUS_BAR_HEIGHT,
  headerHeight: HEADER_HEIGHT,
  title: '',
  titleStyle: null,
  titleGap: 50,
  leftBtn: null,
  leftEvent: NOOP,
  rightBtn: null,
  rightEvent: NOOP,
  activeOpacity: 0.6,
};

export default NavBar;
