import { View, Text } from 'react-native'
import React from 'react'
import LogoImg from "../../assets/logo.png";
import { Image } from 'native-base';

interface LogoProps {
    width: string;
    height: string;
}

const Logo = ({ width, height } : LogoProps) => {
  return (
    <Image w={width || "auto"} h={height || "auto"} source={LogoImg} alt="Logo" />
  )
}

export default Logo