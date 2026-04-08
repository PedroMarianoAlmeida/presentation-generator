import React from "react";
import { StyleSheet } from "@react-pdf/renderer";
import {
  SpeechIcon,
  LaughIcon,
  DollarSignIcon,
  HelpCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  VideoIcon,
  HandshakeIcon,
  Repeat2Icon,
  SwordIcon,
  NotebookPenIcon,
  LightbulbIcon,
  TargetIcon,
  CodeIcon,
  AwardIcon,
  BadgeAlertIcon,
  ClipboardListIcon,
  GaugeIcon,
  GitBranchIcon,
  GitBranchPlusIcon,
  GitMergeIcon,
  LanguagesIcon,
  MessageSquareTextIcon,
  SearchIcon,
  UsersIcon,
  BrainCircuitIcon,
  ScaleIcon,
  CheckIcon,
} from "../../../content/shared/icons/svg-icons";

interface IconProviderProps {
  iconType: string;
  color?: string;
  width?: number;
  height?: number;
  hasSubtitle?: boolean;
}

const styles = StyleSheet.create({
  bulletIcon: {
    width: 42,
    height: 42,
    marginTop: 25,
  },
  bulletIconSingleLine: {
    width: 42,
    height: 42,
    marginTop: 40,
  },
});

export function IconProvider({
  iconType,
  color = "#9BAE23",
  width = 42,
  height = 42,
  hasSubtitle = false,
}: IconProviderProps) {
  const iconStyle = hasSubtitle ? styles.bulletIcon : styles.bulletIconSingleLine;

  switch (iconType) {
    case "check":
      return <CheckIcon style={iconStyle} color={color} width={width} height={height} />;
    case "speech":
      return <SpeechIcon style={iconStyle} color={color} width={width} height={height} />;
    case "laugh":
      return <LaughIcon style={iconStyle} color={color} width={width} height={height} />;
    case "dollar":
      return <DollarSignIcon style={iconStyle} color={color} width={width} height={height} />;
    case "help":
      return <HelpCircleIcon style={iconStyle} color={color} width={width} height={height} />;
    case "star":
      return <StarIcon style={iconStyle} color="#FFD700" width={width} height={height} />;
    case "shield":
      return <ShieldCheckIcon style={iconStyle} color={color} width={width} height={height} />;
    case "shield-check":
      return <ShieldCheckIcon style={iconStyle} color={color} width={width} height={height} />;
    case "video":
      return <VideoIcon style={iconStyle} color={color} width={width} height={height} />;
    case "handshake":
      return <HandshakeIcon style={iconStyle} color={color} width={width} height={height} />;
    case "repeat":
      return <Repeat2Icon style={iconStyle} color={color} width={width} height={height} />;
    case "sword":
      return <SwordIcon style={iconStyle} color={color} width={width} height={height} />;
    case "notebook-pen":
      return <NotebookPenIcon style={iconStyle} color={color} width={width} height={height} />;
    case "target":
      return <TargetIcon style={iconStyle} color={color} width={width} height={height} />;
    case "code":
      return <CodeIcon style={iconStyle} color={color} width={width} height={height} />;
    case "award":
      return <AwardIcon style={iconStyle} color={color} width={width} height={height} />;
    case "badge-alert":
      return <BadgeAlertIcon style={iconStyle} color={color} width={width} height={height} />;
    case "clipboard-list":
      return <ClipboardListIcon style={iconStyle} color={color} width={width} height={height} />;
    case "gauge":
      return <GaugeIcon style={iconStyle} color={color} width={width} height={height} />;
    case "git-branch":
      return <GitBranchIcon style={iconStyle} color={color} width={width} height={height} />;
    case "git-branch-plus":
      return <GitBranchPlusIcon style={iconStyle} color={color} width={width} height={height} />;
    case "git-merge":
      return <GitMergeIcon style={iconStyle} color={color} width={width} height={height} />;
    case "languages":
      return <LanguagesIcon style={iconStyle} color={color} width={width} height={height} />;
    case "message-square-text":
      return <MessageSquareTextIcon style={iconStyle} color={color} width={width} height={height} />;
    case "search":
      return <SearchIcon style={iconStyle} color={color} width={width} height={height} />;
    case "users":
      return <UsersIcon style={iconStyle} color={color} width={width} height={height} />;
    case "brain-circuit":
      return <BrainCircuitIcon style={iconStyle} color={color} width={width} height={height} />;
    case "scale":
      return <ScaleIcon style={iconStyle} color={color} width={width} height={height} />;
    case "lightbulb":
    default:
      return <LightbulbIcon style={iconStyle} color={color} width={width} height={height} />;
  }
}