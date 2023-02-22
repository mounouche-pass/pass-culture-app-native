import * as React from 'react'
import { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg'
import { v1 as uuidv1 } from 'uuid'

import { AccessibleSvg } from 'ui/svg/AccessibleSvg'

interface Props {
  height?: number
  width?: number | string
}

const NotMemoizedVenueHeaderBackground: React.FC<Props> = (props) => {
  const width = props.width || '375'
  const height = props.height || '259'
  const LINEAR_GRADIENT_1_ID = uuidv1()

  return (
    <AccessibleSvg height={height} width={width} viewBox="0 0 375 259" fill="none">
      <Defs>
        <LinearGradient
          id={LINEAR_GRADIENT_1_ID}
          x1="111.837"
          y1="246.887"
          x2="151.59"
          y2="377.219"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0%" stopColor="#EB0055" />
          <Stop offset="100%" stopColor="#320096" />
        </LinearGradient>
      </Defs>
      <Rect width="397" height="338" transform="translate(-11 -9)" fill="#F1F1F4" />
      <Path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-79.1368 166.964C-79.1368 165.692 -78.0762 164.643 -76.7919 164.643H-34.5837C-33.2994 164.643 -32.2388 165.692 -32.2388 166.964V183.213C-32.2388 184.495 -31.189 185.534 -29.8939 185.534C-28.5989 185.534 -27.549 184.495 -27.549 183.213V166.964C-27.549 163.128 -30.7093 160 -34.5837 160H-76.7919C-80.6663 160 -83.8265 163.128 -83.8265 166.964V201.783C-83.8265 202.588 -83.4119 203.298 -82.7824 203.714L-106.23 208.067L-106.239 208.068C-109.544 208.695 -111.965 211.574 -111.965 214.921V220.353C-111.965 221.635 -110.915 222.674 -109.62 222.674C-108.325 222.674 -107.276 221.635 -107.276 220.353V214.921C-107.276 213.812 -106.463 212.839 -105.361 212.629L-105.357 212.628L-58.4688 203.925C-57.032 203.659 -55.6878 204.763 -55.6878 206.216V257.493H-72.1021V241.244C-72.1021 237.409 -75.2623 234.28 -79.1368 234.28H-83.8265C-87.701 234.28 -90.8612 237.409 -90.8612 241.244V257.493H-107.276V231.959C-107.276 230.677 -108.325 229.638 -109.62 229.638C-110.915 229.638 -111.965 230.677 -111.965 231.959V257.493H-116.655C-117.95 257.493 -119 258.532 -119 259.814C-119 261.096 -117.95 262.136 -116.655 262.136H-88.5163C-87.2213 262.136 -86.1714 261.096 -86.1714 259.814V241.244C-86.1714 239.973 -85.1109 238.923 -83.8265 238.923H-79.1368C-77.8524 238.923 -76.7919 239.973 -76.7919 241.244V259.814C-76.7919 259.975 -76.7754 260.131 -76.7442 260.282C-76.6029 260.966 -76.1581 261.54 -75.5553 261.86C-75.2253 262.036 -74.8479 262.136 -74.447 262.136L-74.4287 262.136H-53.3429C-52.0478 262.136 -50.998 261.096 -50.998 259.814V206.216C-50.998 204.136 -51.9136 202.294 -53.3429 201.026V194.819C-53.3429 193.537 -54.3927 192.498 -55.6878 192.498C-56.9828 192.498 -58.0327 193.537 -58.0327 194.819V199.241C-58.4597 199.242 -58.8938 199.281 -59.3313 199.362L-67.4123 200.862V194.819C-67.4123 193.537 -68.4621 192.498 -69.7572 192.498C-71.0522 192.498 -72.1021 193.537 -72.1021 194.819V201.732L-79.5624 203.117C-79.2942 202.739 -79.1368 202.279 -79.1368 201.783V166.964ZM14.6591 179.638C14.6591 178.161 16.0358 177.059 17.4842 177.36L64.3848 187.04L64.394 187.042C65.4666 187.259 66.2469 188.198 66.2469 189.318V259.814C66.2469 261.096 67.2967 262.136 68.5917 262.136C69.8868 262.136 70.9366 261.096 70.9366 259.814V189.318C70.9366 186.028 68.6241 183.162 65.3379 182.495L65.3327 182.494L18.4452 172.816C14.0788 171.911 9.96933 175.219 9.96933 179.638V221.305H-20.5143C-21.8094 221.305 -22.8592 222.344 -22.8592 223.626C-22.8592 224.908 -21.8094 225.947 -20.5143 225.947H35.7632V257.493H19.3489C18.0539 257.493 17.004 258.532 17.004 259.814C17.004 261.096 18.0539 262.136 19.3489 262.136H38.0889L38.1081 262.136L38.1273 262.136H47.4877C48.7827 262.136 49.8326 261.096 49.8326 259.814C49.8326 258.532 48.7827 257.493 47.4877 257.493H40.453V223.626C40.453 222.344 39.4031 221.305 38.1081 221.305H14.6591V179.638ZM-29.8939 192.73C-28.5989 192.73 -27.549 193.769 -27.549 195.051V257.493H-25.2041C-23.9091 257.493 -22.8592 258.532 -22.8592 259.814C-22.8592 261.096 -23.9091 262.136 -25.2041 262.136L-43.9633 262.136C-45.2584 262.136 -46.3082 261.096 -46.3082 259.814C-46.3082 258.532 -45.2584 257.493 -43.9633 257.493H-32.2388V195.051C-32.2388 193.769 -31.189 192.73 -29.8939 192.73ZM-41.6184 192.498C-40.3233 192.498 -39.2735 193.537 -39.2735 194.819V201.783C-39.2735 203.065 -40.3233 204.104 -41.6184 204.104C-42.9135 204.104 -43.9633 203.065 -43.9633 201.783V194.819C-43.9633 193.537 -42.9135 192.498 -41.6184 192.498ZM-41.6184 211.068C-40.3233 211.068 -39.2735 212.107 -39.2735 213.389V220.353C-39.2735 221.635 -40.3233 222.674 -41.6184 222.674C-42.9135 222.674 -43.9633 221.635 -43.9633 220.353V213.389C-43.9633 212.107 -42.9135 211.068 -41.6184 211.068ZM26.3836 206.425C27.6786 206.425 28.7285 207.465 28.7285 208.747V213.389C28.7285 214.671 27.6786 215.71 26.3836 215.71C25.0886 215.71 24.0387 214.671 24.0387 213.389V208.747C24.0387 207.465 25.0886 206.425 26.3836 206.425ZM40.453 206.425C41.748 206.425 42.7979 207.465 42.7979 208.747V213.389C42.7979 214.671 41.748 215.71 40.453 215.71C39.1579 215.71 38.1081 214.671 38.1081 213.389V208.747C38.1081 207.465 39.1579 206.425 40.453 206.425ZM54.5224 206.425C55.8174 206.425 56.8673 207.465 56.8673 208.747V213.389C56.8673 214.671 55.8174 215.71 54.5224 215.71C53.2273 215.71 52.1775 214.671 52.1775 213.389V208.747C52.1775 207.465 53.2273 206.425 54.5224 206.425ZM54.5224 222.674C55.8174 222.674 56.8673 223.713 56.8673 224.995V229.638C56.8673 230.92 55.8174 231.959 54.5224 231.959C53.2273 231.959 52.1775 230.92 52.1775 229.638V224.995C52.1775 223.713 53.2273 222.674 54.5224 222.674ZM54.5224 238.923C55.8174 238.923 56.8673 239.962 56.8673 241.244V245.887C56.8673 247.169 55.8174 248.208 54.5224 248.208C53.2273 248.208 52.1775 247.169 52.1775 245.887V241.244C52.1775 239.962 53.2273 238.923 54.5224 238.923ZM28.7285 192.498C28.7285 191.216 27.6786 190.176 26.3836 190.176C25.0886 190.176 24.0387 191.216 24.0387 192.498V197.14C24.0387 198.422 25.0886 199.462 26.3836 199.462C27.6786 199.462 28.7285 198.422 28.7285 197.14V192.498ZM42.7979 192.498C42.7979 191.216 41.748 190.176 40.453 190.176C39.1579 190.176 38.1081 191.216 38.1081 192.498V197.14C38.1081 198.422 39.1579 199.462 40.453 199.462C41.748 199.462 42.7979 198.422 42.7979 197.14V192.498ZM56.8673 192.498C56.8673 191.216 55.8174 190.176 54.5224 190.176C53.2273 190.176 52.1775 191.216 52.1775 192.498V197.14C52.1775 198.422 53.2273 199.462 54.5224 199.462C55.8174 199.462 56.8673 198.422 56.8673 197.14V192.498ZM-15.8245 234.28C-17.1196 234.28 -18.1694 235.32 -18.1694 236.602C-18.1694 237.884 -17.1196 238.923 -15.8245 238.923H-11.1348C-9.83969 238.923 -8.78985 237.884 -8.78985 236.602C-8.78985 235.32 -9.83969 234.28 -11.1348 234.28H-15.8245ZM2.93464 234.28C1.63958 234.28 0.589737 235.32 0.589737 236.602C0.589737 237.884 1.63958 238.923 2.93464 238.923H7.62443C8.91949 238.923 9.96933 237.884 9.96933 236.602C9.96933 235.32 8.91949 234.28 7.62443 234.28H2.93464ZM21.6938 234.28C20.3988 234.28 19.3489 235.32 19.3489 236.602C19.3489 237.884 20.3988 238.923 21.6938 238.923H26.3836C27.6787 238.923 28.7285 237.884 28.7285 236.602C28.7285 235.32 27.6787 234.28 26.3836 234.28H21.6938ZM-39.2735 234.28C-39.2735 232.998 -40.3233 231.959 -41.6184 231.959C-42.9135 231.959 -43.9633 232.998 -43.9633 234.28V241.244C-43.9633 242.526 -42.9135 243.566 -41.6184 243.566C-40.3233 243.566 -39.2735 242.526 -39.2735 241.244V234.28ZM-39.2735 176.249C-39.2735 174.967 -40.3233 173.928 -41.6184 173.928C-42.9135 173.928 -43.9633 174.967 -43.9633 176.249V183.213C-43.9633 184.495 -42.9135 185.534 -41.6184 185.534C-40.3233 185.534 -39.2735 184.495 -39.2735 183.213V176.249ZM-55.6878 173.928C-54.3927 173.928 -53.3429 174.967 -53.3429 176.249V183.213C-53.3429 184.495 -54.3927 185.534 -55.6878 185.534C-56.9828 185.534 -58.0327 184.495 -58.0327 183.213V176.249C-58.0327 174.967 -56.9828 173.928 -55.6878 173.928ZM-67.4123 176.249C-67.4123 174.967 -68.4621 173.928 -69.7572 173.928C-71.0522 173.928 -72.1021 174.967 -72.1021 176.249V183.213C-72.1021 184.495 -71.0522 185.534 -69.7572 185.534C-68.4621 185.534 -67.4123 184.495 -67.4123 183.213V176.249ZM295.863 166.964C295.863 165.692 296.924 164.643 298.208 164.643H340.416C341.701 164.643 342.761 165.692 342.761 166.964V183.213C342.761 184.495 343.811 185.534 345.106 185.534C346.401 185.534 347.451 184.495 347.451 183.213V166.964C347.451 163.128 344.291 160 340.416 160H298.208C294.334 160 291.173 163.128 291.173 166.964V201.783C291.173 202.588 291.588 203.298 292.218 203.714L268.77 208.067L268.761 208.068C265.456 208.695 263.035 211.574 263.035 214.921V220.353C263.035 221.635 264.085 222.674 265.38 222.674C266.675 222.674 267.724 221.635 267.724 220.353V214.921C267.724 213.812 268.537 212.839 269.639 212.629L269.643 212.628L316.531 203.925C317.968 203.659 319.312 204.763 319.312 206.216V257.493H302.898V241.244C302.898 237.409 299.738 234.28 295.863 234.28H291.173C287.299 234.28 284.139 237.409 284.139 241.244V257.493H267.724V231.959C267.724 230.677 266.675 229.638 265.38 229.638C264.085 229.638 263.035 230.677 263.035 231.959V257.493H258.345C257.05 257.493 256 258.532 256 259.814C256 261.096 257.05 262.136 258.345 262.136H286.484C287.779 262.136 288.829 261.096 288.829 259.814V241.244C288.829 239.973 289.889 238.923 291.173 238.923H295.863C297.148 238.923 298.208 239.973 298.208 241.244V259.814C298.208 259.975 298.225 260.131 298.256 260.282C298.397 260.966 298.842 261.54 299.445 261.86C299.775 262.036 300.152 262.136 300.553 262.136L300.571 262.136H321.657C322.952 262.136 324.002 261.096 324.002 259.814V206.216C324.002 204.136 323.086 202.294 321.657 201.026V194.819C321.657 193.537 320.607 192.498 319.312 192.498C318.017 192.498 316.967 193.537 316.967 194.819V199.241C316.54 199.242 316.106 199.281 315.669 199.362L307.588 200.862V194.819C307.588 193.537 306.538 192.498 305.243 192.498C303.948 192.498 302.898 193.537 302.898 194.819V201.732L295.438 203.117C295.706 202.739 295.863 202.279 295.863 201.783V166.964ZM389.659 179.638C389.659 178.161 391.036 177.059 392.484 177.36L439.385 187.04L439.394 187.042C440.467 187.259 441.247 188.198 441.247 189.318V259.814C441.247 261.096 442.297 262.136 443.592 262.136C444.887 262.136 445.937 261.096 445.937 259.814V189.318C445.937 186.028 443.624 183.162 440.338 182.495L440.333 182.494L393.445 172.816C389.079 171.911 384.969 175.219 384.969 179.638V221.305H354.486C353.191 221.305 352.141 222.344 352.141 223.626C352.141 224.908 353.191 225.947 354.486 225.947H410.763V257.493H394.349C393.054 257.493 392.004 258.532 392.004 259.814C392.004 261.096 393.054 262.136 394.349 262.136H413.089L413.108 262.136L413.127 262.136H422.488C423.783 262.136 424.833 261.096 424.833 259.814C424.833 258.532 423.783 257.493 422.488 257.493H415.453V223.626C415.453 222.344 414.403 221.305 413.108 221.305H389.659V179.638ZM345.106 192.73C346.401 192.73 347.451 193.769 347.451 195.051V257.493H349.796C351.091 257.493 352.141 258.532 352.141 259.814C352.141 261.096 351.091 262.136 349.796 262.136L331.037 262.136C329.742 262.136 328.692 261.096 328.692 259.814C328.692 258.532 329.742 257.493 331.037 257.493H342.761V195.051C342.761 193.769 343.811 192.73 345.106 192.73ZM333.382 192.498C334.677 192.498 335.727 193.537 335.727 194.819V201.783C335.727 203.065 334.677 204.104 333.382 204.104C332.087 204.104 331.037 203.065 331.037 201.783V194.819C331.037 193.537 332.087 192.498 333.382 192.498ZM333.382 211.068C334.677 211.068 335.727 212.107 335.727 213.389V220.353C335.727 221.635 334.677 222.674 333.382 222.674C332.087 222.674 331.037 221.635 331.037 220.353V213.389C331.037 212.107 332.087 211.068 333.382 211.068ZM401.384 206.425C402.679 206.425 403.729 207.465 403.729 208.747V213.389C403.729 214.671 402.679 215.71 401.384 215.71C400.089 215.71 399.039 214.671 399.039 213.389V208.747C399.039 207.465 400.089 206.425 401.384 206.425ZM415.453 206.425C416.748 206.425 417.798 207.465 417.798 208.747V213.389C417.798 214.671 416.748 215.71 415.453 215.71C414.158 215.71 413.108 214.671 413.108 213.389V208.747C413.108 207.465 414.158 206.425 415.453 206.425ZM429.522 206.425C430.817 206.425 431.867 207.465 431.867 208.747V213.389C431.867 214.671 430.817 215.71 429.522 215.71C428.227 215.71 427.177 214.671 427.177 213.389V208.747C427.177 207.465 428.227 206.425 429.522 206.425ZM429.522 222.674C430.817 222.674 431.867 223.713 431.867 224.995V229.638C431.867 230.92 430.817 231.959 429.522 231.959C428.227 231.959 427.177 230.92 427.177 229.638V224.995C427.177 223.713 428.227 222.674 429.522 222.674ZM429.522 238.923C430.817 238.923 431.867 239.962 431.867 241.244V245.887C431.867 247.169 430.817 248.208 429.522 248.208C428.227 248.208 427.177 247.169 427.177 245.887V241.244C427.177 239.962 428.227 238.923 429.522 238.923ZM403.729 192.498C403.729 191.216 402.679 190.176 401.384 190.176C400.089 190.176 399.039 191.216 399.039 192.498V197.14C399.039 198.422 400.089 199.462 401.384 199.462C402.679 199.462 403.729 198.422 403.729 197.14V192.498ZM417.798 192.498C417.798 191.216 416.748 190.176 415.453 190.176C414.158 190.176 413.108 191.216 413.108 192.498V197.14C413.108 198.422 414.158 199.462 415.453 199.462C416.748 199.462 417.798 198.422 417.798 197.14V192.498ZM431.867 192.498C431.867 191.216 430.817 190.176 429.522 190.176C428.227 190.176 427.177 191.216 427.177 192.498V197.14C427.177 198.422 428.227 199.462 429.522 199.462C430.817 199.462 431.867 198.422 431.867 197.14V192.498ZM359.175 234.28C357.88 234.28 356.831 235.32 356.831 236.602C356.831 237.884 357.88 238.923 359.175 238.923H363.865C365.16 238.923 366.21 237.884 366.21 236.602C366.21 235.32 365.16 234.28 363.865 234.28H359.175ZM377.935 234.28C376.64 234.28 375.59 235.32 375.59 236.602C375.59 237.884 376.64 238.923 377.935 238.923H382.624C383.919 238.923 384.969 237.884 384.969 236.602C384.969 235.32 383.919 234.28 382.624 234.28H377.935ZM396.694 234.28C395.399 234.28 394.349 235.32 394.349 236.602C394.349 237.884 395.399 238.923 396.694 238.923H401.384C402.679 238.923 403.729 237.884 403.729 236.602C403.729 235.32 402.679 234.28 401.384 234.28H396.694ZM335.727 234.28C335.727 232.998 334.677 231.959 333.382 231.959C332.087 231.959 331.037 232.998 331.037 234.28V241.244C331.037 242.526 332.087 243.566 333.382 243.566C334.677 243.566 335.727 242.526 335.727 241.244V234.28ZM335.727 176.249C335.727 174.967 334.677 173.928 333.382 173.928C332.087 173.928 331.037 174.967 331.037 176.249V183.213C331.037 184.495 332.087 185.534 333.382 185.534C334.677 185.534 335.727 184.495 335.727 183.213V176.249ZM319.312 173.928C320.607 173.928 321.657 174.967 321.657 176.249V183.213C321.657 184.495 320.607 185.534 319.312 185.534C318.017 185.534 316.967 184.495 316.967 183.213V176.249C316.967 174.967 318.017 173.928 319.312 173.928ZM307.588 176.249C307.588 174.967 306.538 173.928 305.243 173.928C303.948 173.928 302.898 174.967 302.898 176.249V183.213C302.898 184.495 303.948 185.534 305.243 185.534C306.538 185.534 307.588 184.495 307.588 183.213V176.249Z"
        fill={`url(#${LINEAR_GRADIENT_1_ID})`}
      />
    </AccessibleSvg>
  )
}

export const VenueHeaderBackground = React.memo(NotMemoizedVenueHeaderBackground)