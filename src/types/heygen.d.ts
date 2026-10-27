declare module "@heygen/streaming-avatar" {
  export enum TaskType {
    TALK = "talk",
    REPEAT = "repeat",
  }

  export enum AvatarQuality {
    Low = "low",
    Medium = "medium",
    High = "high",
  }

  export interface StartAvatarParams {
    quality?: AvatarQuality;
    avatarName?: string;
    voice?: {
      voiceId?: string;
      rate?: number;
    };
  }

  export default class StreamingAvatar {
    constructor(config: { token: string });
    on(event: string, callback: (event: any) => void): void;
    createStartAvatar(params: StartAvatarParams): Promise<any>;
    speak(params: { text: string; task_type?: TaskType }): Promise<any>;
    stopAvatar(): Promise<any>;
  }
}
