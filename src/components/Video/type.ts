export interface videoProps {
  pause: boolean;
  end: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isLoading: boolean;
  mute: boolean;
}
export interface fullScreenProps {
  visible: boolean;
  onClose: () => void;
  source: number;
}
