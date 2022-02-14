import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'

import { AccessibleIcon } from '../types'

function BookstoreSvg({ size, color, accessibilityLabel, testID }: AccessibleIcon): JSX.Element {
  return (
    <AccessibleSvg
      width={size}
      height={size}
      testID={testID}
      fill={color}
      viewBox="0 0 96 96"
      accessibilityLabel={accessibilityLabel}
      aria-hidden={!accessibilityLabel}>
      <Path d="M89.7976 31.4025C89.4456 31.4025 89.0717 31.3148 88.7417 31.1395L48 8.99822L7.25832 31.1395C6.20238 31.7094 4.86045 31.3368 4.26649 30.2626C3.69452 29.2103 4.0685 27.8731 5.14644 27.2812L48 4L90.8536 27.2812C91.9315 27.8512 92.3055 29.1884 91.7335 30.2626C91.3375 30.986 90.5676 31.4025 89.7976 31.4025ZM48.0003 91.9949C47.2303 91.9949 46.4384 91.7319 45.8224 91.2057C44.5685 90.1535 37.0229 85.0237 11.5044 88.334C10.1184 88.5093 8.75452 88.1147 7.76458 87.2379C6.86263 86.4487 6.33466 85.3306 6.33466 84.1688V44.0076C6.33466 43.9026 6.34217 43.7993 6.35668 43.6981V37.0146C6.35668 34.8881 7.98458 33.0467 10.0745 32.8494C23.4277 31.556 40.7187 31.271 47.3623 37.2776C47.6043 37.4968 47.8243 37.7161 48.0443 37.9572C48.2643 37.7161 48.4843 37.4968 48.7263 37.2776C55.3699 31.271 72.6609 31.556 86.0141 32.8494C88.104 33.0467 89.7319 34.8881 89.7319 37.0146V83.3139C89.7319 84.4757 89.204 85.5937 88.302 86.3829C87.4001 87.1502 86.3001 87.5448 85.1562 87.5448C84.9548 87.5448 84.7718 87.5264 84.5735 87.5065L84.5733 87.5065L84.5182 87.501C83.3083 87.3475 82.4724 86.2514 82.6263 85.0457C82.7803 83.84 83.8803 83.0069 85.0902 83.1604C85.1782 83.1604 85.2442 83.1604 85.2882 83.1385V37.1899C68.0632 35.5458 55.8099 36.7515 51.6521 40.5221C50.6842 41.399 50.2222 42.3855 50.2222 43.5912L50.2 43.5911V86.0944C53.9556 84.2863 61.1861 82.3049 74.4648 83.0069C75.6747 83.0727 76.5987 84.103 76.5547 85.3087C76.4887 86.5144 75.4327 87.4352 74.2448 87.3913C57.1958 86.4925 51.5421 90.0877 50.2002 91.2277C49.5622 91.7319 48.7702 91.9949 48.0003 91.9949ZM45.8153 43.3353C45.7535 42.2474 45.291 41.3564 44.3925 40.5221C40.2348 36.7515 27.9814 35.5458 10.7564 37.1899V46.0026C10.7564 46.1076 10.7489 46.2109 10.7344 46.3121V83.9934C10.7784 84.0153 10.8444 84.0153 10.9323 84.0153H10.9324C31.1087 81.3761 41.09 83.7935 45.8003 86.0791V43.5911C45.8003 43.5046 45.8054 43.4193 45.8153 43.3353ZM38.2106 47.9974C38.3866 48.0412 38.5405 48.0631 38.7165 48.0631C39.7065 48.0631 40.6084 47.3836 40.8504 46.3752C41.1364 45.2133 40.4104 44.0295 39.2225 43.7445C34.2728 42.5607 24.3514 41.9688 17.5097 42.9553C16.2998 43.1307 15.4639 44.2268 15.6398 45.4325C15.8158 46.6382 16.8938 47.4493 18.1257 47.2959C24.3734 46.3971 33.7228 46.9451 38.2106 47.9974ZM57.2835 48.0632C56.2935 48.0632 55.3916 47.3836 55.1496 46.3752C54.8636 45.1914 55.6116 44.0077 56.7775 43.7446C61.7492 42.5827 71.6487 41.9908 78.4903 42.9554C79.7002 43.1308 80.5361 44.2488 80.3602 45.4326C80.1842 46.6383 79.1062 47.4713 77.8743 47.296C71.6267 46.3972 62.2772 46.9452 57.7894 47.9975C57.6135 48.0413 57.4595 48.0632 57.2835 48.0632ZM55.1496 54.7057C55.3916 55.7141 56.2935 56.3937 57.2835 56.3937C57.4417 56.3937 57.5821 56.376 57.7367 56.3565L57.7894 56.3498L57.9415 56.3142C60.0716 55.8154 62.7243 55.1941 66.6989 55.451C67.9529 55.5387 68.9648 54.5961 69.0308 53.3904C69.0968 52.1847 68.1729 51.1324 66.9629 51.0666C62.2552 50.7817 59.0874 51.527 56.7775 52.0751C55.6116 52.3381 54.8636 53.5219 55.1496 54.7057ZM38.7165 56.3935C38.5405 56.3935 38.3866 56.3716 38.2106 56.3277C33.7228 55.2755 24.3734 54.7274 18.1257 55.6262C16.8938 55.7797 15.8158 54.9686 15.6398 53.7629C15.4639 52.5572 16.2998 51.4611 17.5097 51.2857C24.3514 50.2992 34.2728 50.8911 39.2225 52.0749C40.4104 52.3599 41.1364 53.5436 40.8504 54.7055C40.6084 55.7139 39.7065 56.3935 38.7165 56.3935ZM15.6398 62.0934C15.7938 63.1895 16.7398 63.9787 17.8177 63.9787C17.9057 63.9787 18.0157 63.9568 18.1257 63.9348C21.6015 63.4306 26.4852 63.3429 31.215 63.6937C32.4029 63.7814 33.4808 62.8826 33.5688 61.6769C33.6568 60.4712 32.7549 59.4189 31.5449 59.3312C26.4412 58.9805 21.3375 59.0681 17.5097 59.6162C16.2998 59.7916 15.4639 60.8877 15.6398 62.0934Z" />
    </AccessibleSvg>
  )
}

export const BookstoreIcon = styled(BookstoreSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``
