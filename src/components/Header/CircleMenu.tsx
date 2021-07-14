import React from "react";

type Props = {
  height: number;
  width: number;
};

export default function CircleMenu({ height, width }: Props) {
  return (
    <svg
    className="fill-current text-white"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 700.000000 700.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M1385 6084 c-111 -17 -128 -28 -274 -173 -76 -76 -148 -156 -159
-178 -32 -62 -48 -197 -33 -284 6 -39 18 -84 27 -101 8 -16 80 -94 159 -173
166 -166 183 -175 341 -175 168 0 232 26 321 132 27 30 76 79 110 107 43 36
70 69 90 109 26 54 28 64 28 192 0 117 -3 141 -22 182 -29 64 -275 311 -336
338 -45 20 -188 34 -252 24z"
        ></path>
        <path
          d="M3383 6079 c-68 -13 -115 -40 -163 -94 -25 -27 -82 -86 -127 -130
-116 -112 -128 -142 -128 -315 0 -180 5 -189 175 -360 171 -170 180 -175 360
-175 180 0 189 5 360 175 170 171 175 180 175 360 0 173 -12 203 -128 315 -45
44 -102 103 -127 130 -50 56 -94 81 -171 95 -60 12 -166 11 -226 -1z"
        ></path>
        <path
          d="M5429 6080 c-69 -12 -113 -37 -161 -88 -24 -26 -84 -87 -135 -137
-122 -120 -127 -134 -128 -315 0 -133 2 -149 23 -189 33 -61 275 -299 328
-322 97 -43 295 -45 376 -3 39 20 302 283 323 323 8 16 20 64 26 105 14 91 -1
218 -33 279 -11 22 -83 102 -159 178 -122 122 -146 140 -192 154 -63 19 -205
27 -268 15z"
        ></path>
        <path
          d="M3420 4039 c-36 -4 -82 -15 -102 -23 -49 -21 -299 -269 -330 -327
-21 -40 -23 -56 -23 -189 0 -184 2 -188 185 -370 163 -161 184 -172 350 -172
166 0 187 11 350 172 183 182 185 186 185 370 0 184 -2 188 -185 370 -122 121
-143 138 -191 152 -69 21 -157 27 -239 17z"
        ></path>
        <path
          d="M1335 4034 c-79 -20 -95 -32 -232 -169 -81 -81 -149 -159 -159 -181
-26 -57 -26 -311 0 -368 26 -58 291 -319 341 -337 26 -9 84 -14 170 -14 118 0
135 2 182 25 62 30 301 258 326 313 35 73 47 204 27 306 -16 87 -38 117 -172
250 -164 161 -189 174 -348 177 -63 2 -124 1 -135 -2z"
        ></path>
        <path
          d="M5397 4026 c-26 -8 -58 -21 -70 -29 -39 -25 -275 -265 -290 -294 -48
-94 -48 -312 0 -406 18 -35 268 -284 303 -302 78 -40 301 -47 384 -11 24 10
92 70 182 160 132 133 144 148 160 202 11 37 17 94 17 154 0 60 -6 117 -17
154 -16 54 -28 69 -160 202 -89 89 -158 150 -182 161 -53 22 -260 28 -327 9z"
        ></path>
        <path
          d="M1363 1999 c-34 -4 -76 -15 -95 -25 -18 -9 -99 -83 -179 -164 -169
-171 -174 -181 -174 -345 1 -172 10 -190 185 -365 177 -177 192 -184 375 -184
154 0 173 10 342 180 174 175 178 183 178 369 0 128 -2 144 -24 184 -32 61
-274 299 -328 323 -34 15 -191 42 -213 37 -3 -1 -33 -5 -67 -10z"
        ></path>
        <path
          d="M5463 1999 c-34 -4 -82 -16 -106 -27 -56 -25 -312 -278 -334 -329
-36 -88 -32 -296 8 -374 23 -47 270 -299 315 -322 77 -40 240 -45 354 -11 44
13 69 33 189 153 77 76 148 156 159 177 32 62 47 189 33 280 -6 41 -18 89 -26
105 -21 40 -284 303 -324 323 -17 9 -64 21 -104 26 -81 11 -78 11 -164 -1z"
        ></path>
        <path
          d="M3355 1987 c-68 -23 -86 -37 -216 -167 -170 -170 -174 -178 -174
-355 0 -187 5 -196 177 -369 73 -73 148 -141 166 -150 18 -9 68 -22 112 -28
92 -14 216 -1 272 28 18 9 93 77 166 150 172 173 177 182 177 369 0 177 -4
185 -175 357 -162 162 -180 171 -345 175 -79 2 -134 -2 -160 -10z"
        ></path>
      </g>
    </svg>
  );
}
