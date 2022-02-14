import * as React from 'react'
import { Path } from 'react-native-svg'
import styled from 'styled-components/native'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'

import { AccessibleIcon } from '../types'

function PerformingArtsSvg({
  size,
  color,
  accessibilityLabel,
  testID,
}: AccessibleIcon): JSX.Element {
  return (
    <AccessibleSvg
      width={size}
      height={size}
      testID={testID}
      fill={color}
      viewBox="0 0 96 96"
      accessibilityLabel={accessibilityLabel}
      aria-hidden={!accessibilityLabel}>
      <Path d="M60.4331 90C59.4329 90 58.4126 89.82 57.4524 89.42L42.2884 83.22C29.1849 77.86 19.1223 66.48 15.3813 52.74L10.0599 33.2C9.95986 32.86 9.95986 32.52 10.0599 32.18C10.2399 31.5 14.6411 15.36 40.3679 8.26002C49.3302 5.80002 57.5924 5.32002 64.9343 6.88002C66.0146 7.10002 66.7148 8.16002 66.4747 9.26002C66.2547 10.34 65.1944 11.04 64.0941 10.8C57.3723 9.38002 49.7503 9.82002 41.4081 12.12C20.1825 18 14.9612 30.14 14.0809 32.72L19.2423 51.7C22.6632 64.24 31.8256 74.64 43.7888 79.52L58.9528 85.72C60.5932 86.38 62.5137 85.86 63.594 84.44L73.4966 71.34C81.3186 61 83.9593 47.34 80.5384 34.8L75.217 15.26C74.917 14.2 75.5571 13.1 76.6174 12.8C77.6777 12.5 78.778 13.14 79.078 14.2L84.3995 33.74C88.1404 47.46 85.2397 62.42 76.6774 73.74L66.7748 86.84C65.2344 88.88 62.8538 90 60.4331 90ZM67.4153 32.8799C67.7954 33.18 68.2555 33.34 68.6956 33.34C69.2758 33.34 69.856 33.1 70.216 32.62C70.9362 31.76 70.8162 30.5 69.956 29.8C67.2753 27.58 64.3745 27.14 62.8941 27.08C59.4332 26.92 56.8525 28.34 55.6322 29.18C54.732 29.8 54.5119 31.0599 55.1321 31.9599C55.7522 32.8599 56.9926 33.08 57.9128 32.4599C58.733 31.9 60.4335 30.96 62.7341 31.08C63.7143 31.12 65.6348 31.42 67.4153 32.8799ZM33.4861 62.98C34.4664 64.24 44.1089 76.3 54.9918 76.3C56.2321 76.3 57.4924 76.14 58.7528 75.76C71.076 72.38 73.7767 53.56 73.9968 51.8C74.3169 50.2 73.6767 48.58 72.3163 47.66C70.916 46.72 69.1355 46.74 67.7751 47.72C61.8136 51.96 56.6722 54.8 53.2713 55.74C49.8704 56.68 44.0089 56.88 36.747 56.28C35.0665 56.18 33.5461 57.04 32.826 58.56C32.1258 60.06 32.3858 61.78 33.4861 62.98ZM36.6069 60.46L36.4269 60.28C41.8883 60.72 49.4303 60.98 54.3516 59.6C59.2729 58.24 65.6346 54.16 70.0757 50.96V50.98C70.0557 51.06 70.0357 51.14 70.0357 51.22C70.0157 51.4 67.7551 69.14 57.6925 71.92C47.6298 74.7 36.707 60.6 36.6069 60.46ZM26.6242 44.18C26.8843 44.28 27.1643 44.34 27.4244 44.34C28.1846 44.34 28.9248 43.9 29.2849 43.14C29.685 42.22 30.6653 40.54 32.6658 39.4C33.526 38.92 35.3065 38.16 37.5871 38.46C38.6674 38.6 39.6876 37.84 39.8277 36.74C39.9677 35.66 39.2075 34.64 38.1072 34.5C34.6863 34.04 31.9856 35.18 30.6853 35.92C27.6645 37.62 26.2041 40.18 25.6039 41.54C25.1438 42.56 25.6039 43.74 26.6242 44.18Z" />
    </AccessibleSvg>
  )
}

export const PerformingArtsIcon = styled(PerformingArtsSvg).attrs(({ color, size, theme }) => ({
  color: color ?? theme.colors.black,
  size: size ?? theme.icons.sizes.standard,
}))``
