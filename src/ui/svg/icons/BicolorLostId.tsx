import React from 'react'
import { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'
import { AccessibleIcon } from 'ui/svg/icons/types'
import { svgIdentifier } from 'ui/svg/utils'

const BicolorLostIdSvg: React.FunctionComponent<AccessibleIcon> = ({
  size,
  accessibilityLabel,
  color,
  color2,
  testID,
}) => {
  const { id: gradientId, fill: gradientFill } = svgIdentifier()

  return (
    <AccessibleSvg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      accessibilityLabel={accessibilityLabel}
      testID={testID}>
      <Defs>
        <LinearGradient
          id={gradientId}
          x1="28.841%"
          x2="71.159%"
          y1="0%"
          y2="100%"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} />
          <Stop offset="1" stopColor={color2} />
        </LinearGradient>
      </Defs>
      <Path
        fill={gradientFill}
        clipRule={'evenodd'}
        fillRule={'evenodd'}
        d="M7.86957 7.89474C7.41477 7.89474 6.98009 7.96948 6.57662 8.10621C6.06666 8.27902 5.5086 8.01876 5.33015 7.5249C5.15171 7.03105 5.42045 6.49061 5.93041 6.3178C6.53873 6.11166 7.19173 6 7.86957 6H9.29503C9.83531 6 10.2733 6.42415 10.2733 6.94737C10.2733 7.47059 9.83531 7.89474 9.29503 7.89474H7.86957ZM12.118 6.94737C12.118 6.42415 12.556 6 13.0963 6H15.9472C16.4875 6 16.9255 6.42415 16.9255 6.94737C16.9255 7.47059 16.4875 7.89474 15.9472 7.89474H13.0963C12.556 7.89474 12.118 7.47059 12.118 6.94737ZM18.7702 6.94737C18.7702 6.42415 19.2082 6 19.7484 6H22.5994C23.1397 6 23.5776 6.42415 23.5776 6.94737C23.5776 7.47059 23.1397 7.89474 22.5994 7.89474H19.7484C19.2082 7.89474 18.7702 7.47059 18.7702 6.94737ZM25.4224 6.94737C25.4224 6.42415 25.8603 6 26.4006 6H29.2516C29.7918 6 30.2298 6.42415 30.2298 6.94737C30.2298 7.47059 29.7918 7.89474 29.2516 7.89474H26.4006C25.8603 7.89474 25.4224 7.47059 25.4224 6.94737ZM32.0745 6.94737C32.0745 6.42415 32.5125 6 33.0528 6H35.9037C36.444 6 36.882 6.42415 36.882 6.94737C36.882 7.47059 36.444 7.89474 35.9037 7.89474H33.0528C32.5125 7.89474 32.0745 7.47059 32.0745 6.94737ZM38.7267 6.94737C38.7267 6.42415 39.1647 6 39.705 6H41.1304C41.8083 6 42.4613 6.11166 43.0696 6.3178C43.5795 6.49061 43.8483 7.03105 43.6698 7.5249C43.4914 8.01876 42.9333 8.27902 42.4234 8.10621C42.0199 7.96948 41.5852 7.89474 41.1304 7.89474H39.705C39.1647 7.89474 38.7267 7.47059 38.7267 6.94737ZM3.57463 9.22499C4.08459 9.3978 4.35333 9.93824 4.17489 10.4321C4.03371 10.8228 3.95652 11.2438 3.95652 11.6842V13.0038C3.95652 13.527 3.51854 13.9511 2.97826 13.9511C2.43798 13.9511 2 13.527 2 13.0038V11.6842C2 11.0278 2.1153 10.3954 2.32816 9.80629C2.50661 9.31244 3.06467 9.05218 3.57463 9.22499ZM45.4254 9.22499C45.9353 9.05218 46.4934 9.31244 46.6718 9.80629C46.8847 10.3954 47 11.0278 47 11.6842V13.0581C47 13.5814 46.562 14.0055 46.0217 14.0055C45.4815 14.0055 45.0435 13.5814 45.0435 13.0581V11.6842C45.0435 11.2438 44.9663 10.8228 44.8251 10.4321C44.6467 9.93824 44.9154 9.3978 45.4254 9.22499ZM2.97826 15.5752C3.51854 15.5752 3.95652 15.9993 3.95652 16.5226V19.1617C3.95652 19.6849 3.51854 20.109 2.97826 20.109C2.43798 20.109 2 19.6849 2 19.1617V16.5226C2 15.9993 2.43798 15.5752 2.97826 15.5752ZM46.0217 15.7746C46.562 15.7746 47 16.1987 47 16.7219V19.4698C47 19.993 46.562 20.4172 46.0217 20.4172C45.4815 20.4172 45.0435 19.993 45.0435 19.4698V16.7219C45.0435 16.1987 45.4815 15.7746 46.0217 15.7746ZM2.97826 21.7331C3.51854 21.7331 3.95652 22.1572 3.95652 22.6805V25.3195C3.95652 25.8428 3.51854 26.2669 2.97826 26.2669C2.43798 26.2669 2 25.8428 2 25.3195V22.6805C2 22.1572 2.43798 21.7331 2.97826 21.7331ZM46.0217 22.1862C46.562 22.1862 47 22.6104 47 23.1336V25.8814C47 26.4047 46.562 26.8288 46.0217 26.8288C45.4815 26.8288 45.0435 26.4047 45.0435 25.8814V23.1336C45.0435 22.6104 45.4815 22.1862 46.0217 22.1862ZM2.97826 27.891C3.51854 27.891 3.95652 28.3151 3.95652 28.8383V31.4774C3.95652 32.0007 3.51854 32.4248 2.97826 32.4248C2.43798 32.4248 2 32.0007 2 31.4774V28.8383C2 28.3151 2.43798 27.891 2.97826 27.891ZM46.0217 28.5979C46.562 28.5979 47 29.022 47 29.5452V32.2931C47 32.8163 46.562 33.2405 46.0217 33.2405C45.4815 33.2405 45.0435 32.8163 45.0435 32.2931V29.5452C45.0435 29.022 45.4815 28.5979 46.0217 28.5979ZM2.97826 34.0489C3.51854 34.0489 3.95652 34.473 3.95652 34.9962V36.3158C3.95652 36.7562 4.03371 37.1772 4.17489 37.5679C4.35333 38.0618 4.08459 38.6022 3.57463 38.775C3.06467 38.9478 2.50661 38.6876 2.32816 38.1937C2.1153 37.6046 2 36.9722 2 36.3158V34.9962C2 34.473 2.43798 34.0489 2.97826 34.0489ZM46.0217 35.0095C46.562 35.0095 47 35.4337 47 35.9569V37.3308C47 37.8697 46.9053 38.3893 46.7304 38.8734C46.5519 39.3672 45.9939 39.6275 45.4839 39.4547C44.974 39.2819 44.7052 38.7414 44.8837 38.2476C44.9869 37.9618 45.0435 37.6537 45.0435 37.3308V35.9569C45.0435 35.4337 45.4815 35.0095 46.0217 35.0095ZM5.33015 40.4751C5.50859 39.9812 6.06666 39.721 6.57661 39.8938C6.98009 40.0305 7.41476 40.1053 7.86956 40.1053H9.22715C9.76743 40.1053 10.2054 40.5294 10.2054 41.0526C10.2054 41.5759 9.76743 42 9.22715 42H7.86956C7.19173 42 6.53873 41.8883 5.93041 41.6822C5.42045 41.5094 5.1517 40.969 5.33015 40.4751ZM44.3717 40.5318C44.5501 41.0257 44.2814 41.5661 43.7714 41.7389C43.2715 41.9083 42.7351 42 42.1786 42H40.257C39.7167 42 39.2787 41.5759 39.2787 41.0526C39.2787 40.5294 39.7167 40.1053 40.257 40.1053H42.1786C42.512 40.1053 42.8302 40.0505 43.1252 39.9505C43.6352 39.7777 44.1932 40.038 44.3717 40.5318ZM11.8691 41.0526C11.8691 40.5294 12.3071 40.1053 12.8474 40.1053H15.5626C16.1028 40.1053 16.5408 40.5294 16.5408 41.0526C16.5408 41.5759 16.1028 42 15.5626 42H12.8474C12.3071 42 11.8691 41.5759 11.8691 41.0526ZM18.2045 41.0526C18.2045 40.5294 18.6425 40.1053 19.1828 40.1053H21.898C22.4382 40.1053 22.8762 40.5294 22.8762 41.0526C22.8762 41.5759 22.4382 42 21.898 42H19.1828C18.6425 42 18.2045 41.5759 18.2045 41.0526ZM24.5399 41.0526C24.5399 40.5294 24.9779 40.1053 25.5182 40.1053H28.2334C28.7736 40.1053 29.2116 40.5294 29.2116 41.0526C29.2116 41.5759 28.7736 42 28.2334 42H25.5182C24.9779 42 24.5399 41.5759 24.5399 41.0526ZM30.8753 41.0526C30.8753 40.5294 31.3133 40.1053 31.8536 40.1053H35.1328C35.673 40.1053 36.111 40.5294 36.111 41.0526C36.111 41.5759 35.673 42 35.1328 42H31.8536C31.3133 42 30.8753 41.5759 30.8753 41.0526ZM24.0408 28.75C23.2123 28.75 22.5408 29.4216 22.5408 30.25C22.5408 31.0784 23.2123 31.75 24.0408 31.75C24.8692 31.75 25.5408 31.0784 25.5408 30.25C25.5408 29.4216 24.8692 28.75 24.0408 28.75ZM24.3167 23.4312C23.6699 24.0354 23.2371 24.6391 23.0027 25.2402C22.8829 25.5476 22.7912 25.9153 22.7304 26.346C22.6439 26.9584 23.1627 27.5 23.8353 27.5C24.46 27.5 24.8921 26.9722 25.1326 26.2395C25.2664 25.8322 25.5419 25.4193 26.0626 24.8721L26.067 24.8675L26.9644 23.9713L26.9652 23.9704C27.6576 23.2658 28.1288 22.6395 28.3934 22.091C28.6582 21.5342 28.7906 20.9453 28.7906 20.3214C28.7906 18.9197 28.3753 17.8703 27.5732 17.1355L27.5723 17.1347C26.7663 16.3892 25.6175 16 24.0906 16C22.583 16 21.4216 16.4062 20.5764 17.1922C20.1072 17.6323 19.7665 18.1668 19.554 18.7998C19.4282 19.1745 19.5306 19.5255 19.7746 19.7932C20.0229 20.0655 20.4162 20.2464 20.8455 20.2464C21.1563 20.2464 21.4303 20.1075 21.698 19.8748C21.9207 19.6813 22.109 19.4708 22.2908 19.2676C22.7671 18.7351 23.1991 18.2522 24.0906 18.2522C24.7152 18.2522 25.2269 18.4314 25.5769 18.8299C25.9215 19.2222 26.072 19.7849 26.072 20.473C26.072 20.9531 25.9491 21.4108 25.7071 21.843L25.7061 21.8448C25.4645 22.2679 24.9932 22.7985 24.3167 23.4312Z"
      />
    </AccessibleSvg>
  )
}

export const BicolorLostId = styled(BicolorLostIdSvg).attrs(({ color, color2, size, theme }) => ({
  color: color ?? theme.colors.primary,
  color2: color2 ?? color ?? theme.colors.secondary,
  size: size ?? theme.icons.sizes.standard,
}))``
