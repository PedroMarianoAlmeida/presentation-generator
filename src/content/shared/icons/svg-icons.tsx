import React from "react";
import { Svg, Path } from "@react-pdf/renderer";

interface SVGIconProps {
  style?: any;
  color?: string;
  width?: string | number;
  height?: string | number;
}

export const FileHeartIcon = ({ 
  style, 
  color = "#FF0000", 
  width = "32", 
  height = "32" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M14 2v4a2 2 0 0 0 2 2h4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.62 13.8A2.25 2.25 0 1 1 6 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 6.005V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-1.9-1.376"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const MoveRightIcon = ({ 
  style, 
  color = "currentColor", 
  width = "40", 
  height = "40" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M18 8L22 12L18 16"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 12H22"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const LightbulbIcon = ({ 
  style, 
  color = "currentColor", 
  width = "32", 
  height = "32" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 18h6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 22h4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ListChecksIcon = ({ 
  style, 
  color = "currentColor", 
  width = "50", 
  height = "50" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M13 5h8"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 12h8"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 19h8"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m3 17 2 2 4-4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m3 7 2 2 4-4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const RocketIcon = ({ 
  style, 
  color = "currentColor", 
  width = "50", 
  height = "50" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Repeat2Icon = ({ 
  style, 
  color = "currentColor", 
  width = "50", 
  height = "50" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m2 9 3-3 3 3"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 18H7a2 2 0 0 1-2-2V6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m22 15-3 3-3-3"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 6h6a2 2 0 0 1 2 2v10"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const EarthIcon = ({ 
  style, 
  color = "currentColor", 
  width = "80", 
  height = "80" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M21.54 15H17a2 2 0 0 0-2 2v4.54"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 12m-10 0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export const CircleArrowRightIcon = ({ 
  style, 
  color = "currentColor", 
  width = "60", 
  height = "60" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M12 12m-10 0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m12 16 4-4-4-4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 12h8"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CheckIcon = ({
  style,
  color = "#22c55e",
  width = "20",
  height = "20"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M20 6 9 17l-5-5"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const XIcon = ({ 
  style, 
  color = "#ef4444", 
  width = "20", 
  height = "20" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m18 6-12 12"
      fill="none"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m6 6 12 12"
      fill="none"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const LaptopIcon = ({ 
  style, 
  color = "currentColor", 
  width = "80", 
  height = "80" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a.5.5 0 0 1-.44.75H3.16a.5.5 0 0 1-.44-.75L4 16"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BinaryIcon = ({ 
  style, 
  color = "currentColor", 
  width = "80", 
  height = "80" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M14 14h4v6a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 4h4v6a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 20h4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 10h4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 14h2v6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 4h2v6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CpuIcon = ({ 
  style, 
  color = "currentColor", 
  width = "80", 
  height = "80" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M12 20v2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 2v2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 20v2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 2v2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 12h2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 17h2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 7h2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 12h2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 17h2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 7h2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 20v2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 2v2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 4h16v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 8h8v8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const MessageSquareIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const HelpCircleIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M12 12m-10 0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 17h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const TargetIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M12 12m-10 0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M12 12m-6 0a6,6 0 1,0 12,0a6,6 0 1,0 -12,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M12 12m-2 0a2,2 0 1,0 4,0a2,2 0 1,0 -4,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export const StarIcon = ({ 
  style, 
  color = "#FFD700", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill={color}
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const DollarSignIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M12 2v20"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SpeechIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 15a3.5 3.5 0 0 0-.025-4.975"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const LaughIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M12 12m-10 0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M8 14s1.5 2 4 2 4-2 4-2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 9h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 9h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const HandshakeIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m11 17 2 2a1 1 0 1 0 3-3"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m21 3 1 11h-2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 4h8.5l2 2.5-2.5 2.5L8.5 6.5 8 7l-2.5-2.5"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const VideoIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ShieldCheckIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m9 12 2 2 4-4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SwordIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M14.5 17.5 3 6V3h3l11.5 11.5"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 19l6-6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 16l2 2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m14 14 2 2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const NotebookPenIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 6h4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 10h4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 14h4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 18h4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const WandSparklesIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m14 7 3 3"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5 6v4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 14v4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 2v2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 8H3"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 16h-4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 3H9"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const FrownIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M12 12m-10 0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M16 16s-1.5-2-4-2-4 2-4 2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 9h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 9h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const DramaIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M10 11h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 6h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 6h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.5 13.1h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.4 9.9c-.8.8-2 .8-2.8 0"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BicepsFlexedIcon = ({ 
  style, 
  color = "currentColor", 
  width = "24", 
  height = "24" 
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 14a5 5 0 0 0-7.584 2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.964 6.825C8.019 7.977 9.5 13 8 15"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GiftIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M3 8h18v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 8v13"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CodeIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m16 18 6-6-6-6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m8 6-6 6 6 6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const AwardIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 8m-6 0a6,6 0 1,0 12,0a6,6 0 1,0 -12,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export const BadgeAlertIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 8v4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 16h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ClipboardListIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M8 2h8a1 1 0 0 1 1 1v1H7V3a1 1 0 0 1 1-1z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 11h4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 16h4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 11h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 16h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GaugeIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m12 14 4-4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.34 19a10 10 0 1 1 17.32 0"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GitBranchIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M6 3v12"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 6m-3 0a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M6 18m-3 0a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M18 9a9 9 0 0 1-9 9"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GitBranchPlusIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M6 3v12"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 9m-3 0a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M6 21m-3 0a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M15 6a9 9 0 0 0-9 9"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 15v6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 18h-6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GitMergeIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M18 18m-3 0a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M6 6m-3 0a3,3 0 1,0 6,0a3,3 0 1,0 -6,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M6 21V9a9 9 0 0 0 9 9"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const LanguagesIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m5 8 6 6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m4 14 6-6 2-3"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 5h12"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 2h1"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m22 22-5-10-5 10"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 18h6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const MessageSquareTextIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 11h10"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 15h6"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 7h8"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SearchIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m21 21-4.34-4.34"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 11m-8 0a8,8 0 1,0 16,0a8,8 0 1,0 -16,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export const UsersIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 3.128a4 4 0 0 1 0 7.744"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 21v-2a4 4 0 0 0-3-3.87"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 7m-4 0a4,4 0 1,0 8,0a4,4 0 1,0 -8,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export const BrainCircuitIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 13a4.5 4.5 0 0 0 3-4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.003 5.125A3 3 0 0 0 6.401 6.5"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.477 10.896a4 4 0 0 1 .585-.396"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 18a4 4 0 0 1-1.967-.516"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 13h4"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 18h6a2 2 0 0 1 2 2v1"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 8h8"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 8V5a2 2 0 0 1 2-2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 13m-.5 0a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0"
      fill={color}
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M18 3m-.5 0a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0"
      fill={color}
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M20 21m-.5 0a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0"
      fill={color}
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M20 8m-.5 0a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0"
      fill={color}
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export const ScaleIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 21h10"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 3v18"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PoopIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M10 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Z"
      fill={color}
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 11c0-1.66-1.34-3-3-3h-2c-1.66 0-3 1.34-3 3v1h8v-1Z"
      fill={color}
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 18c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2Z"
      fill={color}
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BombIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M11 13m-9 0a9,9 0 1,0 18,0a9,9 0 1,0 -18,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m22 2-1.5 1.5"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ThinkingIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <Path
      d="M12 12m-10 0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
    <Path
      d="M9 10h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 10h.01"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.5 15.5c.8.8 2.2.8 3 0s2.2-.8 3 0"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 18h2v2"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.5 21h1"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const FaceFrownOpenIcon = ({
  style,
  color = "currentColor",
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 512 512"
    width={width}
    height={height}
  >
    <Path
      d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM176 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM182.4 382.5c-12.4 5.2-26.5-4.1-21.1-16.4 16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8z"
      fill={color}
    />
  </Svg>
);

export const JavaScriptIcon = ({
  style,
  width = "24",
  height = "24"
}: SVGIconProps) => (
  <Svg
    style={style}
    viewBox="0 0 256 256"
    width={width}
    height={height}
  >
    <Path
      d="M0 0h256v256H0V0z"
      fill="#F7DF1E"
    />
    <Path
      d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"
      fill="#000000"
    />
  </Svg>
);