export default function Bubble({ className }) {
  return (
    <div className={className}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_34_199)">
          <rect
            x="11.8369"
            y="11.8359"
            width="6.32653"
            height="6.32653"
            rx="3.16327"
            fill="#FDA4AF"
          />
          <rect
            x="10"
            y="10"
            width="10"
            height="10"
            rx="5"
            fill="#FDA4AF"
            fillOpacity="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_34_199"
            x="0"
            y="0"
            width="30"
            height="30"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.992157 0 0 0 0 0.643137 0 0 0 0 0.686275 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_34_199"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_34_199"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
